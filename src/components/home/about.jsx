/**
 * File: src/components/home/about.jsx
 * Role: About section (3 breakpoints: phone, tablet, desktop)
 */
import React from "react";
import AboutBG from "./../../assets/SVGs/BlueLine.svg";
import SanmukhImg from "./../../assets/Sanmukh.webp";
import LaventImg from "./../../assets/Lavent.webp";

export default function About() {
  return (
    <section
      className="scroll-mt-20"
      id="about"
      aria-labelledby="about-heading"
    >
      {/* Decorative background */}
      <div className="about-bg relative" aria-hidden="true">
        <img
          src={AboutBG}
          alt=""
          className="absolute w-dvw"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="wrapper">
        <div className="divider about-divider-top" aria-hidden="true"></div>

        {/* Layout: column on phone+tablet, row on desktop */}
        <div className="flex flex-col-reverse gap-8 my-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Text content */}
          <div className="about-section_content w-full lg:w-1/2">
            <p className="mb-3 text-lg sm:text-xl opacity-50">
              About Us –{" "}
              <span className="italic editorial-font">GB Creative Lab</span>
            </p>
            <h2
              id="about-heading"
              className="mb-4 text-3xl sm:text-4xl lg:text-5xl w-3/4 leading-16"
            >
              Design Rooted in Real{" "}
              <span className="italic editorial-font"> Insights</span>
            </h2>
            <p className="text-sm sm:text-[15px] lg:text-[17px] leading-6 opacity-80">
              GB Creative-Lab was built on a simple idea: strategy and
              creativity work best when they work together.
              <br />
              <br />
              Founded by two professionals with complementary strengths: one
              rooted in business strategy and European retail experience, the
              other in design and brand creation, we bring both perspectives
              into every project.
              <br />
              <br />
              By combining real-world insight with thoughtful creative
              execution, we build brands that feel authentic, intentional, and
              effective. Our process blends strategy, visual identity, and
              hands-on production to ensure every outcome is meaningful and
              results-driven.
              <br />
              <br />
              GB Creative-Lab exists to help brands grow with purpose, clarity,
              and character.
            </p>
          </div>

          {/* Image */}
          {/* CSS index.css */}
          <div className="image-container relative max-h-[520px]">
            <figure className="about-section-image max-w-[360px] max-h-[360px] w-3/5 p-2 glass-card-border rounded-[16px] about-cover-img overflow-hidden absolute">
              <img
                src={LaventImg}
                alt="Studio preview"
                className="w-full rounded-[12px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="about-section-image max-w-[360px] md:max-h-[360px] w-3/5 p-2 glass-card-border rounded-[16px] about-cover-img overflow-hidden absolute">
              <img
                src={SanmukhImg}
                alt="Studio preview"
                className="w-full rounded-[12px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>

        <div className="divider about-divider-bottom" aria-hidden="true"></div>
      </div>
    </section>
  );
}
