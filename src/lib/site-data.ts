import {
  buildLocalizedHref,
  defaultLocale,
  getDictionary,
  resolveLocale,
  type Locale,
} from "@/lib/i18n";

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export type ProductColor = {
  hex: string;
  name: string;
};

export type Product = {
  accent: string;
  asset: "labels" | "monogram";
  category: "essentials" | "knitwear" | "outerwear" | "tailoring";
  collection: string;
  colors: ProductColor[];
  description: string;
  details: string[];
  editorialNote: string;
  featured: boolean;
  fit: string;
  materials: string[];
  mood: string;
  name: string;
  order: number;
  palette: [string, string, string];
  price: number;
  sizes: string[];
  slug: string;
  story: string;
};

export type SortOption = "featured" | "newest" | "price-asc" | "price-desc";

export type CollectionCategory = {
  id: Product["category"];
  label: string;
};

export type CategoryShowcaseItem = CollectionCategory & {
  description: string;
  number: string;
};

export type CollectionDisplayProduct = {
  id: string;
  product: Product;
  variantIndex: number;
};

export const siteConfig = {
  description:
    "GEORGIAN es una firma de lujo accesible que construye un armario más sereno y sofisticado a través de esenciales elevados, sastrería precisa y acabados táctiles.",
  name: "GEORGIAN",
  title: "Lujo accesible, destilado.",
  url: "https://georgianatelier.com",
} as const;

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "Brand" },
  { href: "/contact", label: "Community" },
];

export const socialLinks: SocialLink[] = [
  { href: "https://instagram.com/georgianatelier", label: "Instagram" },
  { href: "https://pinterest.com/georgianatelier", label: "Pinterest" },
  { href: "mailto:hello@georgianatelier.com", label: "Email" },
];

export const sortOptions: { label: string; value: SortOption }[] = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const categoryOrder: Product["category"][] = ["tailoring", "knitwear", "outerwear", "essentials"];

const localizedCategoryCopy: Record<
  Locale,
  Record<Product["category"], { description: string; label: string }>
> = {
  de: {
    essentials: {
      description: "Klare Grundlagen, die das Anziehen intuitiv wirken lassen.",
      label: "Essentials",
    },
    knitwear: {
      description: "Sanfte Spannung zwischen Komfort, Textur und einer polierten Silhouette.",
      label: "Strick",
    },
    outerwear: {
      description: "Outer Layers, die für Bewegung gedacht sind, nicht für Schwere.",
      label: "Outerwear",
    },
    tailoring: {
      description: "Schärfere Linien, klare Proportionen und Autorität ohne Härte.",
      label: "Tailoring",
    },
  },
  en: {
    essentials: {
      description: "Clean foundations that make dressing feel instinctive.",
      label: "Essentials",
    },
    knitwear: {
      description: "Soft tension between comfort, texture, and a polished silhouette.",
      label: "Knitwear",
    },
    outerwear: {
      description: "Outer layers designed for movement, not heaviness.",
      label: "Outerwear",
    },
    tailoring: {
      description: "Sharper lines, clearer proportions, and authority without stiffness.",
      label: "Tailoring",
    },
  },
  es: {
    essentials: {
      description: "Bases limpias que hacen que vestirse se sienta instintivo.",
      label: "Esenciales",
    },
    knitwear: {
      description: "Una tensión suave entre confort, textura y una silueta pulida.",
      label: "Punto",
    },
    outerwear: {
      description: "Capas exteriores pensadas para moverse, no para pesar.",
      label: "Outerwear",
    },
    tailoring: {
      description: "Líneas más nítidas, proporciones limpias y autoridad sin rigidez.",
      label: "Sastrería",
    },
  },
  fr: {
    essentials: {
      description: "Des bases nettes qui rendent l'habillage instinctif.",
      label: "Essentiels",
    },
    knitwear: {
      description: "Une tension douce entre confort, texture et silhouette polie.",
      label: "Maille",
    },
    outerwear: {
      description: "Des couches extérieures pensées pour le mouvement, pas pour la lourdeur.",
      label: "Outerwear",
    },
    tailoring: {
      description: "Des lignes plus nettes, des proportions claires et de l'autorité sans rigidité.",
      label: "Tailoring",
    },
  },
  it: {
    essentials: {
      description: "Basi pulite che rendono il vestirsi immediato e naturale.",
      label: "Essenziali",
    },
    knitwear: {
      description: "Una tensione morbida tra comfort, texture e una silhouette rifinita.",
      label: "Maglieria",
    },
    outerwear: {
      description: "Capi outerwear pensati per muoversi, non per appesantire.",
      label: "Outerwear",
    },
    tailoring: {
      description: "Linee più nette, proporzioni pulite e autorevolezza senza rigidità.",
      label: "Tailoring",
    },
  },
  pt: {
    essentials: {
      description: "Bases limpas que fazem vestir-se parecer instintivo.",
      label: "Essenciais",
    },
    knitwear: {
      description: "Uma tensão suave entre conforto, textura e uma silhueta polida.",
      label: "Malhas",
    },
    outerwear: {
      description: "Camadas exteriores pensadas para movimento, não para peso.",
      label: "Outerwear",
    },
    tailoring: {
      description: "Linhas mais nítidas, proporções limpas e autoridade sem rigidez.",
      label: "Tailoring",
    },
  },
};

const localizedManifestoLines: Record<Locale, string[]> = {
  de: [
    "Luxus sollte gesammelt wirken, nicht einschüchternd.",
    "Eine verfeinerte Garderobe beginnt mit Zurückhaltung, nicht mit Übermaß.",
    "Jedes Teil sollte die Person aufwerten, bevor es Aufmerksamkeit fordert.",
  ],
  en: [
    "Luxury should feel composed, not intimidating.",
    "A refined wardrobe begins with restraint, not excess.",
    "Every piece should elevate the wearer before it attracts attention.",
  ],
  es: [
    "El lujo debe sentirse sereno, no intimidante.",
    "Un armario refinado empieza en la contención, no en el exceso.",
    "Cada pieza debe elevar a quien la lleva antes de reclamar atención.",
  ],
  fr: [
    "Le luxe doit sembler posé, jamais intimidant.",
    "Une garde-robe raffinée commence par la retenue, non par l'excès.",
    "Chaque pièce doit valoriser la personne avant d'attirer l'attention.",
  ],
  it: [
    "Il lusso deve apparire composto, non intimidatorio.",
    "Un guardaroba raffinato nasce dalla misura, non dall'eccesso.",
    "Ogni capo deve valorizzare chi lo indossa prima di attirare l'attenzione.",
  ],
  pt: [
    "O luxo deve parecer composto, não intimidante.",
    "Um guarda-roupa refinado começa na contenção, não no excesso.",
    "Cada peça deve valorizar quem a veste antes de pedir atenção.",
  ],
};

const localizedManifestoPanel: Record<
  Locale,
  {
    eyebrow: string;
    sections: Array<{ label: string; text: string }>;
    title: string;
  }
> = {
  de: {
    eyebrow: "Visuelle Codes",
    sections: [
      {
        label: "Palette",
        text: "Tiefschwarze Grundlagen, weiche Elfenbein-Akzente, helle silbrige Neutrale und Gold nur als feine Zeichensetzung.",
      },
      {
        label: "Ton",
        text: "Premium, ruhig, aspirativ. Nie kalt. Nie laut.",
      },
      {
        label: "Bewegung",
        text: "Editorial im Rhythmus, klar in der Navigation und fein genug, um das Produkt zu stützen statt mit ihm zu konkurrieren.",
      },
    ],
    title: "Mattes Schwarz, Elfenbein, Silber und eine zurückhaltende goldene Linie.",
  },
  en: {
    eyebrow: "Visual codes",
    sections: [
      {
        label: "Palette",
        text: "Deep black foundations, softened ivory highlights, pale silver neutrals, and gold reserved as punctuation rather than decoration.",
      },
      {
        label: "Tone",
        text: "Premium, composed, aspirational. Never cold. Never loud.",
      },
      {
        label: "Motion",
        text: "Editorial in rhythm, practical in navigation, and refined enough to support the product rather than compete with it.",
      },
    ],
    title: "Matte black, ivory, silver, and a restrained gold line.",
  },
  es: {
    eyebrow: "Códigos visuales",
    sections: [
      {
        label: "Paleta",
        text: "Bases negras profundas, reflejos marfil suavizados, neutros plateados claros y el dorado reservado como puntuación, no como adorno.",
      },
      {
        label: "Tono",
        text: "Premium, sereno, aspiracional. Nunca frío. Nunca estridente.",
      },
      {
        label: "Movimiento",
        text: "Editorial en el ritmo, práctico en la navegación y suficientemente refinado como para acompañar al producto en lugar de competir con él.",
      },
    ],
    title: "Negro mate, marfil, plata y una línea dorada usada con contención.",
  },
  fr: {
    eyebrow: "Codes visuels",
    sections: [
      {
        label: "Palette",
        text: "Des bases noir profond, des touches ivoire adoucies, des neutres argentés clairs et un or réservé à l'accent plutôt qu'à la décoration.",
      },
      {
        label: "Ton",
        text: "Premium, posé, aspirationnel. Jamais froid. Jamais bruyant.",
      },
      {
        label: "Mouvement",
        text: "Editorial dans le rythme, pratique dans la navigation, et assez raffiné pour soutenir le produit sans lui faire concurrence.",
      },
    ],
    title: "Noir mat, ivoire, argent et un trait d'or utilisé avec retenue.",
  },
  it: {
    eyebrow: "Codici visivi",
    sections: [
      {
        label: "Palette",
        text: "Basi nere profonde, accenti avorio ammorbiditi, neutri argento chiaro e oro riservato alla punteggiatura, non alla decorazione.",
      },
      {
        label: "Tono",
        text: "Premium, composto, aspirazionale. Mai freddo. Mai rumoroso.",
      },
      {
        label: "Movimento",
        text: "Editoriale nel ritmo, pratico nella navigazione e abbastanza raffinato da sostenere il prodotto senza competere con lui.",
      },
    ],
    title: "Nero opaco, avorio, argento e una linea dorata usata con misura.",
  },
  pt: {
    eyebrow: "Códigos visuais",
    sections: [
      {
        label: "Paleta",
        text: "Bases de preto profundo, destaques marfim suavizados, neutros prateados claros e dourado reservado como pontuação, não como decoração.",
      },
      {
        label: "Tom",
        text: "Premium, composto, aspiracional. Nunca frio. Nunca alto.",
      },
      {
        label: "Movimento",
        text: "Editorial no ritmo, prático na navegação e refinado o suficiente para apoiar o produto sem competir com ele.",
      },
    ],
    title: "Preto mate, marfim, prata e uma linha dourada usada com contenção.",
  },
};

const localizedMaterialVisionPanel: Record<
  Locale,
  {
    body: string;
    eyebrow: string;
    highlights: Array<{ label: string; text: string }>;
    title: string;
  }
> = {
  de: {
    body: "Das visuelle System hält den Lärm niedrig: mehr Luft, weniger konkurrierende Ebenen und eine klarere Trennung zwischen Erzählung und Commerce.",
    eyebrow: "Materialrichtung",
    highlights: [
      { label: "Wollmischungen", text: "Struktur mit Weichheit." },
      { label: "Fließende Shirting-Stoffe", text: "Bewegung ohne visuelles Rauschen." },
      { label: "Dichte Strickqualitäten", text: "Ruhiges Premium-Gewicht und Finish." },
    ],
    title: "Leiser Kontrast. Präzise Struktur. Ein weicheres taktiles Finish.",
  },
  en: {
    body: "The visual system aims for less noise: stronger spacing, fewer competing layers, and a clearer separation between storytelling and commerce.",
    eyebrow: "Material direction",
    highlights: [
      { label: "Wool blends", text: "Structure with softness." },
      { label: "Fluid shirting", text: "Movement without visual noise." },
      { label: "Dense knits", text: "Quiet premium weight and finish." },
    ],
    title: "Quiet contrast. Precise structure. A softer tactile finish.",
  },
  es: {
    body: "El sistema visual busca menos ruido: más aire, menos capas compitiendo y una separación más clara entre storytelling y commerce.",
    eyebrow: "Dirección material",
    highlights: [
      { label: "Mezclas de lana", text: "Estructura con suavidad." },
      { label: "Camisería fluida", text: "Movimiento sin ruido visual." },
      { label: "Punto denso", text: "Peso premium silencioso y buen acabado." },
    ],
    title: "Contraste silencioso. Estructura precisa. Un acabado táctil más suave.",
  },
  fr: {
    body: "Le système visuel vise moins de bruit: plus d'air, moins de couches en concurrence et une séparation plus nette entre narration et commerce.",
    eyebrow: "Direction matière",
    highlights: [
      { label: "Mélanges de laine", text: "De la structure avec de la douceur." },
      { label: "Chemiserie fluide", text: "Du mouvement sans bruit visuel." },
      { label: "Mailles denses", text: "Un poids premium discret et une belle finition." },
    ],
    title: "Contraste discret. Structure précise. Une finition tactile plus douce.",
  },
  it: {
    body: "Il sistema visivo cerca meno rumore: più respiro, meno livelli in competizione e una separazione più chiara tra storytelling e commerce.",
    eyebrow: "Direzione materica",
    highlights: [
      { label: "Miscele di lana", text: "Struttura con morbidezza." },
      { label: "Camiceria fluida", text: "Movimento senza rumore visivo." },
      { label: "Maglie dense", text: "Peso premium discreto e finitura curata." },
    ],
    title: "Contrasto silenzioso. Struttura precisa. Una finitura tattile più morbida.",
  },
  pt: {
    body: "O sistema visual procura menos ruído: mais respiração, menos camadas a competir e uma separação mais clara entre storytelling e commerce.",
    eyebrow: "Direção material",
    highlights: [
      { label: "Misturas de lã", text: "Estrutura com suavidade." },
      { label: "Camisaria fluida", text: "Movimento sem ruído visual." },
      { label: "Malhas densas", text: "Peso premium discreto e bom acabamento." },
    ],
    title: "Contraste silencioso. Estrutura precisa. Um acabamento tátil mais suave.",
  },
};

export const products: Product[] = [
  {
    accent: "#b58b42",
    asset: "monogram",
    category: "tailoring",
    collection: "Chapter 01",
    colors: [
      { hex: "#111316", name: "Midnight Ink" },
      { hex: "#d7cfbf", name: "Soft Limestone" },
    ],
    description:
      "A belted blazer cut to deliver shape, ease, and a refined line through the waist.",
    details: [
      "Soft-structured shoulder",
      "Self belt with discreet loops",
      "Fully lined interior",
      "Clean double welt pockets",
    ],
    editorialNote: "For entrances that do not need to announce themselves loudly.",
    featured: true,
    fit: "Relaxed through the body with controlled definition at the waist.",
    materials: ["65% virgin wool", "30% viscose", "5% elastane"],
    mood: "Sculpted",
    name: "Athena Belted Blazer",
    order: 1,
    palette: ["#0d1013", "#20242a", "#d8cfbf"],
    price: 249,
    sizes: ["XS", "S", "M", "L", "XL"],
    slug: "athena-belted-blazer",
    story:
      "The Athena blazer balances authority with softness. It is designed to sharpen denim, elevate tailored trousers, and bring intentional structure to quieter basics.",
  },
  {
    accent: "#d1c6b1",
    asset: "labels",
    category: "tailoring",
    collection: "Chapter 01",
    colors: [
      { hex: "#151719", name: "Noir" },
      { hex: "#c3b8a5", name: "Stone Mist" },
    ],
    description:
      "Fluid pleated trousers with a clean fall and enough room to move through the day.",
    details: [
      "Double front pleat",
      "Extended waistband tab",
      "Pressed crease",
      "Half-lined waistband interior",
    ],
    editorialNote: "Precision made easy, from morning meetings to late dinners.",
    featured: true,
    fit: "High-rise with a long, softly tapered leg.",
    materials: ["54% wool", "44% polyester", "2% elastane"],
    mood: "Fluid",
    name: "Seville Column Trouser",
    order: 2,
    palette: ["#181a1d", "#34373b", "#cdc1ab"],
    price: 159,
    sizes: ["XS", "S", "M", "L", "XL"],
    slug: "seville-column-trouser",
    story:
      "This trouser anchors the collection with movement and clarity. It is cut to sit sharply on the body while preserving softness in motion.",
  },
  {
    accent: "#c8b48d",
    asset: "labels",
    category: "knitwear",
    collection: "Chapter 01",
    colors: [
      { hex: "#b7ad98", name: "Oat Sand" },
      { hex: "#111418", name: "Night" },
    ],
    description:
      "A fine merino knit with a compact hand feel and a neckline designed to sit cleanly under tailoring.",
    details: [
      "12-gauge merino knit",
      "Compact rib neck and cuff",
      "Refined shoulder seam",
      "Easy-to-layer length",
    ],
    editorialNote: "The quiet layer that makes sharper pieces feel effortless.",
    featured: true,
    fit: "Close to the body without clinging.",
    materials: ["100% extrafine merino wool"],
    mood: "Quiet",
    name: "Valencia Merino Knit",
    order: 3,
    palette: ["#181614", "#b8ae98", "#e6ddce"],
    price: 139,
    sizes: ["XS", "S", "M", "L"],
    slug: "valencia-merino-knit",
    story:
      "Designed as a connector piece, the Valencia knit brings softness under jackets and polish when worn on its own.",
  },
  {
    accent: "#a98d61",
    asset: "monogram",
    category: "outerwear",
    collection: "Chapter 01",
    colors: [
      { hex: "#3f403b", name: "Mossed Charcoal" },
      { hex: "#d8d1c6", name: "Pale Shell" },
    ],
    description:
      "A lightweight overshirt with coat-like presence and a softer everyday attitude.",
    details: [
      "Oversized chest pockets",
      "Horn-effect buttons",
      "Brushed wool surface",
      "Straight hem finish",
    ],
    editorialNote: "Layering made architectural.",
    featured: false,
    fit: "Relaxed and slightly boxy for layering over shirts or knits.",
    materials: ["72% wool", "24% polyamide", "4% other fibers"],
    mood: "Layered",
    name: "Sierra Wool Overshirt",
    order: 4,
    palette: ["#26241f", "#4b4944", "#d9d0c0"],
    price: 189,
    sizes: ["S", "M", "L", "XL"],
    slug: "sierra-wool-overshirt",
    story:
      "The Sierra overshirt sits between shirt and jacket, giving a more directional finish to otherwise simple wardrobes.",
  },
  {
    accent: "#c0ac81",
    asset: "labels",
    category: "essentials",
    collection: "Chapter 01",
    colors: [
      { hex: "#f1e8da", name: "Ivory Matter" },
      { hex: "#15181b", name: "Dark Slate" },
    ],
    description:
      "A fluid shirt with a crisp drape, designed to feel polished even when styled loosely.",
    details: [
      "Hidden placket",
      "Extended cuff detail",
      "Soft point collar",
      "Satin-touch finish",
    ],
    editorialNote: "An essential that behaves like a statement in the right light.",
    featured: true,
    fit: "Straight through the body with elegant movement at the hem.",
    materials: ["68% lyocell", "32% cotton"],
    mood: "Polished",
    name: "Marais Fluid Shirt",
    order: 5,
    palette: ["#f0e8dc", "#d6c8b4", "#1a1d21"],
    price: 119,
    sizes: ["XS", "S", "M", "L", "XL"],
    slug: "marais-fluid-shirt",
    story:
      "Minimal, sharp, and extremely versatile, the Marais shirt is designed to move from tailoring to denim without losing its composed finish.",
  },
  {
    accent: "#a88654",
    asset: "monogram",
    category: "tailoring",
    collection: "Chapter 01",
    colors: [
      { hex: "#101214", name: "Obsidian" },
      { hex: "#b39d7c", name: "Burnished Sand" },
    ],
    description:
      "A pleated midi skirt with a clean waist and just enough movement to catch light.",
    details: [
      "Knife pleat construction",
      "Invisible side zip",
      "Softly weighted hem",
      "Satin backing",
    ],
    editorialNote: "A composed silhouette with cinematic movement.",
    featured: false,
    fit: "Mid-rise with a straight fall from the hip.",
    materials: ["58% recycled polyester", "42% viscose"],
    mood: "Linear",
    name: "Nocturne Pleated Skirt",
    order: 6,
    palette: ["#121518", "#2b2a28", "#b39f82"],
    price: 149,
    sizes: ["XS", "S", "M", "L"],
    slug: "nocturne-pleated-skirt",
    story:
      "The Nocturne skirt is designed to add precision rather than drama, offering a longer line that works with knits, shirting, and clean outerwear.",
  },
  {
    accent: "#c5a773",
    asset: "labels",
    category: "knitwear",
    collection: "Chapter 01",
    colors: [
      { hex: "#d1c4b0", name: "Warm Stone" },
      { hex: "#131519", name: "Midnight" },
    ],
    description:
      "A ribbed polo knit that moves between sport influence and dressier styling.",
    details: [
      "Compact rib structure",
      "Minimal placket",
      "Refined collar spread",
      "Clean hem finish",
    ],
    editorialNote: "A subtle nod to classic codes, re-edited with more restraint.",
    featured: false,
    fit: "Skims the body with a slightly cropped modern proportion.",
    materials: ["83% viscose", "17% nylon"],
    mood: "Refined",
    name: "Atelier Rib Polo",
    order: 7,
    palette: ["#1a1d21", "#37312d", "#d3c4ae"],
    price: 129,
    sizes: ["S", "M", "L", "XL"],
    slug: "atelier-rib-polo",
    story:
      "The Atelier polo takes familiar codes and pares them back, producing a piece that can read more elegant than casual depending on the styling.",
  },
  {
    accent: "#b28f53",
    asset: "monogram",
    category: "outerwear",
    collection: "Chapter 01",
    colors: [
      { hex: "#d4c9b7", name: "Pebble Beige" },
      { hex: "#1c2024", name: "Blackened Navy" },
    ],
    description:
      "A full-length trench with a clean front, broad lapel, and strong but fluid drape.",
    details: [
      "Water-resistant finish",
      "Detachable belt",
      "Storm flap detail",
      "Half-lined interior",
    ],
    editorialNote: "The hero layer for a wardrobe that prefers presence over noise.",
    featured: true,
    fit: "Long and relaxed, designed to sit over tailoring or knitwear.",
    materials: ["62% cotton", "38% technical nylon"],
    mood: "Commanding",
    name: "Duoro Trench Coat",
    order: 8,
    palette: ["#d8cebf", "#b39c79", "#20242b"],
    price: 289,
    sizes: ["S", "M", "L", "XL"],
    slug: "duoro-trench-coat",
    story:
      "The Duoro trench is conceived as a final edit. It brings length, contrast, and confidence to the wardrobe without tipping into stiffness.",
  },
];

function localizeProduct(product: Product, locale: Locale) {
  const dictionary = getDictionary(locale);
  const localizedCopy = dictionary.products[product.slug as keyof typeof dictionary.products];

  if (!localizedCopy) {
    return product;
  }

  return {
    ...product,
    collection: dictionary.productCommon.chapterLabel,
    colors: product.colors.map((color, index) => ({
      ...color,
      name: localizedCopy.colors[index] ?? color.name,
    })),
    description: localizedCopy.description,
    details: [...localizedCopy.details],
    editorialNote: localizedCopy.editorialNote,
    fit: localizedCopy.fit,
    materials: [...localizedCopy.materials],
    mood: localizedCopy.mood,
    name: localizedCopy.name,
    story: localizedCopy.story,
  };
}

export function getProducts(locale: Locale = defaultLocale) {
  const resolvedLocale = resolveLocale(locale);
  return products.map((product) => localizeProduct(product, resolvedLocale));
}

export function getFeaturedProducts(locale: Locale = defaultLocale) {
  return getProducts(locale).filter((product) => product.featured).slice(0, 4);
}

export function getCollectionDisplayProducts(items: Product[]): CollectionDisplayProduct[] {
  return items.flatMap((product) =>
    product.colors.map((_, variantIndex) => ({
      id: `${product.slug}-${variantIndex}`,
      product,
      variantIndex,
    })),
  );
}

export function getCategoryLabel(
  category: Product["category"],
  locale: Locale = defaultLocale,
) {
  return localizedCategoryCopy[resolveLocale(locale)][category].label;
}

export function getCollectionCategories(locale: Locale = defaultLocale): CollectionCategory[] {
  const resolvedLocale = resolveLocale(locale);

  return categoryOrder.map((category) => ({
    id: category,
    label: localizedCategoryCopy[resolvedLocale][category].label,
  }));
}

export function getCategoryShowcase(locale: Locale = defaultLocale): CategoryShowcaseItem[] {
  const resolvedLocale = resolveLocale(locale);

  return categoryOrder.map((category, index) => ({
    description: localizedCategoryCopy[resolvedLocale][category].description,
    id: category,
    label: localizedCategoryCopy[resolvedLocale][category].label,
    number: String(index + 1).padStart(2, "0"),
  }));
}

export function getManifestoLines(locale: Locale = defaultLocale) {
  return localizedManifestoLines[resolveLocale(locale)];
}

export function getManifestoPanel(locale: Locale = defaultLocale) {
  return localizedManifestoPanel[resolveLocale(locale)];
}

export function getMaterialVisionPanel(locale: Locale = defaultLocale) {
  return localizedMaterialVisionPanel[resolveLocale(locale)];
}

export function getSortOptions(locale: Locale = defaultLocale) {
  const labels = getDictionary(resolveLocale(locale)).sortLabels;

  return (["featured", "newest", "price-asc", "price-desc"] as const).map((value) => ({
    label: labels[value],
    value,
  }));
}

export function formatPrice(price: number, locale: Locale = defaultLocale) {
  const localeMap: Record<Locale, string> = {
    de: "de-DE",
    en: "en-GB",
    es: "es-ES",
    fr: "fr-FR",
    it: "it-IT",
    pt: "pt-PT",
  };

  return new Intl.NumberFormat(localeMap[resolveLocale(locale)], {
    currency: "EUR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(price);
}

export function getProductBySlug(slug: string, locale: Locale = defaultLocale) {
  const product = products.find((item) => item.slug === slug);

  return product ? localizeProduct(product, resolveLocale(locale)) : undefined;
}

export function getRelatedProducts(
  slug: string,
  locale: Locale = defaultLocale,
  limit = 3,
) {
  const currentProduct = getProductBySlug(slug, locale);

  if (!currentProduct) {
    return getProducts(locale).slice(0, limit);
  }

  return getProducts(locale)
    .filter((product) => product.slug !== slug)
    .sort((a, b) => {
      const categoryScore =
        Number(b.category === currentProduct.category) -
        Number(a.category === currentProduct.category);

      if (categoryScore !== 0) {
        return categoryScore;
      }

      return a.order - b.order;
    })
    .slice(0, limit);
}

export function sortProducts(items: Product[], sort: SortOption) {
  const sorted = [...items];

  switch (sort) {
    case "newest":
      return sorted.sort((a, b) => a.order - b.order);
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "featured":
    default:
      return sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order);
  }
}

export function buildCollectionHref(
  category = "all",
  sort: SortOption = "featured",
  locale: Locale = defaultLocale,
) {
  return buildLocalizedHref("/collection", locale, {
    category: category === "all" ? undefined : category,
    sort: sort === "featured" ? undefined : sort,
  });
}
