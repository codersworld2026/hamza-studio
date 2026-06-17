/* ============================================================
   NORTHLIGHT STUDIOS × SUNNY CLUB — retro SVG motifs
   Ported from the design prototype's app.js into React components.
   ============================================================ */

// Full-width stacked rainbow wave divider
export function RainbowWave({ h = 132 }) {
  const bands = [
    { c: "#FFCDB5", y: 30 }, // peach
    { c: "#FFC445", y: 52 }, // mustard
    { c: "#FF6B35", y: 74 }, // orange
    { c: "#A7C4A1", y: 96 }, // sage
    { c: "#0F5D5A", y: 118 }, // teal
  ];
  return (
    <svg
      className="wave"
      viewBox={`0 0 1440 ${h}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: `${h}px` }}
      aria-hidden="true"
    >
      <rect width="1440" height={h} fill="#FFF6E9" />
      {bands.map((b, i) => (
        <path
          key={i}
          d={`M0,${b.y} C320,${b.y - 26} 560,${b.y + 26} 880,${b.y} C1140,${b.y - 22} 1280,${b.y + 18} 1440,${b.y - 4}`}
          fill="none"
          stroke={b.c}
          strokeWidth="20"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

// Smiley sun with rays
export function SmileySun({ face = "#FF6B35", ray = "#FFC445" }) {
  const rays = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const r1 = 52;
    const r2 = 72;
    rays.push({
      x1: 100 + Math.cos(a) * r1,
      y1: 100 + Math.sin(a) * r1,
      x2: 100 + Math.cos(a) * r2,
      y2: 100 + Math.sin(a) * r2,
    });
  }
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {rays.map((l, i) => (
        <line
          key={i}
          x1={l.x1.toFixed(1)}
          y1={l.y1.toFixed(1)}
          x2={l.x2.toFixed(1)}
          y2={l.y2.toFixed(1)}
          stroke={ray}
          strokeWidth="9"
          strokeLinecap="round"
        />
      ))}
      <circle cx="100" cy="100" r="46" fill={face} stroke="#17233D" strokeWidth="5" />
      <circle cx="84" cy="92" r="6" fill="#17233D" />
      <circle cx="116" cy="92" r="6" fill="#17233D" />
      <path d="M82 112c4 9 32 9 36 0" fill="none" stroke="#17233D" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

// Big rising sun for the CTA band
export function RisingSun() {
  const rays = [];
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    rays.push({
      x1: 300 + Math.cos(a) * 92,
      y1: 300 + Math.sin(a) * 92,
      x2: 300 + Math.cos(a) * 128,
      y2: 300 + Math.sin(a) * 128,
    });
  }
  return (
    <svg
      viewBox="0 0 600 360"
      preserveAspectRatio="xMidYMax meet"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%" }}
      aria-hidden="true"
    >
      {rays.map((l, i) => (
        <line
          key={i}
          x1={l.x1.toFixed(1)}
          y1={l.y1.toFixed(1)}
          x2={l.x2.toFixed(1)}
          y2={l.y2.toFixed(1)}
          stroke="#FFC445"
          strokeWidth="13"
          strokeLinecap="round"
        />
      ))}
      <circle cx="300" cy="300" r="82" fill="#FFC445" stroke="#17233D" strokeWidth="6" />
      <circle cx="282" cy="290" r="8" fill="#17233D" />
      <circle cx="318" cy="290" r="8" fill="#17233D" />
      <path d="M280 314c6 12 34 12 40 0" fill="none" stroke="#17233D" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

// Circular smiley stamp with text on a ring
export function StampBadge({ id = "ring" }) {
  const pathId = `stamp-${id}`;
  return (
    <svg
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", filter: "drop-shadow(3px 4px 0 #17233D)" }}
      aria-hidden="true"
    >
      <circle cx="70" cy="70" r="66" fill="#0F5D5A" stroke="#17233D" strokeWidth="4" />
      <defs>
        <path id={pathId} d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
      </defs>
      <text fontFamily="Sansita, serif" fontWeight="800" fontSize="15" letterSpacing="3" fill="#FFF6E9">
        <textPath href={`#${pathId}`} startOffset="0%">
          GOOD DAYS · ALL WAYS · GOOD DAYS ·{" "}
        </textPath>
      </text>
      <circle cx="70" cy="72" r="22" fill="#FFC445" stroke="#17233D" strokeWidth="3" />
      <circle cx="63" cy="68" r="3" fill="#17233D" />
      <circle cx="77" cy="68" r="3" fill="#17233D" />
      <path d="M61 78c3 5 15 5 18 0" fill="none" stroke="#17233D" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// "Treat yourself" coffee mug sticker
export function TreatSticker() {
  return (
    <svg
      viewBox="0 0 150 130"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", filter: "drop-shadow(3px 4px 0 #17233D)" }}
      aria-hidden="true"
    >
      <rect x="6" y="6" width="138" height="118" rx="22" fill="#FFF6E9" stroke="#17233D" strokeWidth="4" />
      <path d="M45 38h44v30a22 22 0 0 1-44 0Z" fill="#FF6B35" stroke="#17233D" strokeWidth="3.5" />
      <path d="M89 46h10a10 10 0 0 1 0 20h-3" fill="none" stroke="#17233D" strokeWidth="3.5" />
      <path d="M50 86h34" stroke="#FFC445" strokeWidth="5" strokeLinecap="round" />
      <text x="75" y="112" textAnchor="middle" fontFamily="Sansita, serif" fontWeight="800" fontSize="17" fill="#0F5D5A">
        Treat yourself
      </text>
    </svg>
  );
}
