import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { execFileSync } from 'node:child_process';

// Copy only the public, dependency-free showcase; never copy Git data or secrets.
const source = resolve(process.argv[2] || '.togetherpass-source');
const destination = resolve('public/togetherpass');
if (source === destination) throw new Error('Source and destination must differ');
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const file of ['index.html', 'about.html', 'app.js', 'about.js', 'style.css']) {
  await cp(resolve(source, file), resolve(destination, file));
}
const commit = execFileSync('git', ['-C', source, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
await writeFile(resolve(destination, 'source.json'), JSON.stringify({
  repository: 'jasonwu5isme/TogetherPass', commit,
}, null, 2) + '\n');
console.log(`Together Pass synchronized from ${commit}`);
