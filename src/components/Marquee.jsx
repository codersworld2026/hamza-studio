const ITEMS = [
  "Good days, all ways",
  "Modern websites · real results",
  "Just send a voice note",
  "Built by hand, launched fast",
  "Small business, big energy",
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
