import { AREAS } from "../config/site.js";
import { AreaIcon } from "./icons.jsx";

export default function AreasWeServe() {
  return (
    <section className="areas section" id="areas">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Areas we serve</span>
          <h2>
            Working with businesses <em>near and far</em>
          </h2>
          <p>Based in the UK, connected to Qatar and the Middle East, and set up to work remotely with small to medium businesses anywhere.</p>
        </div>

        <div className="areas__grid">
          {AREAS.map((a, i) => (
            <article className="area reveal" data-d={String(i)} key={a.key}>
              <span className="area__ic">
                <AreaIcon name={a.key} />
              </span>
              <h3>{a.name}</h3>
              <p>{a.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
