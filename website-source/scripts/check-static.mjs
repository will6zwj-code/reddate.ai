import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const output = path.resolve('out');
const routes = ['', 'features', 'features/overview', 'features/comfort', 'features/energy', 'features/safety', 'features/routines', 'download', 'why-reddate', 'science-and-research', 'vision', 'privacy', 'privacy-policy', 'support'];
let referencedAssets = new Set();
for (const route of routes) {
  const file = path.join(output, route, 'index.html');
  assert.ok(fs.existsSync(file), `Missing prerendered route: /${route}`);
  const html = fs.readFileSync(file, 'utf8');
  assert.ok(html.includes('id="main"'), `Missing page body: /${route}`);
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
    const target = path.join(output, pathname);
    const isFile = fs.existsSync(target) && fs.statSync(target).isFile();
    const isPage = fs.existsSync(path.join(target, 'index.html'));
    assert.ok(isFile || isPage, `Broken local URL ${url} in /${route}`);
    if (isFile) referencedAssets.add(pathname);
  }
}
assert.ok(fs.existsSync(path.join(output, '404.html')), 'Missing GitHub Pages 404 page');
assert.ok(fs.existsSync(path.join(output, '.nojekyll')), 'Missing .nojekyll');
assert.equal(fs.readFileSync(path.join(output, 'CNAME'), 'utf8').trim(), 'reddate.ai');
assert.ok(!fs.existsSync(path.join(output, '.openai')), 'Unexpected previous host identity');
for (const route of ['privacy', 'privacy-policy']) {
  const html = fs.readFileSync(path.join(output, route, 'index.html'), 'utf8');
  assert.ok(html.includes('mailto:hello@reddate.com.au'), `Missing live privacy contact: /${route}`);
  assert.ok(html.includes('Reddate Intelligence Pty Ltd'), `Missing responsible company: /${route}`);
  assert.ok(html.includes('We never sell your personal information.'), `Missing no-sale commitment: /${route}`);
  assert.ok(!/review draft|审阅草稿|審閱草稿|待核实|待核實/i.test(html), `Internal draft copy leaked into /${route}`);
}
const policy = fs.readFileSync(path.join(output, 'privacy-policy/index.html'), 'utf8');
assert.equal((policy.match(/<article\b/g) || []).length, 13, 'Incomplete privacy policy sections');
console.log(`Static export verified: ${routes.length} page routes, ${referencedAssets.size} referenced assets, 404, CNAME and .nojekyll.`);
