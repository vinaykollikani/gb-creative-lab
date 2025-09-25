/**
 * File: src/components/projectssection.jsx
 * Role: Projects grid (3 breakpoints: phone, tablet, desktop)
 */
import React from 'react'
import bluedot from './../../assets/Blue_dot.svg'
import arrowType1 from './../../assets/Arrow.svg'
import projectImage1 from './../../assets/Rectangle3.jpg'

const CARDS = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: 'Project Name',
  type: 'Project Type1',
  img: projectImage1,
}))

export default function ProjectsSection() {
  return (
    <section
      className="page-container mt-12 scroll-mt-20"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="wrapper">
        {/* Section header */}
        <div className="projects-section_content flex flex-col items-center gap-3 text-center">
          {/* Tag */}
          <div className="projects-tag relative h-10 w-full sm:w-1/2 lg:w-1/3 flex items-center justify-center">
            <div className="divider" aria-hidden="true"></div>
            <div className="absolute h-8 rounded-4xl">
              <span className="glass-btn-rounded-ba"></span>
              <span className="h-8 px-2 py-1 flex gap-2 items-center justify-center rounded-4xl glass-btn-rounded">
                <img src={bluedot} alt="" aria-hidden="true" />
                <span className="font-light text-sm tracking-widest sm:text-base">
                  Projects
                </span>
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-[64px] lg:leading-[1.1]"
          >
            Our Featured <span className="italic">Projects</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl w-full sm:w-3/4 lg:w-1/2 opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            quisquam deleniti vitae.
          </p>

          {/* CTA */}
          <a
            className="all-projects_cta flex justify-center items-center gap-2 mt-4 w-[160px] h-[40px] sm:w-[182px] sm:h-[42px] border-2 rounded-4xl"
            href="/projects"
            aria-label="See all projects"
          >
            <p className="text-base sm:text-lg lg:text-xl">
              See All<span className="italic ml-1">Projects</span>
            </p>
            <img
              src={arrowType1}
              alt=""
              className="h-4 p-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Cards grid */}
        <div className="projects-list-container grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
          {CARDS.map((c) => (
            <article
              key={c.id}
              className="project-card relative w-full rounded-lg"
            >
              {/* Image */}
              <img
                src={c.img}
                alt="Project Thumbnail"
                className="w-full rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                loading="lazy"
                decoding="async"
              />

              {/* Info bar */}
              <div className="project-info glass-card-border absolute w-4/5 h-[44px] left-1/2 -translate-x-1/2 bottom-6 p-3 flex justify-between items-center transition-colors duration-300 ease-in-out">
                <div className="project-info__text flex items-baseline gap-4">
                  <div className="project-name text-sm sm:text-base lg:text-xl italic editorial-font font-extralight tracking-wide">
                    {c.name}
                  </div>
                  <div className="project-type text-[10px] sm:text-[11px] lg:text-[12px] font-extralight tracking-wide">
                    {c.type}
                  </div>
                </div>

                <div className="project-cta">
                  <div className="arrow-container w-6 h-6 border rounded-full flex justify-center items-center ml-4 sm:ml-6 relative overflow-hidden">
                    <div className="arrow-track flex gap-4 h-6 p-[7px] absolute left-[-27px] transition-all duration-300 ease-in-out">
                      <img
                        src={arrowType1}
                        alt=""
                        className="rotate-45 h-2.5 w-2.5"
                        aria-hidden="true"
                      />
                      <img
                        src={arrowType1}
                        alt=""
                        className="rotate-45 h-2.5 w-2.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
