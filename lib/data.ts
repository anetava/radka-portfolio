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

// ─── Series Data ──────────────────────────────────────────────────────────────
export const SERIES: Series[] = [
  {
    id: 'solitude',
    number: '01',
    title: 'TICHO',
    tagline: 'Portréty v přirozeném světle',
    description:
      'Meditace o vnitřním klidu a přítomnosti. Každý snímek zachycuje tichý prostor mezi dechem a pohybem — natočeno výhradně v přirozeném světle.',
    photos: [
      {
        id: 'sol-1',
        src: '/photos/rs-01.jpeg',
        alt: 'Portrét v přirozeném světle',
        title: 'Ticho I',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-2',
        src: '/photos/rs-02.jpeg',
        alt: 'Přirozený portrét',
        title: 'Ticho II',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-3',
        src: '/photos/rs-03.jpeg',
        alt: 'Figura v světle',
        title: 'Mezi světy',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-4',
        src: '/photos/rs-04.jpeg',
        alt: 'Studie světla a stínu',
        title: 'Váha ticha',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-5',
        src: '/photos/rs-05.jpeg',
        alt: 'Pohled do prázdna',
        title: 'Čekárna',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-6',
        src: '/photos/rs-06.jpeg',
        alt: 'Intimní moment',
        title: 'Uvnitř',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-7',
        src: '/photos/rs-07.jpeg',
        alt: 'Portrét v okně',
        title: 'Světlo z okna',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
      {
        id: 'sol-8',
        src: '/photos/rs-08.jpeg',
        alt: 'Klid a přítomnost',
        title: 'Přítomnost',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'solitude',
      },
    ],
  },
  {
    id: 'architecture',
    number: '02',
    title: 'FORMA',
    tagline: 'Světlo & Geometrie',
    description:
      'Hledání řádu v prostoru. Dokumentace hry světla, linií a forem v každodenním prostředí — město jako portrétovaný subjekt.',
    photos: [
      {
        id: 'arch-1',
        src: '/photos/rs-09.jpeg',
        alt: 'Geometrie světla',
        title: 'Forma I',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
      {
        id: 'arch-2',
        src: '/photos/rs-10.jpeg',
        alt: 'Hra světla a stínu',
        title: 'Spirála',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
      {
        id: 'arch-3',
        src: '/photos/rs-11.jpeg',
        alt: 'Linie v prostoru',
        title: 'Poledník',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
      {
        id: 'arch-4',
        src: '/photos/rs-12.jpeg',
        alt: 'Kompozice linií',
        title: 'Gravitace III',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
      {
        id: 'arch-5',
        src: '/photos/rs-13.jpeg',
        alt: 'Minimální geometrie',
        title: 'Otvor č. 4',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
      {
        id: 'arch-6',
        src: '/photos/rs-14.jpeg',
        alt: 'Světelná studie',
        title: 'Forma II',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
      {
        id: 'arch-7',
        src: '/photos/rs-15.jpeg',
        alt: 'Prostorová kompozice',
        title: 'Zátiší',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
      {
        id: 'arch-8',
        src: '/photos/rs-16.jpeg',
        alt: 'Kontrast tmy a světla',
        title: 'Stínopis',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'architecture',
      },
    ],
  },
  {
    id: 'the-gaze',
    number: '03',
    title: 'POHLED',
    tagline: 'Intimní portréty',
    description:
      'Studie o zranitelnosti a síle. Subjekt není nikdy pasivní — drží moc rámu. Natočeno při denním světle, bez retuší.',
    photos: [
      {
        id: 'gaze-1',
        src: '/photos/rs-17.jpeg',
        alt: 'Přímý, suverénní pohled',
        title: 'Suverenita',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
      {
        id: 'gaze-2',
        src: '/photos/rs-18.jpeg',
        alt: 'Kontemplatívní portrét',
        title: 'Svědek',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
      {
        id: 'gaze-3',
        src: '/photos/rs-19.jpeg',
        alt: 'Zblízka, nestřežený okamžik',
        title: 'Clona Já',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
      {
        id: 'gaze-4',
        src: '/photos/rs-20.jpeg',
        alt: 'Profil ve světle okna',
        title: 'Vnitřní archiv',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
      {
        id: 'gaze-5',
        src: '/photos/rs-21.jpeg',
        alt: 'Pohled stranou',
        title: 'Absence',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
      {
        id: 'gaze-6',
        src: '/photos/rs-22.jpeg',
        alt: 'Portrét v pohybu',
        title: 'Tok',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
        orientation: 'portrait',
        seriesId: 'the-gaze',
      },
      {
        id: 'gaze-7',
        src: '/photos/rs-23.jpeg',
        alt: 'Uzavřený pohled',
        title: 'Dech',
        year: 2026,
        camera: 'Sony A7',
        location: 'Praha',
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
    publication: 'VOGUE CS',
    issue: 'Jaro 2026',
    src: '/photos/rs-01.jpeg',
    caption: 'Editoriál — "Tiché hodiny"',
  },
  {
    id: 'ts-2',
    publication: 'APERTURE',
    issue: 'Zima 2025',
    src: '/photos/rs-09.jpeg',
    caption: 'Sólo feature — "Architektura samoty"',
  },
  {
    id: 'ts-3',
    publication: 'ELLE CZ',
    issue: 'Září 2025',
    src: '/photos/rs-17.jpeg',
    caption: 'Obálka a 12stránkové portfolio',
  },
  {
    id: 'ts-4',
    publication: 'RESPEKT',
    issue: 'Červen 2025',
    src: '/photos/rs-05.jpeg',
    caption: 'Profil — "Oko za objektivem"',
  },
  {
    id: 'ts-5',
    publication: 'FOTOGRAF MAGAZINE',
    issue: 'Listopad 2025',
    src: '/photos/rs-13.jpeg',
    caption: 'Recenze výstavy — "Váha ticha"',
  },
];

// ─── Hero image ───────────────────────────────────────────────────────────────
export const HERO_IMAGE = '/photos/rs-01.jpeg';
