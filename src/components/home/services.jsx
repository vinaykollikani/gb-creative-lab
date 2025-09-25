/**
 * File: src/components/servicessection.jsx
 * Role: Services section (3 breakpoints: phone, tablet, desktop)
 */
import React from 'react'
import ServicesIcon1 from './../../assets/ServicesIcon1.svg'
import bluedot from './../../assets/Blue_dot.svg'

export default function ServicesSection() {
  return (
    <section
      className="page-container mt-20 scroll-mt-20"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="wrapper">
        {/* Top content: image + text */}
        <div className="services-content flex flex-col gap-6 mb-8 lg:flex-row lg:gap-8">
          {/* Image */}
          <img
            src="https://picsum.photos/600/400"
            alt="Service preview"
            className="w-full h-[220px] rounded-[12px] object-cover sm:h-[280px] lg:h-[360px] lg:w-1/2"
            loading="lazy"
            decoding="async"
          />

          {/* Content */}
          <div className="services-section_content w-full flex flex-col items-start justify-between lg:w-1/2">
            {/* Label */}
            <div className="relative rounded-4xl w-fit h-fit mb-3">
              <span className="glass-btn-rounded-ba"></span>
              <span className="px-2 py-1 flex gap-2 items-center justify-center rounded-4xl glass-btn-rounded">
                <img src={bluedot} alt="" aria-hidden="true" />
                <span className="font-light text-sm sm:text-base">
                  Design Services
                </span>
              </span>
            </div>

            {/* Heading */}
            <h2
              id="services-heading"
              className="mb-4 text-3xl sm:text-4xl lg:text-[64px]"
            >
              Services
            </h2>

            {/* Description */}
            <div className="opacity-60 text-base sm:text-lg lg:text-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas quis faucibus
                lorem commodo mauris.
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur. Egestas quis faucibus
                lorem commodo mauris.
              </p>
            </div>

            {/* CTA */}
            <button className="glass-btn mt-4" type="button">
              Book A Call
              <span className="glass-hover"></span>
            </button>
          </div>
        </div>

        {/* Services list */}
        <ul className="services-list grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-[16px]">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="reusable-card">
              <div className="card-header flex items-center gap-4">
                <img src={ServicesIcon1} alt="Service Icon" />
                <h3 className="card-title text-xl sm:text-2xl lg:text-[32px]">
                  Services {n}
                </h3>
              </div>

              <div className="card-divider" aria-hidden="true"></div>

              <p className="card-description text-sm sm:text-base lg:text-[14px] opacity-50">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                totam repellendus quia, quibusdam tempore eum consectetur itaque
                quidem saepe.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
