/**
 * File: src/components/processsection.jsx
 * Role: Process steps (cards) — phone+tablet same layout; desktop split
 */
import React from 'react'
import bluedot from './../../assets/Blue_dot.svg'
import ServicesIcon1 from './../../assets/ServicesIcon1.svg'

const STEPS = [1, 2, 3]

export default function ProcessSection() {
  return (
    <section
      className="wrapper process-section flex flex-col gap-8 mt-12 lg:flex-row"
      aria-labelledby="process-heading"
    >
      {/* Left: content (stacks on phone/tablet, 1/2 on desktop) */}
      <div className="process-section-content w-full lg:w-1/2">
        {/* Tag */}
        <div className="relative rounded-4xl w-fit h-fit mb-3">
          <span className="glass-btn-rounded-ba"></span>
          <span className="px-2 py-1 w-fit flex gap-2 items-center justify-center rounded-4xl glass-btn-rounded">
            <img src={bluedot} alt="" aria-hidden="true" />
            <span className="font-light text-sm sm:text-base">Process</span>
          </span>
        </div>

        {/* Heading + intro */}
        <h2 id="process-heading" className="mb-2 text-3xl sm:text-4xl lg:text-[64px]">
          Process
        </h2>
        <p className="text-base sm:text-lg lg:text-xl opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat mollitia sunt maxime sequi.
        </p>

        {/* CTA */}
        <button className="glass-btn mt-4" type="button">
          Book A Call
          <span className="glass-hover"></span>
        </button>

        {/* Steps */}
        <ol className="process-steps flex flex-col gap-3 mt-6">
          {STEPS.map((n) => (
            <li key={n} className="reusable-card">
              {/* Card header */}
              <div className="card-header flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={ServicesIcon1} alt="Service Icon" />
                  <h3 className="card-title text-xl sm:text-2xl lg:text-[32px]">
                    Process
                  </h3>
                </div>

                {/* Step number */}
                <span className="card-step relative w-8 sm:w-9 lg:w-10 aspect-square flex items-center justify-center rounded-full">
                  {n}
                </span>
              </div>

              {/* Divider */}
              <div className="card-divider" aria-hidden="true"></div>

              {/* Description */}
              <p className="card-description text-sm sm:text-base lg:text-[14px] opacity-50">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit totam repellendus quia,
                quibusdam tempore eum consectetur itaque quidem saepe.
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Right: media (kept empty as in your original; appears on desktop) */}
      <div className="process-section-media w-full lg:w-1/2" aria-hidden="true"></div>
    </section>
  )
}
