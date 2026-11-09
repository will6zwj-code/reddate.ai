import { readdir, readFile, writeFile, mkdir, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const built = path.join(root, 'website-source/out');
const manifest = path.join(root, '.static-files.json');
async function filesIn(dir, prefix = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isSymbolicLink()) throw new Error('Build output must not contain symlinks.');
    if (entry.isDirectory()) files.push(...await filesIn(path.join(dir, entry.name), relative));
    else if (entry.isFile()) files.push(relative);
  }
  return files.sort();
}
function safeGeneratedPath(file) {
  return typeof file === 'string' && !path.isAbsolute(file) && !file.split('/').includes('..')
    && !/^(?:\.git(?:\/|$)|website-source(?:\/|$)|scripts(?:\/|$)|README\.md$|\.static-files\.json$)/.test(file);
}
const nextFiles = await filesIn(built);
if (!nextFiles.includes('index.html') || !nextFiles.includes('.nojekyll') || (await readFile(path.join(built, 'CNAME'), 'utf8')).trim() !== 'reddate.ai') {
  throw new Error('Expected a complete static Reddate build with CNAME and .nojekyll.');
}
let previousFiles = [];
try { previousFiles = JSON.parse(await readFile(manifest, 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
if (!Array.isArray(previousFiles) || [...nextFiles, ...previousFiles].some(file => !safeGeneratedPath(file))) {
  throw new Error('Invalid generated file manifest.');
}
for (const file of nextFiles) {
  const target = path.join(root, file);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(path.join(built, file), target);
}
for (const file of previousFiles) if (!nextFiles.includes(file)) await rm(path.join(root, file), { force: true });
await writeFile(manifest, JSON.stringify(nextFiles, null, 2) + '\n');
console.log(`Staged ${nextFiles.length} static files for https://reddate.ai`);
