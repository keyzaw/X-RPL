import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const app = readFileSync(join(root, 'src', 'App.jsx'), 'utf8');
const css = [
  readFileSync(join(root, 'src', 'index.css'), 'utf8'),
  readFileSync(join(root, 'src', 'App.css'), 'utf8'),
].join('\n');

const checks = [
  {
    name: 'uses a roomy application shell',
    pass: app.includes('app-shell') && css.includes('max-width: 1180px'),
  },
  {
    name: 'keeps cards compactly rounded and softly colored',
    pass:
      css.includes('border-radius: 8px') &&
      css.includes('--surface: #ffffff') &&
      css.includes('--accent-soft: #e0f2fe'),
  },
  {
    name: 'uses comfortable spacing for task rows',
    pass: css.includes('grid-template-columns: 1fr auto auto') && css.includes('padding: 18px 20px'),
  },
  {
    name: 'does not contain mojibake icon characters',
    pass: !/[âðŸ]/.test(app),
  },
];

let failed = false;

for (const check of checks) {
  if (!check.pass) {
    failed = true;
    console.error(`UI check failed: ${check.name}`);
  }
}

if (failed) {
  process.exit(1);
}

console.log('UI checks passed');
