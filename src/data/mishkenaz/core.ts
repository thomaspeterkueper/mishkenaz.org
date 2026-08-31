export type MishkenazVector = {
  id: string;
  name: string;
  octave: number | null;
  core: string;
  usage: string;
  kind: 'nullpoint' | 'semantic' | 'bridge' | 'operator';
};

export const MISHKENAZ_CANON_VERSION = '0.9';
export const MISHKENAZ_CANON_DATE = '2026-08-30';

export const nullpoint: MishkenazVector = {
  id: 'V00',
  name: 'Avi',
  octave: null,
  core: 'Leere — Potenzial vor aller Form',
  usage: 'Stille, Anfänge, das Vor-der-Zeit',
  kind: 'nullpoint',
};

export const octaveTitles: Record<number, string> = {
  1: 'Physis und erste Wahrnehmung',
  2: 'Kontakt und Öffnung',
  3: 'Relation und Spannung',
  4: 'Bewegung und Schwelle',
  5: 'Übertragung und Transformation',
  6: 'Rückkopplung und Ordnung',
  7: 'Meta-Operatoren',
};

export const vectors: MishkenazVector[] = [
  { id: 'V01', name: 'Sol', octave: 1, core: 'Impuls, Punkt, der erste Stoß', usage: 'Entscheidungsmomente, Anfänge von Bewegung', kind: 'semantic' },
  { id: 'V02', name: 'Mira', octave: 1, core: 'Welle, Fluss, Bewegung', usage: 'Wasser, Wandel, Sehnsucht', kind: 'semantic' },
  { id: 'V03', name: 'Sa', octave: 1, core: 'Bruch, Riss, Trennung', usage: 'Trennungen, Katastrophen, der Moment des Zerbrechens', kind: 'semantic' },
  { id: 'V04', name: 'Ona', octave: 1, core: 'Ganzheit, Vollständigkeit, Kreis', usage: 'Vollendung, Heimkehren, das Runde', kind: 'semantic' },
  { id: 'V05', name: 'Vya', octave: 1, core: 'Richtung, Wille, Absicht', usage: 'Entscheidungen, Ziele, der Wille einer Figur', kind: 'semantic' },
  { id: 'V06', name: 'Saha', octave: 1, core: 'Sehen, Wahrnehmen', usage: 'Bewusstseinserfahrungen, Erkenntnis, Blickkontakt', kind: 'semantic' },

  { id: 'V07', name: 'Nga', octave: 2, core: 'Ping, Ruf, Echo', usage: 'erste Kontaktaufnahme, Rufen ins Ungewisse', kind: 'semantic' },
  { id: 'V08', name: 'Pa', octave: 2, core: 'Echo, Antwort, Reflexion', usage: 'Widerhall, Erinnerung als Resonanz', kind: 'semantic' },
  { id: 'V09', name: 'La', octave: 2, core: 'Öffnung, Tor, Raum', usage: 'Schwellenmomente, Eingänge, Möglichkeitsräume', kind: 'semantic' },
  { id: 'V10', name: 'Ra', octave: 2, core: 'Fluss, Strom', usage: 'Zeitfluss, Lebensfluss, das Unaufhaltbare', kind: 'semantic' },
  { id: 'V11', name: 'Sa-h', octave: 2, core: 'Entropie, Auflösung', usage: 'Verfall, das Auseinandergehende', kind: 'semantic' },
  { id: 'V12', name: 'Bi', octave: 2, core: 'Wärme, Quelle', usage: 'Zuneigung, Herkunft, das Nährende', kind: 'semantic' },

  { id: 'V13', name: 'Wi', octave: 3, core: 'Kälte, Abwesenheit von Wärme', usage: 'Einsamkeit, Gleichgültigkeit', kind: 'semantic' },
  { id: 'V14', name: 'Ku', octave: 3, core: 'Vakuum, das Saugende', usage: 'Sehnsucht als körperlicher Zug, Verlust', kind: 'semantic' },
  { id: 'V15', name: 'Thu', octave: 3, core: 'Ausdehnung', usage: 'Expansion, Wachstum', kind: 'semantic' },
  { id: 'V16', name: 'Ma', octave: 3, core: 'Bindung, Nähren', usage: 'Mutterliebe, Beziehung, das Haltende', kind: 'semantic' },
  { id: 'V17', name: 'Ta', octave: 3, core: 'Grenze, Gegenüber', usage: 'ethische Grenzen, Begegnung, Ich-Du', kind: 'semantic' },
  { id: 'V18', name: 'Tor', octave: 3, core: 'Torsion, Verdrillung', usage: 'Konflikte, Spannungen, die sich aufschrauben', kind: 'semantic' },

  { id: 'V19', name: 'Flu', octave: 4, core: 'Flüssigkeit, Verwandlung', usage: 'Metamorphosen, das Fließende in Charakteren', kind: 'semantic' },
  { id: 'V20', name: 'Kin', octave: 4, core: 'Pilgerschaft, Weg-sein', usage: 'Reisen als innerer Prozess', kind: 'semantic' },
  { id: 'V21', name: 'Syn', octave: 4, core: 'Synchronie, Gleichklang', usage: 'Momente der Übereinstimmung', kind: 'semantic' },
  { id: 'V22', name: 'Abs', octave: 4, core: 'Absorption, Aufnehmen', usage: 'Lernen, Empfangen, sich öffnen', kind: 'semantic' },
  { id: 'V23', name: 'Ref', octave: 4, core: 'Reflexion, Rückschau', usage: 'Erinnerung, Selbstreflexion, Spiegel', kind: 'semantic' },
  { id: 'V24', name: 'Lim', octave: 4, core: 'Schwelle, Grenze als Ort', usage: 'Übergänge, Schwellensituationen', kind: 'semantic' },

  { id: 'V25', name: 'Tra', octave: 5, core: 'Transmission, Weitergabe', usage: 'Lehrmomente, Überlieferung', kind: 'semantic' },
  { id: 'V26', name: 'Ska', octave: 5, core: 'Skalierung, Muster', usage: 'wiederkehrende Muster in verschiedenen Größen', kind: 'semantic' },
  { id: 'V27', name: 'Vol', octave: 5, core: 'Volatilität, Unbeständigkeit', usage: 'instabile Situationen, Figuren im Wandel', kind: 'semantic' },
  { id: 'V28', name: 'Res', octave: 5, core: 'Residuum, Rest', usage: 'was nach dem Verlust bleibt', kind: 'semantic' },
  { id: 'V29', name: 'Avi-Sol', octave: 5, core: 'Licht-Vakuum, Schöpfungsmoment', usage: 'Augenblicke der Entstehung aus dem Nichts', kind: 'semantic' },
  { id: 'V30', name: 'Mö', octave: 5, core: 'Möbius-Knick, Umkehrung', usage: 'wenn Innen und Außen sich tauschen', kind: 'semantic' },

  { id: 'V31', name: 'Rek', octave: 6, core: 'Rekursion, Schleife', usage: 'Muster, die sich wiederholen', kind: 'semantic' },
  { id: 'V32', name: 'Log', octave: 6, core: 'Logik-Struktur, Bauen', usage: 'Architektur, Planung, das bewusste Konstruieren', kind: 'semantic' },
  { id: 'V33', name: 'Sym', octave: 6, core: 'Symmetrie', usage: 'Balance, Gleichgewicht', kind: 'semantic' },
  { id: 'V34', name: 'Phi', octave: 6, core: 'Goldenes Maß, Harmonie', usage: 'Schönheit als strukturelles Prinzip', kind: 'semantic' },
  { id: 'V35', name: 'Ona-nO', octave: 6, core: 'Ur-Einheit, mögliche Rückkehr', usage: 'strukturelle Schwelle: Rückkehr oder neue Windung', kind: 'semantic' },
  { id: 'V36', name: 'Ori / -ori', octave: 6, core: 'zyklische Wiederkehr, Revalidierung', usage: 'rekursive Rückkehr; als grammatischer Operator auch -ori', kind: 'bridge' },

  { id: 'V37', name: "-h / '", octave: 7, core: 'Entropie, Zerfall, Loslassen', usage: 'Meta-Operator', kind: 'operator' },
  { id: 'V38', name: '-val', octave: 7, core: 'Emergenz, neues Erscheinen', usage: 'Meta-Operator', kind: 'operator' },
  { id: 'V39', name: '-reso', octave: 7, core: 'Resonanz, Wechselwirkung', usage: 'Meta-Operator', kind: 'operator' },
  { id: 'V40', name: '-ira', octave: 7, core: 'Attraktor, Anziehung', usage: 'Meta-Operator', kind: 'operator' },
  { id: 'V41', name: '-vya', octave: 7, core: 'Repulsor, Distanzierung', usage: 'Meta-Operator', kind: 'operator' },
  { id: 'V42', name: '-kora', octave: 7, core: 'Integration, Zusammenführung', usage: 'Meta-Operator', kind: 'operator' },
];

export const aspects = [
  { suffix: '-om', label: 'konvergent', meaning: 'als stimmig, angekommen, in Resonanz markiert', body: 'Atem, der vollständig entlassen wird' },
  { suffix: '-ath', label: 'divergent', meaning: 'als dissonant, schmerzhaft, nicht tragend markiert', body: 'Atem, der sich verkürzt' },
  { suffix: '-il', label: 'suchend', meaning: 'als unterwegs, offen, noch nicht entschieden markiert', body: 'Atem, der einatmet und hält' },
] as const;

export const aspectSemantics = {
  mode: 'relational-epistemic',
  summary: 'Die Aspekte markieren die Passung zwischen Aussage/Handlung und Situation, wie sie im Sprechen wahrgenommen und mitgeteilt wird.',
  nonOntic: 'Sie sind keine objektiven Wahrheitsmarker über Zustände der Welt.',
  plurality: 'Zwei Sprecher können denselben Vorgang ehrlich verschieden aspektieren.',
  honesty: 'Lüge entsteht, wenn ein Sprecher wissentlich gegen die eigene wahrgenommene relationale Passung aspektiert.',
} as const;

export const onaNoSemantics = {
  mode: 'structural-threshold',
  core: 'Ur-Einheit / mögliche Rückkehr',
  meaning: 'V35 markiert die strukturelle Schwelle, an der Rückkehr oder Integration möglich wird; es behauptet weder vollzogene Selbstauflösung noch verpflichtende ontologische Rückkehr.',
  continuation: 'Ob sich die Spirale schließt oder eine neue Windung beginnt, liegt außerhalb der Grammatik.',
} as const;

export const grammar = {
  slotFormula: '(ZEIT) — (NEG) — (INTENS) — STAMM — (COLL) — (ASP) — (DEPR)',
  deprivation: '-tum',
  roles: { source: "bi'", target: "la'" },
  timeParticles: [
    { form: 'avi-', meaning: 'vergangen', origin: 'Avi (V00)' },
    { form: 'sol-', meaning: 'gegenwärtig', origin: 'Sol (V01)' },
    { form: 'val-', meaning: 'zukünftig', origin: '-val (V38)' },
    { form: 'ori-', meaning: 'ewig / zyklisch', origin: 'Ori / -ori (V36)' },
  ],
} as const;

export const canonInvariants = {
  nullpoint: 'V00',
  firstVector: 'V01',
  lastVector: 'V42',
  vectorCount: 42,
  octaveCount: 7,
  vectorsPerOctave: 6,
  onaNo: 'V35',
  ori: 'V36',
  kora: 'V42',
  aspects: ['-om', '-ath', '-il'],
  aspectReading: 'relational-epistemic',
  onaNoReading: 'structural-threshold',
  deprivationSlot: 'DEPR',
} as const;
