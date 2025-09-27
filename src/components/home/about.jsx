/**
 * File: src/components/home/about.jsx
 * Role: About section (3 breakpoints: phone, tablet, desktop)
 */
import React from 'react'
import AboutBG from './../../assets/BlueLine.svg'

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
              About Us – <span className="italic editorial-font">GB Creative Lab</span>
            </p>
            <h2
              id="about-heading"
              className="mb-4 text-3xl sm:text-4xl lg:text-5xl"
            >
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod
            </p>
            <p className="mt-3 text-base sm:text-lg lg:text-2xl opacity-80">
              omnis error!
            </p>
          </div>

          {/* Image */}
          <figure className="about-section-image max-w-[420px] w-full p-4 glass-card-border rounded-[16px] about-cover-img overflow-hidden">
            <img
              src="https://picsum.photos/420/300"
              alt="Studio preview"
              className="w-full rounded-[12px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="divider about-divider-bottom" aria-hidden="true"></div>
      </div>
    </section>
  )
}
