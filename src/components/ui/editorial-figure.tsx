type EditorialFigureProps = {
  className?: string;
  kind?: "seated" | "stride";
  palette: [string, string, string];
};

function rgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const normalized = value.length === 3 ? value.split("").map((part) => `${part}${part}`).join("") : value;
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function SeatedFigure(palette: [string, string, string]) {
  return (
    <>
      <rect fill={rgba(palette[2], 0.34)} height="580" rx="28" width="232" x="78" y="118" />
      <path d="M240 166 C276 166 300 194 300 228 C300 262 278 286 248 294 C226 300 210 314 206 340 L196 430 L154 430 L160 334 C164 280 186 238 216 214 C230 202 236 186 240 166 Z" fill="#dcc6aa" />
      <path d="M194 218 L254 218 L280 356 L174 368 Z" fill="#f4eee3" />
      <path d="M198 218 L176 308 L122 468 L168 486 L216 374 Z" fill="#f4eee3" />
      <path d="M252 218 L278 292 L336 424 L292 442 L236 338 Z" fill={palette[0]} />
      <path d="M168 486 Q202 470 220 486 L226 506 Q198 520 170 514 Z" fill={palette[1]} />
      <path d="M292 442 Q320 434 338 446 L334 470 Q306 474 286 460 Z" fill={palette[2]} />
      <circle cx="246" cy="148" fill="#e9d7bf" r="34" />
      <path d="M216 148 Q240 102 286 118 Q300 166 284 198 L230 204 Q214 182 216 148 Z" fill={rgba(palette[0], 0.92)} />
      <circle cx="244" cy="260" fill={rgba(palette[1], 0.72)} r="8" />
      <circle cx="252" cy="308" fill={rgba(palette[1], 0.72)} r="8" />
      <circle cx="260" cy="354" fill={rgba(palette[1], 0.72)} r="8" />
    </>
  );
}

function StrideFigure(palette: [string, string, string]) {
  return (
    <>
      <rect fill={rgba(palette[2], 0.28)} height="560" rx="28" width="208" x="108" y="98" />
      <circle cx="234" cy="132" fill="#ead9c5" r="32" />
      <path d="M206 132 Q230 88 276 106 Q284 154 268 188 L214 194 Q200 170 206 132 Z" fill={rgba(palette[0], 0.94)} />
      <path d="M188 194 L270 194 L286 330 Q238 352 184 330 Z" fill={palette[0]} />
      <path d="M188 194 L146 274 L172 324 L208 242 Z" fill={palette[1]} />
      <path d="M270 194 L316 264 L290 318 L250 240 Z" fill={palette[1]} />
      <path d="M208 330 L192 520 L236 520 L246 354 Z" fill="#f4eee3" />
      <path d="M244 330 L302 520 L344 520 L272 346 Z" fill={palette[2]} />
      <path d="M188 328 Q238 346 286 328" fill="none" stroke={rgba(palette[2], 0.58)} strokeLinecap="round" strokeWidth="10" />
      <path d="M186 520 Q214 506 238 520 L236 542 Q210 550 188 542 Z" fill={palette[0]} />
      <path d="M304 520 Q330 510 350 522 L346 544 Q320 548 302 538 Z" fill={palette[0]} />
    </>
  );
}

export function EditorialFigure({
  className = "",
  kind = "seated",
  palette,
}: EditorialFigureProps) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 420 760"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#f6f1e8" height="760" width="420" />
      <rect fill={rgba(palette[0], 0.08)} height="760" width="112" x="308" />
      <rect fill={rgba(palette[2], 0.18)} height="760" width="96" />
      {kind === "seated" ? SeatedFigure(palette) : StrideFigure(palette)}
    </svg>
  );
}
