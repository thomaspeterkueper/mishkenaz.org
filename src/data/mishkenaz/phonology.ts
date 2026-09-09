export type Urgeste = {
  nr: number;
  name: string;
  body: string;
  direction: string;
  phonemes: string;
  derivation: string;
};

export const urgesten: Urgeste[] = [
  { nr: 1, name: 'Oh', body: 'Mund weit-rund, tief', direction: 'Offenheit, Staunen, Weite', phonemes: 'O, Ō', derivation: 'Vokalqualität: kurz / lang' },
  { nr: 2, name: 'Ah', body: 'Mund maximal offen', direction: 'Weite, Raumgeben, das Äußerste', phonemes: 'A, Ā', derivation: 'Vokalqualität: kurz / lang' },
  { nr: 3, name: 'Om', body: 'Rund, nasal schließend', direction: 'Stimmigkeit, Ankommen', phonemes: 'Om als untrennbare Einheit', derivation: 'Vokalrundung → nasaler Verschluss als eine Geste' },
  { nr: 4, name: 'Ma', body: 'Bilabial-nasal, Lippenverschluss', direction: 'Bindung, Halt, das Nährende', phonemes: 'M', derivation: 'stimmhaft nasal; kein B' },
  { nr: 5, name: 'Pa', body: 'Bilabial explosiv', direction: 'Impuls, Echo', phonemes: 'P, B', derivation: 'stimmlos / stimmhaft; B stammt von Pa, nicht Ma' },
  { nr: 6, name: 'Sa', body: 'Frikativ, Zunge / Zahndamm', direction: 'Schwelle, Bruch, Übergang', phonemes: 'S, Z, SH', derivation: 'stimmlos / stimmhaft / palatalisiert' },
  { nr: 7, name: 'Auv', body: 'Diphthong AUV, fließend tief', direction: 'fließende Tiefe, das Tragende', phonemes: 'AU, V/W', derivation: 'Diphthong + Gleitlaut' },
  { nr: 8, name: 'Avi', body: 'Zentralvokal, minimal markiert', direction: 'Leere, Nullpunkt, Potenzial', phonemes: 'ə / Schwa', derivation: 'eigenständiger Reduktionsvokal; kein Duplikat von A' },
  { nr: 9, name: 'Il', body: 'Hoher Vokal, Zunge vorne', direction: 'Bewegung, Sehnsucht, Unterwegssein', phonemes: 'I, E, L, J/Y', derivation: 'Vokalqualität + lateral / Gleitlaut' },
  { nr: 10, name: 'Ku', body: 'Velar, Zungenrücken / weicher Gaumen', direction: 'Hohlraum, Suche, Mangel', phonemes: 'K, G, Ng', derivation: 'stimmlos / stimmhaft + oral / nasal' },
  { nr: 11, name: 'Bi', body: 'Bilabial, hoher Vokal — Startposition', direction: 'Ansatzpunkt, Quelle', phonemes: 'I', derivation: 'rein vokalisch-positional; B kommt von Pa' },
  { nr: 12, name: 'Ta', body: 'Alveolar, Zunge / Gaumen', direction: 'Du, Gegenüber, Grenze', phonemes: 'T, D, N, R', derivation: 'stimmlos / stimmhaft + nasal + Vibrant' },
];

export const r1Inventory = {
  consonants: ['M', 'P', 'B', 'S', 'Z', 'SH', 'V/W', 'H', 'L', 'J/Y', 'K', 'G', 'Ng', 'T', 'D', 'N', 'R'],
  vowels: ['A', 'Ā', 'O', 'Ō', 'I', 'E', 'AU', 'ə / Avi'],
} as const;

export const phonologyNotes = {
  om: 'Om ist als Urgeste eine untrennbare Übergangsgeste und wird nicht als O + M analysiert.',
  aviAuv: 'Avi und Auv sind im Grundsystem verschieden. Nur G3 Galut-Eil kennt den lokalen Merger Avi → Auv.',
  b: 'B ist primär aus der Pa-Geste abgeleitet, nicht aus Ma oder Bi.',
} as const;
