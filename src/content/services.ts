// Helper: Wixstatic CDN URL (images from beckombergaentreprenad.com)
const wx = (id: string, w: number, h: number) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,usm_0.66_1.00_0.01/photo.jpg`;

// Helper: Unsplash CDN — portrait crop suited for gallery cards
const usp = (host: "images" | "plus", id: string) =>
  `https://${host}.unsplash.com/${id}?auto=format&fit=crop&w=800&h=1000&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

// Helper: Unsplash CDN — landscape crop for cover/thumbnail images
const uspL = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=85&ixlib=rb-4.1.0`;

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  /** Optional bullet list of specific sub-services, rendered on the service page */
  bullets?: string[];
  coverImage: string;
  thumbnailImage: string;
  gallery: { label: string; aspect: string; src: string }[];
  partner?: boolean;
}

export const services: Service[] = [
  {
    slug: "maleri",
    title: "Måleri",
    tagline: "Invändig och utvändig målning för bostäder, BRF och företag",
    description:
      "Vi utför alla typer av måleri — från lägenhetsrenovering och trapphus till fasader och fönstermålningar. Snabba ledtider, ROT-avdrag och F-skattsedel.",
    longDescription:
      "Vi tar oss an uppdrag för privatpersoner, bostadsrättsföreningar, kontor och kommersiella lokaler i Hässelby och övriga Stockholm. Oavsett om det gäller ett ommålat trapphus, en nymålad lägenhet eller en hel fasad — vi levererar precist och städat arbete med korta ledtider. Vi ombesörjer ROT-hanteringen.",
    bullets: [
      "Invändig målning",
      "Tapetsering",
      "Golvmålning",
      "Fasadmålningar",
      "Staket & smidesmålning",
      "Skorstensmålning",
      "Fönstermålningar",
      "Applicering av microcement",
    ],
    coverImage: wx("b3fd8b_6f6de8ed7a6f4ccfa0d023ef344e2f69~mv2.jpg", 1200, 900),
    thumbnailImage: wx("b3fd8b_0810dca9d3034665be697cde6c83d1dd~mv2.jpg", 800, 600),
    gallery: [
      {
        label: "Kommersiellt måleriarbete",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_190c735639fe4424b467f93708e5e739~mv2.jpg", 800, 1000),
      },
      {
        label: "Fasadmålning — ställning",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_0810dca9d3034665be697cde6c83d1dd~mv2.jpg", 800, 1000),
      },
      {
        label: "Beckomberga målare på fasad",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_6f6de8ed7a6f4ccfa0d023ef344e2f69~mv2.jpg", 800, 1000),
      },
      {
        label: "Fasadmålning med ställning",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_b17dbd4766ee4e52b6740ab60aaeb08c~mv2.jpg", 800, 1000),
      },
      {
        label: "Takmålning med vals",
        aspect: "aspect-[4/5]",
        src: usp("plus", "premium_photo-1680297038197-af4a9463cd22"),
      },
      {
        label: "Kantskärning med pensel",
        aspect: "aspect-[4/5]",
        src: usp("plus", "premium_photo-1664298827256-04eb817aa0ba"),
      },
      {
        label: "Målarverk­tyg — närbild",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1652829069862-87874e119527"),
      },
      {
        label: "Färgval­sar — sortiment",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1525909002-1b05e0c869d8"),
      },
    ],
  },
  {
    slug: "microcement",
    title: "Microcement",
    tagline: "Moderna, sömlösa ytor — golv, väggar och badrum",
    description:
      "Professionell applicering av microcement i Stockholm. Appliceras direkt på befintligt underlag utan rivning — perfekt för badrum, kök, hall och golv.",
    longDescription:
      "Microcement är en cementbaserad beläggning förstärkt med polymerer som appliceras i tunna lager (2–5 mm) direkt på kakel, betong, trä eller gips — utan rivning. Vi applicerar alltid armeringsnät på golv för hållbarhetens skull och väljer rätt grundning för varje underlag. Resultatet är en fogfri, vattentät yta i valfri kulör och struktur, med minimal bygghöjd. Vi hanterar hela processen — från rådgivning och kulörval till sista lack- eller vaxskiktet.",
    bullets: [
      "Golv — fogfritt & slitstark",
      "Badrum — vattentätt",
      "Kök & bänkskivor",
      "Väggar & stänkskydd",
      "Hall & entré",
    ],
    coverImage: wx("b3fd8b_14bb52713d8f4dcb859bb717a9538a71~mv2.jpg", 1200, 900),
    thumbnailImage: wx("b3fd8b_3200c55da20743d891be3700a2ec0df5~mv2.jpg", 800, 600),
    gallery: [
      {
        label: "Microcement-badrum — fullvy",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_3200c55da20743d891be3700a2ec0df5~mv2.jpg", 800, 1000),
      },
      {
        label: "Mikrocement textur — närbild",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_82c4f857711d4f71878b1591dae0f0b0~mv2.jpg", 800, 1000),
      },
      {
        label: "Renoverad hall med microcement",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_bf089c83147e495493c6dd68ba875b74~mv2.jpg", 800, 1000),
      },
      {
        label: "Applicering av microcement",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_55f7b62337864771b95387add03314f8~mv2.jpg", 800, 1000),
      },
      {
        label: "Modernt badrum — sten & betong",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1642755622887-6aef7cbe0725"),
      },
      {
        label: "Lyxbadrum med microcement",
        aspect: "aspect-[4/5]",
        src: usp("plus", "premium_photo-1663091124365-f245f7065176"),
      },
      {
        label: "Duschrum — sömlös finish",
        aspect: "aspect-[4/5]",
        src: usp("plus", "premium_photo-1674035037186-d5e21716cc16"),
      },
      {
        label: "Naturliga material — badrumsmiljö",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1750036015902-c6f5ebca924e"),
      },
    ],
  },
  {
    slug: "snickeri",
    title: "Snickeri",
    tagline: "Skräddarsydda snickerlösningar",
    description:
      "Från inbyggda garderober och kakelugnsliknande paneler till mindre reparationer — vi löser snickeriarbeten av alla slag, anpassade efter din bostad.",
    longDescription:
      "Vår snickare utför allt från fasta inredningslösningar till dörrar, fönster och golvsättning. Vi arbetar noga och noggrant med fokus på detaljer — resultatet ska inte bara se bra ut, det ska hålla länge. Kontakta oss för en kostnadsfri genomgång av ditt projekt.",
    coverImage: wx("b3fd8b_741f8b5ae82a4a6799ac5b259363fbdc~mv2.jpg", 1200, 900),
    thumbnailImage: wx("b3fd8b_8d265f9664414b1385c8789bab3de82e~mv2.jpg", 800, 600),
    gallery: [
      {
        label: "Inbyggd garderob med skjutdörrar",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_741f8b5ae82a4a6799ac5b259363fbdc~mv2.jpg", 800, 1000),
      },
      {
        label: "Renoverad hall med snickerier",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_bf089c83147e495493c6dd68ba875b74~mv2.jpg", 800, 1000),
      },
      {
        label: "Snickeriverkttyg — Festool kap",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_8d265f9664414b1385c8789bab3de82e~mv2.jpg", 800, 1000),
      },
      {
        label: "Fast inredning — hallmöbel",
        aspect: "aspect-[4/5]",
        src: wx("b3fd8b_5f2d272af86a4103a46bc049c84dd2ce~mv2.jpg", 800, 1000),
      },
      {
        label: "Walk-in garderob med spegel",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1672137233327-37b0c1049e77"),
      },
      {
        label: "Inbyggd förvaring — hall",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1643949914877-b20f30792c1e"),
      },
      {
        label: "Walk-in garderob med hyllor",
        aspect: "aspect-[4/5]",
        src: usp("plus", "premium_photo-1674815329032-421d305ad589"),
      },
      {
        label: "Sovrum med trägarderob",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1722349674028-a148f4364e43"),
      },
      {
        label: "Snickare i arbete",
        aspect: "aspect-[4/5]",
        src: usp("plus", "premium_photo-1664300494539-313eac2a6095"),
      },
      {
        label: "Snickeri­verktyg — hantverk",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1645651964715-d200ce0939cc"),
      },
    ],
  },
  {
    slug: "golvslipning",
    title: "Golvslipning",
    tagline: "Ge dina trägolv nytt liv",
    description:
      "Via vårt partnernätverk erbjuder vi professionell golvslipning och golvolja/lackning för trä-, parkett- och plankgolv.",
    longDescription:
      "Slitna och repiga trägolv kan bli som nya med rätt behandling. Processen inkluderar slipning, spackling av sprickor och applicering av olja eller lack beroende på önskad finish. Vi samordnar och ansvarar för hela projektet så att du bara har ett kontaktnummer att ringa.",
    partner: true,
    coverImage: uspL("photo-1764726331208-71cb385ab08c"),
    thumbnailImage: uspL("photo-1764726331208-71cb385ab08c", 800, 600),
    gallery: [
      {
        label: "Loftutrymme — solljus på trägolv",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1764726331208-71cb385ab08c"),
      },
      {
        label: "Fiskbensmönster — närbild",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1770982726897-5e85ad0601c3"),
      },
      {
        label: "Elegant parkett — Berlin",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1598718544285-7180f670198b"),
      },
      {
        label: "Tomt rum med trägolv och dörr",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1722248211690-b8f359f688d8"),
      },
      {
        label: "Stol på brun parkett",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1590938272761-c11f74452660"),
      },
      {
        label: "Fiskbens­parkett — café",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1769987030169-0535f8c433cc"),
      },
      {
        label: "Rotting­stol på fiskbens­golv",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1758486561455-ebd0d3ba7423"),
      },
      {
        label: "Trägolv med vit dörr",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1648624219254-1adcd4e49bc6"),
      },
      {
        label: "Modernt vardagsrum — fiskbens",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1769736436809-eab3de70b175"),
      },
      {
        label: "Lyxigt rum med fiskbens­parkett",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1776245228715-36b3f34284b9"),
      },
    ],
  },
  {
    slug: "elektriker",
    title: "Elektriker",
    tagline: "Elinstallationer via certifierad partner",
    description:
      "Via vårt partnernätverk erbjuder vi certifierade elinstallationer — köks- och badrumsrenovering, belysning, uttag och ny- eller ominstallation. Du ringer ett nummer, vi samordnar resten.",
    longDescription:
      "Behöver ditt projekt en elektriker? Vi samordnar auktoriserade elinstallatörer som del av ditt renoveringsprojekt. Vanliga uppdrag inkluderar elinstallation vid köks- och badrumsrenovering, ny belysning, fler eluttag, omläggning av elledningar och säkringsbyten. Du slipper hålla kontakten med ett extra bolag — vi sköter samordningen och ansvarar för att hela projektet levereras i tid.",
    bullets: [
      "Köks- & badrumsinstallation",
      "Belysning & spots",
      "Nya eluttag & strömbrytare",
      "Omläggning av ledningar",
      "Säkrings­skåp & jordfels­brytare",
    ],
    partner: true,
    coverImage: uspL("photo-1683295083329-4d4738291f3a"),
    thumbnailImage: uspL("photo-1683295083329-4d4738291f3a", 800, 600),
    gallery: [
      {
        label: "Elektriker med kabel — hantverk",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1683295083329-4d4738291f3a"),
      },
      {
        label: "Elcentral — kablage",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1544724569-5f546fd6f2b5"),
      },
      {
        label: "Elektriker på stege",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1665242043190-0ef29390d289"),
      },
      {
        label: "Eluttag — installation",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1610056494052-6a4f83a8368c"),
      },
      {
        label: "Modernt badrum — elinstallation",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1628602813485-4e8b09442e98"),
      },
      {
        label: "Köksrenovering — belysning",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1585412727061-be62ede56406"),
      },
    ],
  },
  {
    slug: "rorledning",
    title: "Rörmokare",
    tagline: "VVS och röranläggning via certifierad partner",
    description:
      "Via vårt partnernätverk erbjuder vi VVS-arbeten för renovering och nyinstallation. Perfekt när projektet kräver både hantverkare och rörmokare — ett samtal räcker.",
    longDescription:
      "Oavsett om det gäller ett nytt badrum, byte av rör och blandare, installation av ny dusch eller ett helt VVS-system — vi koordinerar certifierade rörmokare som del av ditt projekt. Du behöver inte leta upp ett separat bolag, vi sköter samordningen och ansvarar för att leveransen sker i tid och enligt plan.",
    bullets: [
      "Badrumsrenovering — VVS",
      "Blandare & duschabinen",
      "Lednings­dragning & rörbyte",
      "Köks­installation",
      "Golvvärme",
    ],
    partner: true,
    coverImage: uspL("photo-1661107259637-4e1c55462428"),
    thumbnailImage: uspL("photo-1661107259637-4e1c55462428", 800, 600),
    gallery: [
      {
        label: "Modernt badrum — dubbel handfat",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1706670344501-0d1edc28193e"),
      },
      {
        label: "Lyxbadrum med stor spegel",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1661107259637-4e1c55462428"),
      },
      {
        label: "Marmorbadrum — renovering",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1587527901949-ab0341697c1e"),
      },
      {
        label: "Minimalistiskt badrum — badkar",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1628602813485-4e8b09442e98"),
      },
      {
        label: "Badrum med vit keramik",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1576698483491-8c43f0862543"),
      },
      {
        label: "Badrum med skåp och spegel",
        aspect: "aspect-[4/5]",
        src: usp("images", "photo-1585412727061-be62ede56406"),
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
