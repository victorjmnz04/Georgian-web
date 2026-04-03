import { type Product } from "@/lib/site-data";

type ProductFigureProps = {
  className?: string;
  product: Product;
  variantIndex?: number;
};

function rgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const normalized = value.length === 3 ? value.split("").map((part) => `${part}${part}`).join("") : value;
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function getColorPair(product: Product, variantIndex: number) {
  const activeColor = product.colors[variantIndex] ?? product.colors[0];
  const alternateColor = product.colors[(variantIndex + 1) % product.colors.length] ?? activeColor;

  return {
    accent: product.accent,
    alternate: alternateColor.hex,
    primary: activeColor.hex,
    secondary: product.palette[2],
    stroke: rgba(product.palette[0], 0.34),
  };
}

function AthenaBlazer(primary: string, secondary: string, stroke: string) {
  return (
    <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
      <path d="M147 120 L118 182 L133 388 Q210 432 287 388 L302 182 L273 120 L243 148 L177 148 Z" fill={primary} />
      <path d="M118 186 L78 250 L95 392 L133 380 L151 232 Z" fill={secondary} />
      <path d="M302 186 L342 250 L325 392 L287 380 L269 232 Z" fill={secondary} />
      <path d="M181 148 L170 298 L210 256 L250 298 L239 148 Z" fill={rgba("#f4eee3", 0.82)} />
      <path d="M151 270 Q210 292 269 270" fill="none" />
      <path d="M160 308 Q210 324 260 308" fill="none" />
      <path d="M135 312 Q210 332 285 312" fill="none" strokeDasharray="5 8" />
    </g>
  );
}

function SevilleTrouser(primary: string, secondary: string, stroke: string) {
  return (
    <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
      <path d="M158 110 L262 110 L278 198 L252 416 L206 416 L214 250 L186 250 L194 416 L148 416 L142 198 Z" fill={primary} />
      <path d="M164 110 Q177 148 188 188 Q195 214 186 248" fill={rgba(secondary, 0.65)} />
      <path d="M256 110 Q243 148 232 188 Q225 214 234 248" fill={rgba(secondary, 0.65)} />
      <path d="M186 110 L210 416" fill="none" />
      <path d="M234 110 L210 416" fill="none" />
      <path d="M150 186 Q210 210 270 186" fill="none" />
    </g>
  );
}

function ValenciaKnit(primary: string, secondary: string, stroke: string) {
  return (
    <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
      <path d="M158 132 L122 186 L138 372 Q210 402 282 372 L298 186 L262 132 L236 156 L184 156 Z" fill={primary} />
      <path d="M122 188 L82 260 L103 388 L140 374 L154 224 Z" fill={secondary} />
      <path d="M298 188 L338 260 L317 388 L280 374 L266 224 Z" fill={secondary} />
      <path d="M184 156 Q210 144 236 156" fill={rgba("#f4eee3", 0.8)} />
      <path d="M170 180 H250" fill="none" />
      <path d="M166 214 H254" fill="none" />
      <path d="M162 248 H258" fill="none" />
      <path d="M158 282 H262" fill="none" />
    </g>
  );
}

function SierraOvershirt(primary: string, secondary: string, stroke: string) {
  return (
    <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
      <path d="M146 118 L118 182 L136 388 Q210 420 284 388 L302 182 L274 118 L238 142 L182 142 Z" fill={primary} />
      <path d="M118 182 L84 248 L104 392 L138 380 L150 228 Z" fill={secondary} />
      <path d="M302 182 L336 248 L316 392 L282 380 L270 228 Z" fill={secondary} />
      <rect fill={rgba("#f4eee3", 0.16)} height="62" rx="8" width="44" x="164" y="208" />
      <rect fill={rgba("#f4eee3", 0.16)} height="62" rx="8" width="44" x="212" y="208" />
      <path d="M210 142 L210 382" fill="none" />
      <path d="M182 142 L210 182 L238 142" fill={rgba("#f4eee3", 0.76)} />
    </g>
  );
}

function MaraisShirt(primary: string, secondary: string, stroke: string) {
  return (
    <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
      <path d="M154 126 L124 186 L142 382 Q210 410 278 382 L296 186 L266 126 L234 154 L186 154 Z" fill={primary} />
      <path d="M124 186 L86 258 L102 394 L142 382 L154 228 Z" fill={secondary} />
      <path d="M296 186 L334 258 L318 394 L278 382 L266 228 Z" fill={secondary} />
      <path d="M186 154 L210 192 L234 154" fill={rgba("#f4eee3", 0.72)} />
      <path d="M210 154 L210 382" fill="none" strokeDasharray="5 10" />
      <path d="M164 216 Q210 230 256 216" fill="none" />
      <path d="M160 260 Q210 272 260 260" fill="none" opacity="0.74" />
    </g>
  );
}

function NocturneSkirt(primary: string, secondary: string, stroke: string) {
  return (
    <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
      <path d="M168 136 L252 136 L290 390 L130 390 Z" fill={primary} />
      <path d="M176 136 L160 390" fill="none" />
      <path d="M194 136 L182 390" fill="none" />
      <path d="M212 136 L210 390" fill="none" />
      <path d="M230 136 L238 390" fill="none" />
      <path d="M248 136 L262 390" fill="none" />
      <path d="M138 330 Q210 364 282 330" fill={rgba(secondary, 0.38)} />
    </g>
  );
}

function AtelierPolo(primary: string, secondary: string, stroke: string) {
  return (
    <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
      <path d="M166 138 L132 186 L146 350 Q210 378 274 350 L288 186 L254 138 L230 158 L190 158 Z" fill={primary} />
      <path d="M132 186 L92 236 L108 344 L146 334 L156 228 Z" fill={secondary} />
      <path d="M288 186 L328 236 L312 344 L274 334 L264 228 Z" fill={secondary} />
      <path d="M190 158 L210 184 L230 158" fill={rgba("#f4eee3", 0.72)} />
      <path d="M210 158 L210 240" fill="none" />
      <path d="M170 210 H250" fill="none" />
      <path d="M166 242 H254" fill="none" opacity="0.84" />
      <path d="M162 274 H258" fill="none" opacity="0.72" />
    </g>
  );
}

function DuoroTrench(primary: string, secondary: string, stroke: string, accent: string) {
  return (
    <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
      <path d="M150 110 L122 176 L146 414 Q210 446 274 414 L298 176 L270 110 L238 148 L182 148 Z" fill={primary} />
      <path d="M122 176 L82 252 L108 414 L146 400 L154 228 Z" fill={secondary} />
      <path d="M298 176 L338 252 L312 414 L274 400 L266 228 Z" fill={secondary} />
      <path d="M182 148 L166 216 L210 184 L254 216 L238 148 Z" fill={rgba("#f4eee3", 0.76)} />
      <rect fill={rgba(accent, 0.34)} height="14" rx="7" width="132" x="144" y="276" />
      <path d="M210 148 L210 414" fill="none" />
      <path d="M146 318 Q210 338 274 318" fill="none" />
    </g>
  );
}

function renderGarment(product: Product, primary: string, secondary: string, stroke: string, accent: string) {
  switch (product.slug) {
    case "athena-belted-blazer":
      return AthenaBlazer(primary, secondary, stroke);
    case "seville-column-trouser":
      return SevilleTrouser(primary, secondary, stroke);
    case "valencia-merino-knit":
      return ValenciaKnit(primary, secondary, stroke);
    case "sierra-wool-overshirt":
      return SierraOvershirt(primary, secondary, stroke);
    case "marais-fluid-shirt":
      return MaraisShirt(primary, secondary, stroke);
    case "nocturne-pleated-skirt":
      return NocturneSkirt(primary, secondary, stroke);
    case "atelier-rib-polo":
      return AtelierPolo(primary, secondary, stroke);
    case "duoro-trench-coat":
      return DuoroTrench(primary, secondary, stroke, accent);
    default:
      return MaraisShirt(primary, secondary, stroke);
  }
}

export function ProductFigure({
  className = "",
  product,
  variantIndex = 0,
}: ProductFigureProps) {
  const { accent, primary, secondary, stroke } = getColorPair(product, variantIndex);

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 420 520"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="210" cy="446" fill={rgba(product.palette[0], 0.12)} rx="116" ry="18" />
      {renderGarment(product, primary, secondary, stroke, accent)}
      <path
        d="M180 96 Q210 84 240 96"
        stroke={rgba(accent, 0.5)}
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

export function ProductDetailBoard({
  className = "",
  product,
  variantIndex = 0,
}: ProductFigureProps) {
  const { accent, alternate, primary, secondary, stroke } = getColorPair(product, variantIndex);

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 420 520"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={rgba(primary, 0.18)} height="308" rx="28" width="108" x="44" y="106" />
      <rect fill={rgba(secondary, 0.24)} height="336" rx="28" width="120" x="156" y="92" />
      <rect fill={rgba(alternate, 0.22)} height="284" rx="28" width="90" x="286" y="120" />
      <path d="M80 140 L80 384" stroke={stroke} strokeDasharray="6 10" strokeWidth="3" />
      <path d="M214 122 L214 396" stroke={stroke} strokeDasharray="4 10" strokeWidth="3" />
      <path d="M330 152 L330 372" stroke={stroke} strokeDasharray="6 12" strokeWidth="3" />
      <path d="M58 200 H130" stroke={rgba("#f4eee3", 0.72)} strokeLinecap="round" strokeWidth="10" />
      <path d="M176 182 H252" stroke={rgba(accent, 0.42)} strokeLinecap="round" strokeWidth="12" />
      <path d="M178 224 H252" stroke={rgba("#f4eee3", 0.46)} strokeLinecap="round" strokeWidth="8" />
      <path d="M302 182 H358" stroke={rgba("#f4eee3", 0.72)} strokeLinecap="round" strokeWidth="10" />
      <circle cx="214" cy="318" fill={rgba(accent, 0.54)} r="18" />
      <circle cx="214" cy="318" stroke={rgba("#f4eee3", 0.65)} r="9" strokeWidth="4" />
      <path d="M174 374 Q210 344 246 374" stroke={rgba(product.palette[0], 0.28)} strokeLinecap="round" strokeWidth="9" />
    </svg>
  );
}
