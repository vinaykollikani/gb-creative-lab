/**
 * File: src/components/servicessection.jsx
 * Role: Services section (3 breakpoints: phone, tablet, desktop)
 */
import React from "react";
import ServicesIcon1 from "./../../assets/SVGs/ServicesIcon1.svg";
import bluedot from "./../../assets/SVGs/Blue_dot.svg";
import ServicesCover from "./../../assets/ServicesCover.webp";
{
  /* Example: Services Data */
}
const services = [
  {
    id: 1,
    title: "Brand Strategy & Positioning",
    description:
      "We build strong brand foundations through insight-led storytelling, naming, and positioning, helping your business stand out with clarity and connect with the right audience.",
    icon: ServicesIcon1,
  },
  {
    id: 2,
    title: "Visual Identity & Design",
    description:
      "We create timeless visual systems, logos, colors, and style guides that define your brand and make it instantly recognizable.",
    icon: ServicesIcon1,
  },
  {
    id: 3,
    title: "Packaging & Label Design",
    description:
      "From concept to shelf, we craft packaging that tells your story and captures consumer attention with design that sells.",
    icon: ServicesIcon1,
  },
  {
    id: 4,
    title: "Production & Digital Execution",
    description:
      "Whether it’s print, packaging, or digital creatives, we manage the full execution process, ensuring every output meets brand standards and delivers flawlessly.",
    icon: ServicesIcon1,
  },
];

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
            src={ServicesCover}
            alt="Service preview"
            className="w-full h-[220px] rounded-[12px] object-cover sm:h-[280px] lg:h-[360px] lg:w-1/2"
            loading="lazy"
            decoding="async"
          />

          {/* Content */}
          <div className="services-section_content w-full flex flex-col items-start justify-start lg:w-1/2">
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
              className=" text-3xl sm:text-4xl lg:text-[48px]"
            >
              Our <span className="italic editorial-font"> Solutions</span>
            </h2>

            {/* Description */}
            <div className="opacity-60 text-base sm:text-lg lg:text-[20px]">
              <p className="text-sm sm:text-[15px] lg:text-[16px] leading-6 opacity-80">
                A creative partner that turns brand thinking into refined,
                ready-to-launch identities.
                <br />
                <br />
                Uniting strategy and design to build brands that feel clear,
                consistent, and truly compelling.
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
          {services.map((service) => (
            <li key={service.id} className="reusable-card blur-effect">
              <div className="card-header flex items-center gap-4">
                <img src={service.icon} alt={`${service.title} Icon`} />
                <h3 className="card-title text-xl sm:text-2xl lg:text-[28px]">
                  {service.title}
                </h3>
              </div>

              <div className="card-divider" aria-hidden="true"></div>

              <p className="card-description text-sm sm:text-base lg:text-[14px] opacity-50">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
