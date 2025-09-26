/**
 * File: src/components/home/hero_section.jsx
 * Role: Hero / intro section (3 breakpoints: phone, tablet, desktop)
 */
import React from 'react'
import LandingPageBG from './../../assets/HomeBg.svg'

export default function HeroSection() {
  return (
    <section className="page-container relative" aria-label="Hero">
      {/* Decorative BG */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={LandingPageBG}
          alt=""
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      <div className="home-hero_section wrapper flex items-center">
        <header className="w-full">
          {/* font-size changes only: phone → tablet → desktop */}
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-7xl w-full lg:w-[60%]">
            Lorem ipsum dolor sit amet
            <span className="italic editorial-font hero-heading-span"> consectetur</span>
          </h1>

          <p className="mb-5 text-base sm:text-lg lg:text-xl">
            Dapibus dolor at donec eu euismod et lectus ac.
          </p>

          <button className="glass-btn" type="button">
            Book A Call
            <span className="glass-hover"></span>
          </button>
        </header>
      </div>
    </section>
  )
}
