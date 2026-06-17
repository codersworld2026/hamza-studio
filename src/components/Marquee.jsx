const ITEMS = [
  "Websites · Apps · Shopify · SEO",
  "We design · we build · we rank",
  "UK · Qatar · Remote",
  "Just send a voice note",
  "Good days, all ways",
];

export default function Marquee() {
  // Doubled so the -50% keyframe scroll loops seamlessly.
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="topbar">
      <div className="marquee">
        <div className="marquee__track">
          {loop.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
