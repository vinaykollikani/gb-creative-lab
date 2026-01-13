/**
 * File: src/components/whyChoose.jsx
 * Role: Why Choose section (3 breakpoints: phone, tablet, desktop)
 */
import React from "react";
import OneFlow from "./../../assets/SVGs/OneFlow.svg";
import End2End from "./../../assets/SVGs/End2End.svg";
import Global from "./../../assets/SVGs/Global.svg";
import CostEfficient from "./../../assets/SVGs/CostEfficient.svg";
import bluedot from "./../../assets/SVGs/Blue_dot.svg";
{
  /* Example: Services Data */
}
const services = [
  {
    id: 1,
    description: "Strategy → Design → Production in one flow",
    icon: OneFlow,
  },
  {
    id: 2,
    description: "End-to-end support with clear structure",
    icon: End2End,
  },
  {
    id: 3,
    description: "Global perspective with local craftsmanship",
    icon: Global,
  },
  {
    id: 4,
    description: "Cost-efficient premium quality",
    icon: CostEfficient,
  },
];

export default function whyChooseSection() {
  return (
    <section
      className="page-container mt-20 scroll-mt-20"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="wrapper">
        {/* Top content: image + text */}
        <div className="services-content flex flex-col gap-6 mb-8 lg:flex-row lg:gap-8">
          {/* Content */}
          <div className="services-section_content w-full flex flex-col items-start justify-start lg:w-1/2">
            {/* Label */}
            <div className="relative rounded-4xl w-fit h-fit mb-3">
              <span className="glass-btn-rounded-ba"></span>
              <span className="px-2 py-1 flex gap-2 items-center justify-center rounded-4xl glass-btn-rounded">
                <img src={bluedot} alt="" aria-hidden="true" />
                <span className="font-light text-sm sm:text-base">
                  Why Choose Us
                </span>
              </span>
            </div>

            {/* Heading */}
            <h2
              id="services-heading"
              className=" text-3xl sm:text-4xl lg:text-[48px]"
            >
              What Sets Us <span className="italic editorial-font"> Apart</span>
            </h2>

            {/* Description */}
            <div className="opacity-60 text-base sm:text-lg lg:text-[20px]">
              <p className="text-sm sm:text-[15px] lg:text-[16px] leading-6 opacity-80">
                Because your brand deserves more than good design, it deserves
                intelligent creation.
              </p>
            </div>

            {/* CTA */}
            <button className="glass-btn mt-4" type="button">
              Book A Call
              <span className="glass-hover"></span>
            </button>
          </div>

          <ul className="services-list grid gap-4 grid-cols-2 lg:gap-[16px] lg:w-1/2 why-choose">
            {services.map((service) => (
              <li key={service.id} className="reusable-card blur-effect ">
                <div className="card-header flex items-center gap-4 justify-center ">
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className="h-[76px]"
                  />
                </div>

                <div className="card-divider" aria-hidden="true"></div>

                <p className="card-description text-sm sm:text-base lg:text-[12px] opacity-50 text-center">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>
  );
}
