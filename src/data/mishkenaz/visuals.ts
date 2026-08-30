export type VisualKind = 'atmospheric' | 'diagram' | 'hybrid';
export type VisualStatus = 'canonical' | 'work-near' | 'experimental';

export interface VisualAsset {
  src: string;
  ready: boolean;
  width: number;
  height: number;
  format: 'webp' | 'svg' | 'png' | 'jpg';
}

export interface MishkenazVisual {
  id: string;
  slug: string;
  title: string;
  kind: VisualKind;
  status: VisualStatus;
  eyebrow: string;
  summary: string;
  caption: string;
  alt: string;
  asset: VisualAsset;
  relatedTopics: string[];
  relatedPages: Array<{ label: string; href: string }>;
  placement: {
    homepage: boolean;
    worldIndex: boolean;
    detailPage: boolean;
  };
}

export const visualKindLabels: Record<VisualKind, string> = {
  atmospheric: 'Atmosphärische Illustration',
  diagram: 'Sachliche Grafik',
  hybrid: 'Hybridvisualisierung',
};

export const visualStatusLabels: Record<VisualStatus, string> = {
  canonical: 'Kanonische Darstellung',
  'work-near': 'Werknahe Visualisierung',
  experimental: 'Experimentelle Studie',
};

export const mishkenazVisuals: MishkenazVisual[] = [
  {
    id: 'VIS-MISH-0001',
    slug: 'meditationskammer',
    title: 'Meditationskammer',
    kind: 'atmospheric',
    status: 'work-near',
    eyebrow: 'Raumstudie',
    summary:
      'Ein kontemplativer Resonanzraum, in dem Kreis, Öffnung, Abstand und Klangkörper räumlich erfahrbar werden. Die Darstellung ist werknahe Visualisierung, noch keine verbindliche architektonische Rekonstruktion.',
    caption:
      'Meditationskammer — werknahe Raumstudie zu Sammlung, Stille, Grenze und Resonanz im Mishkenaz-Kontext.',
    alt:
      'Runder warmer Meditationsraum mit zentralem Oberlicht, konzentrischen Bodenringen und hängenden Klangobjekten; mehrere Menschen sitzen mit Abstand am Rand des Raums.',
    asset: {
      src: '/images/mishkenaz/meditationskammer-01.webp',
      ready: false,
      width: 1448,
      height: 1086,
      format: 'webp',
    },
    relatedTopics: ['Resonanz', 'Ta', 'Stille', 'Körper', 'Raum'],
    relatedPages: [
      { label: 'Grammatik und Resonanzaspekte', href: '/mishkenaz/grammatik' },
      { label: 'Urgesten und Körper', href: '/mishkenaz/proto-mishkenaz' },
    ],
    placement: {
      homepage: true,
      worldIndex: true,
      detailPage: true,
    },
  },
];

export const featuredVisuals = mishkenazVisuals.filter((visual) => visual.placement.homepage);
export const worldVisuals = mishkenazVisuals.filter((visual) => visual.placement.worldIndex);
