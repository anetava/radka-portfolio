// ─── Types ────────────────────────────────────────────────────────────────────
export type Orientation = 'portrait' | 'landscape';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  year: number;
  camera: string;
  location: string;
  orientation: Orientation;
  seriesId: SeriesId;
}

export type SeriesId = 'solitude' | 'architecture' | 'the-gaze';

export interface Series {
  id: SeriesId;
  number: string;
  title: string;
  tagline: string;
  description: string;
  photos: Photo[];
}

export interface Tearsheet {
  id: string;
  publication: string;
  issue: string;
  src: string;
  caption: string;
}

// ─── Unsplash helper ──────────────────────────────────────────────────────────
const u = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}${h ? `&h=${h}` : ''}&auto=format&fit=crop&q=85`;

// ─── Series Data ──────────────────────────────────────────────────────────────
export const SERIES: Series[] = [
  {
    id: 'solitude',
    number: '01',
    title: 'SOLITUDE',
    tagline: 'Monochrome Human Forms',
    description:
      'A meditation on isolation and inner stillness. Each frame captures the quiet weight of being alone — not lonely. Shot entirely on medium format film, in available light.',
    photos: [
      {
        id: 'sol-1',
        src: u('1531746020798-e6953c6e8e04', 1200, 1600),
        alt: 'Figure dissolved in diffused light',
        title: 'Dissolve I',
        year: 2023,
        camera: 'Hasselblad 500C/M',
        location: 'Oslo, Norway',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-2',
        src: u('1507003211169-0a1dd7228f2d', 1200, 1600),
        alt: 'Silhouette against white wall',
        title: 'Negative Space II',
        year: 2023,
        camera: 'Hasselblad 500C/M',
        location: 'Copenhagen, Denmark',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-3',
        src: u('1544005313-943140bfe2d1', 1400, 900),
        alt: 'Form suspended in motion',
        title: 'Between Worlds',
        year: 2022,
        camera: 'Leica M10-R',
        location: 'Prague, Czech Republic',
        orientation: 'landscape',
        seriesId: 'solitude',
      },
      {
        id: 'sol-4',
        src: u('1517841905240-472988babdf9', 1200, 1600),
        alt: 'Portrait study in ambient shadow',
        title: 'Weight of Silence',
        year: 2022,
        camera: 'Hasselblad 500C/M',
        location: 'Berlin, Germany',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-5',
        src: u('1438761681033-6461ffad8d80', 1200, 1600),
        alt: 'Gazing into empty space',
        title: 'The Waiting Room',
        year: 2022,
        camera: 'Leica M10-R',
        location: 'Vienna, Austria',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
    ],
  },
  {
    id: 'architecture',
    number: '02',
    title: 'RAW ARCHITECTURE',
    tagline: 'Light & Shadow Studies',
    description:
      'When concrete becomes canvas. Documenting the interplay of geometric form and transient light across modernist and brutalist spaces. The city as a portrait subject.',
    photos: [
      {
        id: 'arch-1',
        src: u('1486325212027-8081e485255e', 1600, 1067),
        alt: 'Brutalist facade at golden hour',
        title: 'Monolith I',
        year: 2024,
        camera: 'Phase One XF IQ4 150MP',
        location: 'Zurich, Switzerland',
        orientation: 'landscape',
        seriesId: 'architecture',
      },
      {
        id: 'arch-2',
        src: u('1494526585095-c41746248156', 1200, 1600),
        alt: 'Geometric stairwell helixing upward',
        title: 'Helix',
        year: 2024,
        camera: 'Phase One XF IQ4 150MP',
        location: 'Vienna, Austria',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
      {
        id: 'arch-3',
        src: u('1524230572899-a752b3835840', 1600, 1067),
        alt: 'Long shadow corridor in concrete',
        title: 'Meridian',
        year: 2023,
        camera: 'Leica SL2-S',
        location: 'Paris, France',
        orientation: 'landscape',
        seriesId: 'architecture',
      },
      {
        id: 'arch-4',
        src: u('1487958449943-2429e8be8625', 1200, 1600),
        alt: 'Tower piercing overcast sky',
        title: 'Gravity III',
        year: 2023,
        camera: 'Phase One XF IQ4 150MP',
        location: 'Rotterdam, Netherlands',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
      {
        id: 'arch-5',
        src: u('1568605114967-8130f3a36994', 1600, 1067),
        alt: 'Minimal window geometry',
        title: 'Aperture No. 4',
        year: 2024,
        camera: 'Leica SL2-S',
        location: 'Warsaw, Poland',
        orientation: 'landscape',
        seriesId: 'architecture',
      },
    ],
  },
  {
    id: 'the-gaze',
    number: '03',
    title: 'THE GAZE',
    tagline: 'Intimate Portraiture',
    description:
      'A study in vulnerability and agency. The subject is never passive — they hold the power of the frame. Shot in available window light, no reflectors, no retouching.',
    photos: [
      {
        id: 'gaze-1',
        src: u('1508214751196-bcfd4ca60f91', 1200, 1600),
        alt: 'Direct, sovereign eye contact',
        title: 'Sovereignty',
        year: 2024,
        camera: 'Hasselblad X2D 100C',
        location: 'New York, USA',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
      {
        id: 'gaze-2',
        src: u('1534528741775-53994a69daeb', 1200, 1600),
        alt: 'Contemplative, side-lit portrait',
        title: 'The Witness',
        year: 2024,
        camera: 'Hasselblad X2D 100C',
        location: 'Tokyo, Japan',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
      {
        id: 'gaze-3',
        src: u('1494790108377-be9c29b29330', 1200, 1500),
        alt: 'Close portrait, unguarded moment',
        title: 'Aperture of Self',
        year: 2023,
        camera: 'Leica M11',
        location: 'London, UK',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
      {
        id: 'gaze-4',
        src: u('1524504388429-b3d5d6b13f45', 1200, 1600),
        alt: 'Profile study in window light',
        title: 'Inner Archive',
        year: 2023,
        camera: 'Hasselblad X2D 100C',
        location: 'Los Angeles, USA',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
    ],
  },
];

// ─── Tearsheets ───────────────────────────────────────────────────────────────
export const TEARSHEETS: Tearsheet[] = [
  {
    id: 'ts-1',
    publication: 'VOGUE ITALIA',
    issue: 'March 2024',
    src: u('1558618666-fcd25c85cd64', 1400, 900),
    caption: 'Editorial spread — "The Quiet Hours"',
  },
  {
    id: 'ts-2',
    publication: 'APERTURE MAGAZINE',
    issue: 'Winter 2023',
    src: u('1506905925346-21bda4d32df4', 900, 1200),
    caption: 'Solo feature — "Architectures of Solitude"',
  },
  {
    id: 'ts-3',
    publication: 'DAZED & CONFUSED',
    issue: 'September 2023',
    src: u('1515023115689-589179b25729', 1400, 900),
    caption: 'Cover and 12-page portfolio',
  },
  {
    id: 'ts-4',
    publication: 'WSJ. MAGAZINE',
    issue: 'June 2024',
    src: u('1545987796-200677ee1011', 1400, 900),
    caption: 'Profile — "The Eye Behind the Lens"',
  },
  {
    id: 'ts-5',
    publication: 'ARTFORUM',
    issue: 'November 2023',
    src: u('1531746020798-e6953c6e8e04', 900, 1200),
    caption: 'Gallery review — "Weight of Silence" exhibition',
  },
];

// ─── Hero image ───────────────────────────────────────────────────────────────
export const HERO_IMAGE = u('1531746020798-e6953c6e8e04', 1600, 2200);
