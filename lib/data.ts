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

// ─── Helper ───────────────────────────────────────────────────────────────────
function ph(
  id: string,
  n: number,
  seriesId: SeriesId,
  title: string,
  alt: string,
  pad = 2,
): Photo {
  return {
    id,
    src: `/photos/rs-${n.toString().padStart(pad, '0')}.jpeg`,
    alt,
    title,
    year: 2026,
    camera: 'Sony A7',
    location: 'Praha',
    orientation: 'portrait',
    seriesId,
  };
}

// ─── Series ───────────────────────────────────────────────────────────────────
export const SERIES: Series[] = [

  // ── 01 TICHO ────────────────────────────────────────────────────────────────
  {
    id: 'solitude',
    number: '01',
    title: 'TICHO',
    tagline: 'Portréty v přirozeném světle',
    description: 'Meditace o vnitřním klidu a přítomnosti. Každý snímek zachycuje tichý prostor mezi dechem a pohybem — natočeno výhradně v přirozeném světle.',
    photos: [
      ph('sol-1', 1, 'solitude', 'Ticho I',
        'Světlo padá šikmo a obklopuje tvář jemnou luminiscencí. Okamžik, kdy přítomnost přestává být vědomá sama sebe.'),
      ph('sol-2', 2, 'solitude', 'Ticho II',
        'Oči zavřené, dech zadržený. Prostor mezi nádechem a výdechem — tam žije tento záběr.'),
      ph('sol-3', 3, 'solitude', 'Mezi světy',
        'Figura existuje na hranici světla a stínu, ani zde, ani tam. Práh jako místo bytí.'),
      ph('sol-4', 4, 'solitude', 'Váha ticha',
        'Ramena nesou tíhu, kterou slova nedokážou popsat. Tělo jako záznam prožitého.'),
      ph('sol-5', 5, 'solitude', 'Čekárna',
        'Pohled upřený za horizont kadru. Čeká se vždy na něco, co ještě nemá jméno.'),
      ph('sol-6', 6, 'solitude', 'Uvnitř',
        'Intimita zastavená v čase. Ruka, světlo a ticho, které mluví hlasitěji než slova.'),
      ph('sol-7', 7, 'solitude', 'Světlo z okna',
        'Okno jako jediný zdroj — světlo se modlí přes sklo a dotýká se pleti s pokorou.'),
      ph('sol-8', 8, 'solitude', 'Přítomnost',
        'Plnost okamžiku bez potřeby vysvětlení. Jen bytí, zachycené v té nejprostší podobě.'),
    ],
  },

  // ── 02 FORMA ────────────────────────────────────────────────────────────────
  {
    id: 'architecture',
    number: '02',
    title: 'FORMA',
    tagline: 'Světlo & Geometrie',
    description: 'Hledání řádu v prostoru. Dokumentace hry světla, linií a forem v každodenním prostředí — město jako portrétovaný subjekt.',
    photos: [
      ph('arch-1',  9, 'architecture', 'Forma I',
        'Geometrie světla se rozkládá jako architektonický plán na povrchu lidského těla.'),
      ph('arch-2', 10, 'architecture', 'Spirála',
        'Linie spiráluje do středu, kde čas přestává být lineární. Architektura jako meditační objekt.'),
      ph('arch-3', 11, 'architecture', 'Poledník',
        'Přesnost stínu ve dvanáct hodin. Sluneční hodiny z kamene a záměru — příroda jako měřítko.'),
      ph('arch-4', 12, 'architecture', 'Gravitace III',
        'Hmota se vzdává gravitaci, ale nezapomíná na ni. Napětí zůstává čitelné v každé linii.'),
      ph('arch-5', 13, 'architecture', 'Otvor č. 4',
        'Okno jako oko architektury — dívá se, ne naopak. Prostor za ním je věcí imaginace.'),
      ph('arch-6', 14, 'architecture', 'Forma II',
        'Čistota tvaru zbavená vší nadbytečnosti. Esence bez ornamentu, řeč bez přídavných jmen.'),
      ph('arch-7', 15, 'architecture', 'Zátiší',
        'Prostor dýchá sám sebou. Kompozice, která nepotřebuje subjekt — prázdnota jako výpověď.'),
      ph('arch-8', 16, 'architecture', 'Stínopis',
        'Stín je autoportrét světla. Přesný, chladný, neomylný — a vždy pravdivější než originál.'),
    ],
  },

  // ── 03 POHLED ───────────────────────────────────────────────────────────────
  {
    id: 'the-gaze',
    number: '03',
    title: 'POHLED',
    tagline: 'Intimní portréty',
    description: 'Studie o zranitelnosti a síle. Subjekt není nikdy pasivní — drží moc rámu. Natočeno při denním světle, bez retuší.',
    photos: [
      ph('gaze-1', 17, 'the-gaze', 'Suverenita',
        'Přímý pohled, který neprosí o dovolení existovat. Síla bez agrese, přítomnost bez vysvětlení.'),
      ph('gaze-2', 18, 'the-gaze', 'Svědek',
        'Oči, které viděly a pamatují si. Tiché svědectví bez potřeby řeči nebo soudu.'),
      ph('gaze-3', 19, 'the-gaze', 'Clona Já',
        'Přiblížení odhaluje, co vzdálenost schovává. Každý detail pleti je kapitolou nevyřčeného příběhu.'),
      ph('gaze-4', 20, 'the-gaze', 'Vnitřní archiv',
        'Profil jako silueta paměti. Co nosíme v sobě, otiskuje se postupně do tváře.'),
      ph('gaze-5', 21, 'the-gaze', 'Absence',
        'Pohled odvrácený je stejně výmluvný jako pohled přímý. Co chybí, definuje stejně jako to, co je přítomno.'),
      ph('gaze-6', 22, 'the-gaze', 'Tok',
        'Pohyb zachycený v té jediné správné tisícině sekundy. Pravda pohybu je vždy v přechodu.'),
      ph('gaze-7', 23, 'the-gaze', 'Dech',
        'Zavřené oči jako gesto důvěry. Subjekt se vzdává kontroly nad snímkem — a tím získává vše.'),
    ],
  },

  // ── 04 SVĚTLO ───────────────────────────────────────────────────────────────
  {
    id: 'svetlo',
    number: '04',
    title: 'SVĚTLO',
    tagline: 'Studie přirozeného světla',
    description: 'Světlo jako hlavní hrdina každého záběru. Série zachycuje proměnu přirozeného světla v průběhu dne — od jemného rána po ostré odpoledne.',
    photos: [
      ph('sv-1',  24, 'svetlo', 'Světlo I',
        'První záblesk ranního světla, který nedorazí tam, kde ho čekáme. Světlo má vlastní vůli.', 3),
      ph('sv-2',  25, 'svetlo', 'Světlo II',
        'Difúzní záclona rozptyluje zdroj do ztracena. Tvář se vynořuje ze světelné mlhy jako vzpomínka.', 3),
      ph('sv-3',  26, 'svetlo', 'Světlo III',
        'Protisvětlo modeluje siluetu do dokonalé abstrakce. Tělo se stává grafickým gestem.', 3),
      ph('sv-4',  27, 'svetlo', 'Světlo IV',
        'Zlatá hodina zalévá kůži teplou ambrovou vrstvou. Čas, který nelze zopakovat.', 3),
      ph('sv-5',  28, 'svetlo', 'Světlo V',
        'Tvrdé polední světlo řeže stíny s chirurgickou přesností. Krutá krása bez kompromisu.', 3),
      ph('sv-6',  29, 'svetlo', 'Světlo VI',
        'Oblačný přesvit jako přírodní softbox — všesměrové, demokratické, jemné ke každé tváři.', 3),
      ph('sv-7',  30, 'svetlo', 'Světlo VII',
        'Šikmý paprsek probodává prostor a označuje přesné místo v čase i prostoru.', 3),
      ph('sv-8',  31, 'svetlo', 'Světlo VIII',
        'Odraz ze světlého povrchu vytváří druhé světlo — subtilní, nepřímé, teplé jako objetí.', 3),
      ph('sv-9',  32, 'svetlo', 'Světlo IX',
        'Světlo ustupuje a zanechává za sebou polostíny měkké jako rozostřená vzpomínka.', 3),
      ph('sv-10', 33, 'svetlo', 'Světlo X',
        'Průnik světla oknem vytváří přesnou geometrii na podlaze. Sluneční hodiny každodennosti.', 3),
      ph('sv-11', 34, 'svetlo', 'Světlo XI',
        'Jiskra v oku — malý odraz, který celý snímek roztočí do pohybu. Světlo uvnitř světla.', 3),
      ph('sv-12', 35, 'svetlo', 'Světlo XII',
        'Soumrakové světlo zbavuje barvy přesnosti a vrací je k jejich podstatě. Šedá jako nejvyšší tón.', 3),
      ph('sv-13', 36, 'svetlo', 'Světlo XIII',
        'Prudký kontrast rozkládá tvář na dvě navzájem nesrozumitelné půlky. Jeden člověk, dva světy.', 3),
      ph('sv-14', 37, 'svetlo', 'Světlo XIV',
        'Světlo z boku odhaluje texturu a hloubku, které čelní pohled vždy skrývá.', 3),
      ph('sv-15', 38, 'svetlo', 'Světlo XV',
        'Světlo se ukládá do vlasů jako zlato do žíly. Každý pramen nese svůj vlastní lesk.', 3),
      ph('sv-16', 39, 'svetlo', 'Světlo XVI',
        'Podsvícení mění tvář v ikonu, v symbol přesahující konkrétní osobu.', 3),
      ph('sv-17', 40, 'svetlo', 'Světlo XVII',
        'Světlo odchází a zanechává za sebou pokoj, který patří výhradně tomuto okamžiku.', 3),
      ph('sv-18', 41, 'svetlo', 'Světlo XVIII',
        'Poslední paprsek dne se loučí beze slova. Série se uzavírá tam, kde začala — v tichu.', 3),
    ],
  },

  // ── 05 PŘÍCHOD ──────────────────────────────────────────────────────────────
  {
    id: 'prichod',
    number: '05',
    title: 'PŘÍCHOD',
    tagline: 'Čtyři okamžiky prahu',
    description: 'Čtyři snímky. Čtyři okamžiky vstupu — do prostoru, do světla, do vztahu. Minimalistická série o prahu a přechodu.',
    photos: [
      ph('pr-1', 42, 'prichod', 'Příchod I',
        'Krok na prahu — ještě venku, ale myšlenky jsou již uvnitř. Tělo jako most mezi dvěma světy.', 3),
      ph('pr-2', 43, 'prichod', 'Příchod II',
        'Dveře jako rám, rám jako definice okamžiku. Vstup je vždy malou smrtí starého já.', 3),
      ph('pr-3', 44, 'prichod', 'Příchod III',
        'Světlo v chodbě zve a zároveň zadržuje. Prahová neurčitost jako nejčistší stav bytí.', 3),
      ph('pr-4', 45, 'prichod', 'Příchod IV',
        'Poslední záběr série: figura se neohlíží. Příchod je dokončen. Co bylo venku, zůstane venku.', 3),
    ],
  },

  // ── 06 PROSTOR ──────────────────────────────────────────────────────────────
  {
    id: 'prostor',
    number: '06',
    title: 'PROSTOR',
    tagline: 'Tělo & Architektura',
    description: 'Jak lidské tělo obývá, formuje a nechává se formovat prostorem kolem sebe. Dvacet čtyři záběrů z jednoho dne.',
    photos: [
      ph('ps-1',  46, 'prostor', 'Prostor I',
        'Tělo v místnosti jako socha v galerii — vše je kompozicí, i kdyby o tom nevědělo.', 3),
      ph('ps-2',  47, 'prostor', 'Prostor II',
        'Zeď za zády dává jistotu. Opírání se není slabost — je to dialog s architekturou.', 3),
      ph('ps-3',  48, 'prostor', 'Prostor III',
        'Prázdný roh místnosti a jedna figura. Kontrast měřítka, který prozrazuje obojí.', 3),
      ph('ps-4',  49, 'prostor', 'Prostor IV',
        'Sedící postava jako geometrická odpověď na geometrii nábytku. Tělo, které se přizpůsobuje a zároveň vzdoruje.', 3),
      ph('ps-5',  50, 'prostor', 'Prostor V',
        'Pohyb v místnosti zanechává vzdušnou stopu. Choreografie každodennosti zachycená bez tance.', 3),
      ph('ps-6',  51, 'prostor', 'Prostor VI',
        'Strop, podlaha, figura — tři horizontály definují mikrosvět jednoho odpoledne.', 3),
      ph('ps-7',  52, 'prostor', 'Prostor VII',
        'Ruka dotýkající se povrchu: první kontakt s materiálním světem jako gesto poznání.', 3),
      ph('ps-8',  53, 'prostor', 'Prostor VIII',
        'Figura se tiskne ke zdi, jako by chtěla splynout s architekturou. Hranice těla a prostoru mizí.', 3),
      ph('ps-9',  54, 'prostor', 'Prostor IX',
        'Odraz v zrcadle přidává další rozměr: kdo se dívá — fotograf, subjekt, nebo prostor sám?', 3),
      ph('ps-10', 55, 'prostor', 'Prostor X',
        'Světlo procházející žaluzií vytváří mříže, které nikdo nestvořil záměrně. Architektura světla.', 3),
      ph('ps-11', 56, 'prostor', 'Prostor XI',
        'Chodba jako perspektiva, figura jako bod na jejím konci. Vzdálenost jako naléhavost.', 3),
      ph('ps-12', 57, 'prostor', 'Prostor XII',
        'Okno jako čtvrtá stěna, která dává místnosti dech. Figura stojí na rozhraní dvou realit.', 3),
      ph('ps-13', 58, 'prostor', 'Prostor XIII',
        'Schody jako metafora — vždy nahoru, vždy dolů, a ten pohyb nikdy nekončí.', 3),
      ph('ps-14', 59, 'prostor', 'Prostor XIV',
        'Sedět na podlaze je revoluční gesto. Tělo si nárokuje prostor jinak, než bylo navrženo.', 3),
      ph('ps-15', 60, 'prostor', 'Prostor XV',
        'Ruce v klíně tvoří misku. Prostor uvnitř těla jako nejintimnější architektura.', 3),
      ph('ps-16', 61, 'prostor', 'Prostor XVI',
        'Figura v pohybu rozmazává hranice kadru. Prostor se rozšiřuje úměrně pohybu.', 3),
      ph('ps-17', 62, 'prostor', 'Prostor XVII',
        'Přírodní materiál v interiéru: příroda jako host, ne vetřelec. Koexistence jako estetický program.', 3),
      ph('ps-18', 63, 'prostor', 'Prostor XVIII',
        'Tišina místnosti se zhustí kolem nehybné figury. Prostor čeká, nedýchá.', 3),
      ph('ps-19', 64, 'prostor', 'Prostor XIX',
        'Světlo z lampy teplé jako dech — kruh intimity ve velké místnosti.', 3),
      ph('ps-20', 65, 'prostor', 'Prostor XX',
        'Dvě figury v prostoru vytvářejí třetí entitu: vztah jako viditelnou architekturu.', 3),
      ph('ps-21', 66, 'prostor', 'Prostor XXI',
        'Záclona pohybem vzduchu připomíná přítomnost neviditelného. Prostor je vždy obydlen.', 3),
      ph('ps-22', 67, 'prostor', 'Prostor XXII',
        'Figura stojící zády k objektivu nechává prostor před sebou nevyřčený. Otevřenost jako postoj.', 3),
      ph('ps-23', 68, 'prostor', 'Prostor XXIII',
        'Konec dne v místnosti: světlo ustupuje, předměty nabývají na váze. Intimita večera.', 3),
      ph('ps-24', 69, 'prostor', 'Prostor XXIV',
        'Poslední záběr série: prázdná místnost po odchodu figury. Prostor si pamatuje.', 3),
    ],
  },

  // ── 07 DETAIL ───────────────────────────────────────────────────────────────
  {
    id: 'detail',
    number: '07',
    title: 'DETAIL',
    tagline: 'Co oko přehlíží',
    description: 'Makro pohled na textury, povrchy a skryté linie každodennosti. Dvanáct obrazů toho, co vidíme jen tehdy, když se zastavíme.',
    photos: [
      ph('dt-1',  70, 'detail', 'Detail I',
        'Kůže zblízka — topografie, kterou nikdo nečte, ačkoliv vypovídá o celém životě.', 3),
      ph('dt-2',  71, 'detail', 'Detail II',
        'Záhyb látky jako miniaturní krajina. Každá vrása je výsledkem konkrétního pohybu.', 3),
      ph('dt-3',  72, 'detail', 'Detail III',
        'Rty a jejich tvar v klidu — forma, která existuje nezávisle na tom, co říká.', 3),
      ph('dt-4',  73, 'detail', 'Detail IV',
        'Dlaň otevřená: mapování čar, které věštci čtou jako osud. Fotograf je čte jako krásu.', 3),
      ph('dt-5',  74, 'detail', 'Detail V',
        'Vlasy ve větru zachycené v setině sekundy. Nepořádek jako nejvyšší forma pohybu.', 3),
      ph('dt-6',  75, 'detail', 'Detail VI',
        'Oko jako krajina — duhovka jako mapa míst, kde jsme byli a ještě nebyly.', 3),
      ph('dt-7',  76, 'detail', 'Detail VII',
        'Prst dotýkající se povrchu — okamžik těsně před nebo těsně po. Kontakt jako událost.', 3),
      ph('dt-8',  77, 'detail', 'Detail VIII',
        'Profil ucha v tichosti. Orgán určený k naslouchání, zde zachycen, když nikdo nemluví.', 3),
      ph('dt-9',  78, 'detail', 'Detail IX',
        'Kloub prstu — architektura pohybu schovaná pod kůží, viditelná jen tehdy, když sevřeme ruku.', 3),
      ph('dt-10', 79, 'detail', 'Detail X',
        'Klíční kost jako most mezi krkem a ramenem. Elegance kostry jako záměr přírody.', 3),
      ph('dt-11', 80, 'detail', 'Detail XI',
        'Řasa zachycená ve světle jako kaligrafický tah. Příroda jako mistr japonské kresby.', 3),
      ph('dt-12', 81, 'detail', 'Detail XII',
        'Zátylek a začátek vlasů — intima, která se nechá fotografovat jen s absolutní důvěrou.', 3),
    ],
  },

  // ── 08 PŘÍBĚH ───────────────────────────────────────────────────────────────
  {
    id: 'pribeh',
    number: '08',
    title: 'PŘÍBĚH',
    tagline: 'Dokumentární portréty',
    description: 'Každý člověk nese v sobě příběh. Tato série se snaží naslouchat bez slov — dvacet osm momentů autentické přítomnosti.',
    photos: [
      ph('pb-1',  82, 'pribeh', 'Příběh I',
        'První snímek série hledá člověka za pózou. Najde ho — dřív, než si to subjekt uvědomí.', 3),
      ph('pb-2',  83, 'pribeh', 'Příběh II',
        'Smích, který vznikl ještě před vědomím, že se fotografuje. Radost jako reflexní gesto.', 3),
      ph('pb-3',  84, 'pribeh', 'Příběh III',
        'Koncentrace na objekt mimo kader. Mysl někde jinde — a právě tam je portrét nejpravdivější.', 3),
      ph('pb-4',  85, 'pribeh', 'Příběh IV',
        'Váhání zachyceno v záhybu rtů. Ten zlomek sekundy, kdy nevíme, co říci, říká vše.', 3),
      ph('pb-5',  86, 'pribeh', 'Příběh V',
        'Pohled dolů jako gesto pokory nebo únavy. Každý z nás ví, jak to vypadá — a proč.', 3),
      ph('pb-6',  87, 'pribeh', 'Příběh VI',
        'Ruka přikrývá část tváře — ne z ostychu, ale jako instinktivní sebeochrана. Gesto plné řeči.', 3),
      ph('pb-7',  88, 'pribeh', 'Příběh VII',
        'Dva okamžiky od slz nebo od smíchu. Hranice mezi nimi je vždy tenčí, než si myslíme.', 3),
      ph('pb-8',  89, 'pribeh', 'Příběh VIII',
        'Klid jako dobytá pevnost. Tvář, která prošla bouří a ví, že přežije i tu příští.', 3),
      ph('pb-9',  90, 'pribeh', 'Příběh IX',
        'Zvědavost jako primární výraz. Oči se otevírají lehce dopředu, jako by chtěly jít tam samy.', 3),
      ph('pb-10', 91, 'pribeh', 'Příběh X',
        'Únava neskrývaná — a proto krásná. Vyčerpanost má svou vlastní druh krásy.', 3),
      ph('pb-11', 92, 'pribeh', 'Příběh XI',
        'Přemýšlení jako viditelný stav. Záhyb na čele, pohled mírně nahoru — mozek pracuje.', 3),
      ph('pb-12', 93, 'pribeh', 'Příběh XII',
        'Dotek vlastní tváře jako akt sebeuvědomění zachycený bez vědomí subjektu.', 3),
      ph('pb-13', 94, 'pribeh', 'Příběh XIII',
        'Profil jako silueta charakteru. Co nevidíme ve tváři, dočteme z kontury.', 3),
      ph('pb-14', 95, 'pribeh', 'Příběh XIV',
        'Mírný úsměv bez důvodu — nebo s důvodem, který zůstane navždy privátní.', 3),
      ph('pb-15', 96, 'pribeh', 'Příběh XV',
        'Vzpomínka zachycená při vzpomínání. Oči, které vidí něco, co není v místnosti.', 3),
      ph('pb-16', 97, 'pribeh', 'Příběh XVI',
        'Napětí v ramenou, které subjekt nezpozoroval. Tělo prozrazuje to, co tvář ukrývá.', 3),
      ph('pb-17', 98, 'pribeh', 'Příběh XVII',
        'Uvolnění jako viditelné gesto. Okamžik, kdy si člověk dovolí být sám sebou před objektivem.', 3),
      ph('pb-18', 99, 'pribeh', 'Příběh XVIII',
        'Pohled přes rameno — zpět do minulosti nebo k fotografovi? Obojí je možné a pravdivé.', 3),
      ph('pb-19', 100, 'pribeh', 'Příběh XIX',
        'Gesto ruky, které doplňuje to, co tvář nedořekla. Řeč těla jako druhý hlas.', 3),
      ph('pb-20', 101, 'pribeh', 'Příběh XX',
        'Osamělost bez smutku — vědomá, zvolená, důstojná. Jiný druh síly.', 3),
      ph('pb-21', 102, 'pribeh', 'Příběh XXI',
        'Pohled do kamery jako výzva: vidíš mě skutečně? Subjekt testuje fotografa.', 3),
      ph('pb-22', 103, 'pribeh', 'Příběh XXII',
        'Jeden stisknutý ret, zadržený dech. Série nás drží na prahu sdělení.', 3),
      ph('pb-23', 104, 'pribeh', 'Příběh XXIII',
        'Otevřenost jako odvaha. Tvář bez obran — dar, který subjekt uděluje objektivu i divákovi.', 3),
      ph('pb-24', 105, 'pribeh', 'Příběh XXIV',
        'Překvapení zachyceno dřív, než stihne být zpracováno. Čistá, nefiltrovaná reakce.', 3),
      ph('pb-25', 106, 'pribeh', 'Příběh XXV',
        'Soustředění a rozptýlení ve stejném záběru. Mysl je vždy na dvou místech najednou.', 3),
      ph('pb-26', 107, 'pribeh', 'Příběh XXVI',
        'Stáří a světlo se vzájemně zvýznamňují. Každá vráska je archivem prožitého světla.', 3),
      ph('pb-27', 108, 'pribeh', 'Příběh XXVII',
        'Ticho před promluvením. Ten okamžik, kdy se slova teprve formují — nejčistší stav mysli.', 3),
      ph('pb-28', 109, 'pribeh', 'Příběh XXVIII',
        'Závěrečný portrét série. Oči v záběru vědí, že je to poslední snímek. A přesto — nebo proto — jsou otevřené dokořán.', 3),
    ],
  },

  // ── 09 MOMENT ───────────────────────────────────────────────────────────────
  {
    id: 'moment',
    number: '09',
    title: 'MOMENT',
    tagline: 'Zachycené zlomky času',
    description: 'Dvacet pět snímků, které existují jen díky tomu, že jsem byla na správném místě ve správný čas. Nic nebylo naplánováno.',
    photos: [
      ph('mo-1',  110, 'moment', 'Moment I',
        'Náhodné seřazení lidí v prostoru vytvoří kompozici, kterou žádný režisér nemohl naplánovat.', 3),
      ph('mo-2',  111, 'moment', 'Moment II',
        'Světlo se na zlomek sekundy odrazí přesně správně. Fotografka zmáčkne spoušť instinktivně.', 3),
      ph('mo-3',  112, 'moment', 'Moment III',
        'Gesto ruky zastavené v letu. Půl sekundy před nebo po — záběr by neexistoval.', 3),
      ph('mo-4',  113, 'moment', 'Moment IV',
        'Dvě cizí linie se protnou v jednom bodě a vytvoří příběh, který nikdy nebyl vyprávěn.', 3),
      ph('mo-5',  114, 'moment', 'Moment V',
        'Dítě a stín — elementární kontrast stáří a nevinnosti v jednom záběru.', 3),
      ph('mo-6',  115, 'moment', 'Moment VI',
        'Pohyb rozmazaný tak přesně, že je rozostření samo o sobě kompozičním prvkem.', 3),
      ph('mo-7',  116, 'moment', 'Moment VII',
        'Čekání ve frontě jako mikrokosmická sociologie. Vzorce chování zachycené bez vědomí aktérů.', 3),
      ph('mo-8',  117, 'moment', 'Moment VIII',
        'Deštník jako skulptura v prostoru. Příroda jako kurátor výstavy na ulici.', 3),
      ph('mo-9',  118, 'moment', 'Moment IX',
        'Odlesk ve výloze zdvojuje realitu. Která z nich je skutečná — záleží na pozorovateli.', 3),
      ph('mo-10', 119, 'moment', 'Moment X',
        'Osoba přecházející ulici — nejstarší motiv street fotografii a stále nejúčinnější.', 3),
      ph('mo-11', 120, 'moment', 'Moment XI',
        'Ruce starého člověka v klíně — celý život zkomprimovaný do jediného záběru.', 3),
      ph('mo-12', 121, 'moment', 'Moment XII',
        'Smích v davu — jasný bod v oceánu anonymity. Štěstí jako navigační hvězda.', 3),
      ph('mo-13', 122, 'moment', 'Moment XIII',
        'Pár, který si neuvědomuje, že jsou fotografováni. Intimita ve veřejném prostoru.', 3),
      ph('mo-14', 123, 'moment', 'Moment XIV',
        'Prázdné místo na lavičce, kde ještě před chvílí někdo seděl. Absence jako přítomnost.', 3),
      ph('mo-15', 124, 'moment', 'Moment XV',
        'Poloha těla, která říká vše o vnitřním stavu bez nutnosti vidět tvář.', 3),
      ph('mo-16', 125, 'moment', 'Moment XVI',
        'Světlo pozdního odpoledne proměňuje banální scénu v malíčský obraz.', 3),
      ph('mo-17', 126, 'moment', 'Moment XVII',
        'Dítě a dospělý ve stejném záběru: dvě různé délky času v jednom kadrování.', 3),
      ph('mo-18', 127, 'moment', 'Moment XVIII',
        'Telefon jako moderní zeď: osoba za ním je přítomna fyzicky, ale nepřítomna jinak.', 3),
      ph('mo-19', 128, 'moment', 'Moment XIX',
        'Tělo v pohybu na pozadí statické architektury. Kontrast, který nikdy nezestárne.', 3),
      ph('mo-20', 129, 'moment', 'Moment XX',
        'Pohled fotografky a pohled subjektu se kříží — obě strany vidí to, co nevidí ta druhá.', 3),
      ph('mo-21', 130, 'moment', 'Moment XXI',
        'Okamžik přechodnosti: člověk vstupuje do záběru nebo z něj odchází. Nikdy se nedozvíme.', 3),
      ph('mo-22', 131, 'moment', 'Moment XXII',
        'Ulice po dešti jako zrcadlo. Město odražené a převrácené — ale stejně skutečné.', 3),
      ph('mo-23', 132, 'moment', 'Moment XXIII',
        'Ruka sahající po předmětu mimo záběr. Touha zachycena ve svém nejčistším pohybu.', 3),
      ph('mo-24', 133, 'moment', 'Moment XXIV',
        'Únava konce dne na tváři náhodného kolemjdoucího. Pravda, která se nedá naaranžovat.', 3),
      ph('mo-25', 134, 'moment', 'Moment XXV',
        'Poslední záběr celé série: záda odcházejícího člověka. Fotografka zůstává. Svět pokračuje.', 3),
    ],
  },
];

// ─── Tearsheets — záměrně prázdné, každá fotka se zobrazuje pouze jednou ─────
export const TEARSHEETS: Tearsheet[] = [];

// ─── Hero image ───────────────────────────────────────────────────────────────
export const HERO_IMAGE = '/photos/rs-01.jpeg';
