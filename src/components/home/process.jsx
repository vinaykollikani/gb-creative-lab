import React from "react";
import bluedot from "./../../assets/SVGs/Blue_dot.svg";
import ServicesIcon1 from "./../../assets/SVGs/ServicesIcon1.svg";
import ServicesIcon2 from "./../../assets/SVGs/ServicesIcon1.svg";
import ServicesIcon3 from "./../../assets/SVGs/ServicesIcon1.svg";
import ProcessCover from "./../../assets/ProcessCover.webp";

const STEPS = [
  {
    id: 1,
    title: "Discovery & Research",
    description:
      "We uncover brand insights and goals to set a clear creative direction from the start.",
    icon: ServicesIcon1,
  },
  {
    id: 2,
    title: "Design & Develop",
    description:
      "Translating strategy into creative solutions through collaborative concept development and design refinement.",
    icon: ServicesIcon2,
  },
  {
    id: 3,
    title: "Deliver & Launch",
    description:
      "Final production, file preparation, and launch support, ensuring brand consistency across every platform.",
    icon: ServicesIcon3,
  },
];

export default function ProcessSection() {
  return (
    <section
      className="wrapper process-section flex flex-col gap-8 mt-12 lg:flex-row"
      aria-labelledby="process-heading"
    >
      {/* Left: content */}
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
        <h2
          id="process-heading"
          className="mb-2 text-3xl sm:text-4xl lg:text-[48px]"
        >
          How We <span className="italic editorial-font">Create</span>
        </h2>
        <p className="text-base sm:text-[14px] lg:text-[16px] opacity-75 w-2/3">
          We don’t just create; we guide you through a seamless creative
          journey.
        </p>

        {/* CTA */}
        <button className="glass-btn mt-4" type="button">
          Book A Call
          <span className="glass-hover"></span>
        </button>

        {/* Steps */}
        <ol className="process-steps flex flex-col gap-3 mt-6">
          {STEPS.map((step) => (
            <li key={step.id} className="reusable-card blur-effect">
              {/* Card header */}
              <div className="card-header flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={step.icon} alt={`${step.title} Icon`} />
                  <h3 className="card-title text-xl sm:text-2xl lg:text-[28px]">
                    {step.title}
                  </h3>
                </div>

                {/* Step number */}
                <span className="card-step relative w-8 sm:w-9 lg:w-10 aspect-square flex items-center justify-center rounded-full">
                  {step.id}
                </span>
              </div>

              {/* Divider */}
              <div className="card-divider" aria-hidden="true"></div>

              {/* Description */}
              <p className="card-description text-sm sm:text-base lg:text-[14px] opacity-50">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Right: media section */}
      <figure className="process-section-media w-full lg:w-1/2">
        <img
          src={ProcessCover}
          alt=""
          srcset=""
          className="w-full h-full object-cover glass-card-border blur-effect"
        />
      </figure>
    </section>
  );
}
