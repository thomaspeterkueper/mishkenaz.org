import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const core = fs.readFileSync(path.join(root, 'src/data/mishkenaz/core.ts'), 'utf8');
const pagesDir = path.join(root, 'src/pages/mishkenaz');
const pages = fs.readdirSync(pagesDir)
  .filter((name) => name.endsWith('.astro'))
  .map((name) => fs.readFileSync(path.join(pagesDir, name), 'utf8'))
  .join('\n');

const failures = [];
const expect = (condition, message) => {
  if (!condition) failures.push(message);
};

const ids = [...core.matchAll(/id:\s*'(V\d{2})'/g)].map((match) => match[1]);
const vectors = ids.filter((id) => id !== 'V00');

expect(ids.filter((id) => id === 'V00').length === 1, 'V00 must exist exactly once.');
expect(vectors.length === 42, `Expected 42 vectors, found ${vectors.length}.`);
expect(new Set(vectors).size === 42, 'Vector IDs must be unique.');

for (let i = 1; i <= 42; i += 1) {
  const id = `V${String(i).padStart(2, '0')}`;
  expect(vectors.includes(id), `Missing ${id}.`);
}

for (let octave = 1; octave <= 7; octave += 1) {
  const count = [...core.matchAll(new RegExp(`octave:\\s*${octave},`, 'g'))].length;
  expect(count === 6, `Octave ${octave} must contain six vectors; found ${count}.`);
}

const mappings = [
  ["id: 'V11', name: 'Sa-h'", 'V11 must be Sa-h.'],
  ["id: 'V19', name: 'Flu'", 'V19 must be Flu.'],
  ["id: 'V35', name: 'Ona-nO'", 'V35 must be Ona-nO.'],
  ["id: 'V36', name: 'Ori / -ori'", 'V36 must be Ori / -ori.'],
  ["id: 'V37', name: \"-h / '\"", "V37 must be -h / '."],
  ["id: 'V38', name: '-val'", 'V38 must be -val.'],
  ["id: 'V39', name: '-reso'", 'V39 must be -reso.'],
  ["id: 'V40', name: '-ira'", 'V40 must be -ira.'],
  ["id: 'V41', name: '-vya'", 'V41 must be -vya.'],
  ["id: 'V42', name: '-kora'", 'V42 must be -kora.'],
];

for (const [needle, message] of mappings) expect(core.includes(needle), message);

expect(core.includes('(DEPR)'), 'Grammar slot formula must contain DEPR.');
expect(core.includes("aspects: ['-om', '-ath', '-il']"), 'Aspects must be exactly -om, -ath, -il.');
expect(core.includes("deprivationSlot: 'DEPR'"), 'Deprivation slot invariant must remain DEPR.');
expect(core.includes("aspectReading: 'relational-epistemic'"), 'Aspect semantics must remain relational-epistemic.');
expect(core.includes("onaNoReading: 'structural-threshold'"), 'Ona-nO must remain a structural threshold, not an obligatory ontic return.');
expect(core.includes("core: 'Ur-Einheit, mögliche Rückkehr'"), 'Ona-nO core meaning must remain possible rather than completed return.');

const forbidden = [
  ['Ona-nO (V42)', 'Legacy Ona-nO (V42) mapping found in pages.'],
  ['V42 Ona-nO', 'Legacy V42 Ona-nO mapping found in pages.'],
  ['V40 Kora', 'Legacy V40 Kora mapping found in pages.'],
  ['(EVID)', 'Legacy EVID slot found in pages.'],
  ['Offene Kanonfrage:', 'Resolved semantic questions must not remain presented as open on public reference pages.'],
  ['vollständige Auflösung', 'Ona-nO must not be presented as completed dissolution on public reference pages.'],
];

for (const [needle, message] of forbidden) expect(!pages.includes(needle), message);

if (failures.length) {
  console.error('Mishkenaz canon check failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Mishkenaz canon check passed.');
