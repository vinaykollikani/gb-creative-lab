/**
 * File: src/components/ProjectsSection.jsx
 * Role: Responsive projects grid (mobile, tablet, desktop)
 */
import React from "react";
// ✅ 1. Import 'Link' from react-router-dom
import { Link } from "react-router-dom";
import bluedot from "./../../assets/SVGs/Blue_dot.svg";
import arrowType1 from "./../../assets/SVGs/Arrow.svg";

// Project cover images
import projectImage1 from "./../../assets/ESORA/EsoraCover.webp";
import projectImage2 from "./../../assets/RegulateSugar/RegulateCover.webp";
import projectImage3 from "./../../assets/Baklava/BaklavaCover.webp";
import projectImage4 from "./../../assets/Viva/VivaCover.webp";

// Project data
const CARDS = [
  {
    id: 1,
    name: "Esora",
    type: "Logo & Packaging Design",
    img: projectImage1,
    link: "/projects#esora",
  },
  {
    id: 2,
    name: "Regulate Sugar",
    type: "Packaging Design",
    img: projectImage2,
    link: "/projects#regulate",
  },
  {
    id: 3,
    name: "Baklava",
    type: "Branding",
    img: projectImage3,
    link: "/projects#baklava",
  },
  {
    id: 4,
    name: "Viva Ethnics",
    type: "Logo Design",
    img: projectImage4,
    link: "/projects#viva",
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="page-container mt-12 scroll-mt-20"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="wrapper">
        {/* Section Header */}
        <div className="projects-section_content flex flex-col items-center gap-3 text-center">
          {/* ... Tag ... */}
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

          {/* ... Heading ... */}
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-[64px] lg:leading-[1.1]"
          >
            Our Featured{" "}
            <span className="italic hero-heading-span editorial-font">
              Projects
            </span>
          </h2>

          {/* ... Description ... */}
          <p className="text-base sm:text-lg lg:text-xl w-full sm:w-3/4 lg:w-1/2 opacity-60">
            A closer look at brands we’ve helped <br />
            shape, design, and bring to life.
          </p>

          {/* ✅ 2. Changed <a> to <Link> and 'href' to 'to' */}
          <Link
            to="/projects"
            className="all-projects_cta flex justify-center items-center gap-2 mt-4 w-[180px] px-2 h-[40px] sm:w-[200px] sm:h-[42px] border-2 rounded-4xl"
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
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="projects-list-container grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
          {CARDS.map((c) => (
            <article
              key={c.id}
              className="project-card relative w-full rounded-lg"
            >
              {/* Image */}
              <img
                src={c.img}
                alt={`${c.name} Project Thumbnail`}
                className="w-full h-[360px] rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                loading="lazy"
                decoding="async"
              />

              {/* ✅ 3. Changed <a> to <Link> and 'href' to 'to' */}
              <Link
                to={c.link}
                className="project-info glass-card-border absolute w-4/5 h-[44px] left-1/2 -translate-x-1/2 bottom-6 p-3 flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-white/10 "
                aria-label={`View ${c.name} project`}
              >
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
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}