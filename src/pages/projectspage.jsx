import React from "react";
import LandingPageBG from "./../assets/HomeBg.svg";
import ProjectShowcase from "../components/projectshowcase";
const cover1 = "https://images.unsplash.com/photo-1523275335684-37898b6baf30";
const cover2 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f";
const cover3 = "https://images.unsplash.com/photo-1491553895911-0055eca6402d";

const gallery = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
];

function projectspage() {
  return (
    <>
            {/* Background */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src={LandingPageBG}
            alt=""
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
      <section className="page-container relative" aria-label="Hero">


        <div className="projects-hero_section wrapper flex items-center justify-center mt-16 lg:mt-24 max-h-[50vh]">
          <header className="w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-medium mb-4 lg:mb-7 text-center">
              Our featured
              <span className="italic editorial-font hero-heading-span"> Projects</span>
            </h1>

            <p className="mx-auto text-center text-sm sm:text-base lg:text-xl text-[rgba(238,238,238,0.75)] max-w-[90%] sm:max-w-[80%] lg:max-w-[66%]">
              Lorem ipsum dolor sit amet consectetur. Egestas quis faucibus
              lorem commodo mauris.
            </p>
          </header>
        </div>
      </section>

      <section>
        <ProjectShowcase
          title="Viva Ethnics"
          type="Packaging"
          summary="Sample test project"
          coverSrc={cover1}
          gallery={gallery}
        />
      </section>
    </>
  );
}

export default projectspage;
