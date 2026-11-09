import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import assert from 'node:assert/strict';
const root=process.cwd();
const keys=new Set();
const isText=n=>ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n);
for(const file of ['lib/content.ts','components/site.tsx']) {
 const sf=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 function visit(n) {
  if(ts.isArrayLiteralExpression(n)) {
   const es=n.elements;
   for(let i=1;i<es.length;i++) if(isText(es[i])&&isText(es[i-1])&&/[\u3400-\u9fff]/u.test(es[i].text)&&!/[\u3400-\u9fff]/u.test(es[i-1].text)) keys.add(es[i-1].text);
   if(es.length===2&&es.every(isText)&&!es[0].text.startsWith('/')) keys.add(es[0].text);
  }
  ts.forEachChild(n,visit);
 }
 visit(sf);
}
const sf=ts.createSourceFile('labels.ts',fs.readFileSync('lib/labels.ts','utf8'),ts.ScriptTarget.Latest,true);
function labels(n){if(ts.isPropertyAssignment(n)&&isText(n.name)&&isText(n.initializer))keys.add(n.name.text);ts.forEachChild(n,labels)}labels(sf);
for(const lang of ['zh-Hant','ja','ko','vi','ar','pa']){
 const d=JSON.parse(fs.readFileSync(`lib/locales/${lang}.json`,'utf8'));
 assert.deepEqual(Object.keys(d).sort(),[...keys].sort(),`${lang}: locale keys must match source`);
 for(const [key,value] of Object.entries(d))assert.ok(typeof value==='string'&&value.trim(),`${lang}: empty translation for ${key}`);
 console.log(`${lang}: ${keys.size} translations complete`);
}
// Exercise actual locale resolver and links after transpiling the TS module.
function loadTs(file){const out={};const js=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;const req=specifier=>specifier.endsWith('.json')?JSON.parse(fs.readFileSync(path.resolve(path.dirname(file),specifier),'utf8')):loadTs(path.resolve(path.dirname(file),specifier+'.ts'));new Function('require','exports','URL',js)(req,out,URL);return out;}
const {resolveLocale,localisedHref,translate}=loadTs(path.join(root,'lib/i18n.ts'));
for(const [input,expected] of [['en','en-AU'],['en-GB','en-AU'],['zh','zh-Hans'],['zh-TW','zh-Hant'],['zh-HK','zh-Hant'],['ko-KR','ko'],['ja-JP','ja'],['vi-VN','vi'],['ar-AU','ar'],['pa-Guru-IN','pa'],['pa-Arab',undefined],['unknown',undefined],[null,undefined],[['ar','ja'],undefined]])assert.equal(resolveLocale(input),expected);
assert.equal(localisedHref('/vision?mode=preview#journey','ar'),'/vision?mode=preview&lang=ar#journey');
assert.equal(localisedHref('https://apps.apple.com/example','ja'),'https://apps.apple.com/example');
assert.equal(localisedHref('#main','ko'),'#main');
assert.equal(translate(['Download App','下载 App'],'zh-Hans'),'下载 App');
assert.notEqual(translate('Choose your language','ja'),'Choose your language');
console.log('Locale selection, legacy preferences, script distinction and link preservation passed.');
