/**
 * Reusable project section:
 *  - Hero row: image (left) + description card (right)
 *  - Gallery row: N images (configurable)
 *
 * Props:
 *  - title: string
 *  - type: string
 *  - summary: string
 *  - coverSrc: string (hero image)
 *  - gallery: string[] (image urls)
 *  - className: string (optional container overrides)
 */
import React from "react";

export default function ProjectShowcase({
  title = "Project name",
  type = "Packaging",
  summary = "The project summary : Packaging",
  coverSrc,
  gallery = [],
  className = "",
}) {
  return (
    <section className={`page-container ${className}`}>
      <div className="wrapper">
        {/* =========================
            Row 1: Cover + Description
        ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Cover image */}
          <figure className="glass-card-border rounded-lg overflow-hidden relative">
            <img
              src={coverSrc}
              alt={`${title} cover`}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </figure>

          {/* Description card */}
          <article className="glass-card-border rounded-lg p-4 md:p-6">
            <div className="space-y-4">
              <div className="opacity-60 text-sm">Project name</div>
              <h2 className="text-[32px] md:text-[40px] editorial-font font-semibold leading-8">
                {title}
              </h2>

              <div>
                <div className="opacity-60 text-sm">Project Type</div>
                <div className="italic editorial-font text-xl">{type}</div>
              </div>

              <div className="space-y-1">
                <div className="opacity-60 text-sm">The project summary :</div>
                <p className="opacity-80 text-sm md:text-base">{summary}</p>
              </div>
            </div>
          </article>
        </div>

        {/* =========================
    Row 2: Gallery Grid (9 cols, fixed height, custom spans)
========================= */}
        {gallery?.length > 0 && (
          <div className="grid grid-cols-9 gap-2 auto-rows-[360px]">
            {gallery.map((src, i) => {
              let spanClass = "";
              if (i === 0 || i === 3) {
                spanClass = "col-span-9 md:col-span-5"; // 1st & 4th
              } else if (i === 1 || i === 2) {
                spanClass = "col-span-9 md:col-span-4"; // 2nd & 3rd
              } else {
                spanClass = "col-span-9 md:col-span-3"; // fallback for extras
              }

              return (
                <figure
                  key={i}
                  className={`glass-card-border rounded-lg overflow-hidden bg-[#e0e0e0] ${spanClass}`}
                >
                  {src ? (
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                </figure>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
