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

export type SeriesId =
  | 'solitude'
  | 'architecture'
  | 'the-gaze'
  | 'svetlo'
  | 'prostor'
  | 'detail'
  | 'pribeh'
  | 'moment'
  | 'prichod';

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

// ─── Helper: build photo entry ───────────────────────────────────────────────
function p(
  id: string,
  n: number,
  seriesId: SeriesId,
  title: string,
  alt: string,
  pad = 2,
): Photo {
  const num = n.toString().padStart(pad, '0');
  return {
    id,
    src: `/photos/rs-${num}.jpeg`,
    alt,
    title,
    year: 2026,
    camera: 'Sony A7',
    location: 'Praha',
    orientation: 'portrait',
    seriesId,
  };
}

// ─── Series Data ──────────────────────────────────────────────────────────────
export const SERIES: Series[] = [
  // ── 01 TICHO ──────────────────────────────────────────────────────────────
  {
    id: 'solitude',
    number: '01',
    title: 'TICHO',
    tagline: 'Portréty v přirozeném světle',
    description:
      'Meditace o vnitřním klidu a přítomnosti. Každý snímek zachycuje tichý prostor mezi dechem a pohybem — natočeno výhradně v přirozeném světle.',
    photos: [
      p('sol-1', 1, 'solitude', 'Ticho I', 'Portrét v přirozeném světle'),
      p('sol-2', 2, 'solitude', 'Ticho II', 'Přirozený portrét'),
      p('sol-3', 3, 'solitude', 'Mezi světy', 'Figura v světle'),
      p('sol-4', 4, 'solitude', 'Váha ticha', 'Studie světla a stínu'),
      p('sol-5', 5, 'solitude', 'Čekárna', 'Pohled do prázdna'),
      p('sol-6', 6, 'solitude', 'Uvnitř', 'Intimní moment'),
      p('sol-7', 7, 'solitude', 'Světlo z okna', 'Portrét v okně'),
      p('sol-8', 8, 'solitude', 'Přítomnost', 'Klid a přítomnost'),
    ],
  },

  // ── 02 FORMA ──────────────────────────────────────────────────────────────
  {
    id: 'architecture',
    number: '02',
    title: 'FORMA',
    tagline: 'Světlo & Geometrie',
    description:
      'Hledání řádu v prostoru. Dokumentace hry světla, linií a forem v každodenním prostředí — město jako portrétovaný subjekt.',
    photos: [
      p('arch-1',  9, 'architecture', 'Forma I',     'Geometrie světla'),
      p('arch-2', 10, 'architecture', 'Spirála',      'Hra světla a stínu'),
      p('arch-3', 11, 'architecture', 'Poledník',     'Linie v prostoru'),
      p('arch-4', 12, 'architecture', 'Gravitace III','Kompozice linií'),
      p('arch-5', 13, 'architecture', 'Otvor č. 4',   'Minimální geometrie'),
      p('arch-6', 14, 'architecture', 'Forma II',     'Světelná studie'),
      p('arch-7', 15, 'architecture', 'Zátiší',       'Prostorová kompozice'),
      p('arch-8', 16, 'architecture', 'Stínopis',     'Kontrast tmy a světla'),
    ],
  },

  // ── 03 POHLED ─────────────────────────────────────────────────────────────
  {
    id: 'the-gaze',
    number: '03',
    title: 'POHLED',
    tagline: 'Intimní portréty',
    description:
      'Studie o zranitelnosti a síle. Subjekt není nikdy pasivní — drží moc rámu. Natočeno při denním světle, bez retuší.',
    photos: [
      p('gaze-1', 17, 'the-gaze', 'Suverenita',  'Přímý, suverénní pohled'),
      p('gaze-2', 18, 'the-gaze', 'Svědek',       'Kontemplatívní portrét'),
      p('gaze-3', 19, 'the-gaze', 'Clona Já',     'Zblízka, nestřežený okamžik'),
      p('gaze-4', 20, 'the-gaze', 'Vnitřní archiv','Profil ve světle okna'),
      p('gaze-5', 21, 'the-gaze', 'Absence',      'Pohled stranou'),
      p('gaze-6', 22, 'the-gaze', 'Tok',          'Portrét v pohybu'),
      p('gaze-7', 23, 'the-gaze', 'Dech',         'Uzavřený pohled'),
    ],
  },

  // ── 04 SVĚTLO ─────────────────────────────────────────────────────────────
  {
    id: 'svetlo',
    number: '04',
    title: 'SVĚTLO',
    tagline: 'Studie přirozeného světla',
    description:
      'Světlo jako hlavní hrdina každého záběru. Série zachycuje proměnu přirozeného světla v průběhu dne — od jemného rána po ostré odpoledne.',
    photos: Array.from({ length: 18 }, (_, i) =>
      p(`sv-${i + 1}`, 24 + i, 'svetlo', `Světlo ${i + 1}`, `Světelná studie ${i + 1}`, 3)
    ),
  },

  // ── 05 PŘÍCHOD ────────────────────────────────────────────────────────────
  {
    id: 'prichod',
    number: '05',
    title: 'PŘÍCHOD',
    tagline: 'Čtyři okamžiky',
    description:
      'Čtyři snímky. Čtyři okamžiky vstupu — do prostoru, do světla, do vztahu. Minimalistická série o prahu a přechodu.',
    photos: Array.from({ length: 4 }, (_, i) =>
      p(`pr-${i + 1}`, 42 + i, 'prichod', `Příchod ${i + 1}`, `Okamžik přechodu ${i + 1}`, 3)
    ),
  },

  // ── 06 PROSTOR ────────────────────────────────────────────────────────────
  {
    id: 'prostor',
    number: '06',
    title: 'PROSTOR',
    tagline: 'Tělo & Architektura',
    description:
      'Jak lidské tělo obývá, formuje a nechává se formovat prostorem kolem sebe. Dvacet čtyři záběrů z jednoho dne.',
    photos: Array.from({ length: 24 }, (_, i) =>
      p(`ps-${i + 1}`, 46 + i, 'prostor', `Prostor ${i + 1}`, `Tělo v prostoru ${i + 1}`, 3)
    ),
  },

  // ── 07 DETAIL ─────────────────────────────────────────────────────────────
  {
    id: 'detail',
    number: '07',
    title: 'DETAIL',
    tagline: 'Co oko přehlíží',
    description:
      'Makro pohled na textury, povrchy a skryté linie každodennosti. Dvanáct obrazů toho, co vidíme jen tehdy, když se zastavíme.',
    photos: Array.from({ length: 12 }, (_, i) =>
      p(`dt-${i + 1}`, 70 + i, 'detail', `Detail ${i + 1}`, `Textura a povrch ${i + 1}`, 3)
    ),
  },

  // ── 08 PŘÍBĚH ─────────────────────────────────────────────────────────────
  {
    id: 'pribeh',
    number: '08',
    title: 'PŘÍBĚH',
    tagline: 'Dokumentární portréty',
    description:
      'Každý člověk nese v sobě příběh. Tato série se snaží naslouchat bez slov — dvacet osm momentů autentické přítomnosti.',
    photos: Array.from({ length: 28 }, (_, i) =>
      p(`pb-${i + 1}`, 82 + i, 'pribeh', `Příběh ${i + 1}`, `Autentický moment ${i + 1}`, 3)
    ),
  },

  // ── 09 MOMENT ─────────────────────────────────────────────────────────────
  {
    id: 'moment',
    number: '09',
    title: 'MOMENT',
    tagline: 'Zachycené zlomky času',
    description:
      'Dvacet pět snímků, které existují jen díky tomu, že jsem byla na správném místě ve správný čas. Nic nebylo naplánováno.',
    photos: Array.from({ length: 25 }, (_, i) =>
      p(`mo-${i + 1}`, 110 + i, 'moment', `Moment ${i + 1}`, `Zlomek času ${i + 1}`, 3)
    ),
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
    src: '/photos/rs-024.jpeg',
    caption: 'Recenze výstavy — "Váha ticha"',
  },
];

// ─── Hero image ───────────────────────────────────────────────────────────────
export const HERO_IMAGE = '/photos/rs-01.jpeg';
