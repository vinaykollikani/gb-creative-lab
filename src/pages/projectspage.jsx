// ✅ 1. Import 'useEffect'
import React, { useEffect } from "react";
// ✅ 2. Import 'useLocation' to read the URL
import { useLocation } from "react-router-dom";

import LandingPageBG from "./../assets/SVGs/HomeBg.svg";
import ProjectShowcase from "../components/projectshowcase";

// ... (All your asset imports: VivaCover, EsoraImage1, etc.) ...
// ... (All your gallery arrays: vivaGallery, esoraGallery, etc.) ...
// ... (Your full PROJECTS array) ...

// (Paste all your imports and data arrays here)

// Viva Project Assets
import VivaCover from "../assets/Viva/VivaCover.webp";
import VivaImage1 from "../assets/Viva/VivaImage1.webp";
import VivaImage2 from "../assets/Viva/VivaImage2.webp";
import VivaImage3 from "../assets/Viva/VivaImage3.webp";
import VivaImage4 from "../assets/Viva/VivaImage4.webp";

// Esora Project Assets
import EsoraCover from "../assets/Esora/EsoraCover.webp";
import EsoraImage1 from "../assets/Esora/EsoraImage1.webp";
import EsoraImage2 from "../assets/Esora/EsoraImage2.webp";
import EsoraImage3 from "../assets/Esora/EsoraImage3.webp";
import EsoraImage4 from "../assets/Esora/EsoraImage4.webp";

// Regulate Project Assets
import RegulateCover from "../assets/RegulateSugar/RegulateCover.webp";
import RegulateImage1 from "../assets/RegulateSugar/RegulateImage1.webp";
import RegulateImage2 from "../assets/RegulateSugar/RegulateImage2.webp";
import RegulateImage3 from "../assets/RegulateSugar/RegulateImage3.webp";
import RegulateImage4 from "../assets/RegulateSugar/RegulateImage4.webp";

// Baklava Project Assets
import BaklavaCover from "../assets/Baklava/BaklavaCover.webp";
import BaklavaImage1 from "../assets/Baklava/BaklavaImage1.webp";
import BaklavaImage2 from "../assets/Baklava/BaklavaImage2.webp";
import BaklavaImage3 from "../assets/Baklava/BaklavaImage3.webp";
import BaklavaImage4 from "../assets/Baklava/BaklavaImage4.webp";

const vivaGallery = [VivaImage1, VivaImage2, VivaImage3, VivaImage4];
const esoraGallery = [EsoraImage1, EsoraImage2, EsoraImage3, EsoraImage4];
const regulateGallery = [
  RegulateImage1,
  RegulateImage2,
  RegulateImage3,
  RegulateImage4,
];
const baklavaGallery = [
  BaklavaImage1,
  BaklavaImage2,
  BaklavaImage3,
  BaklavaImage4,
];

// ✅ All projects data here
const PROJECTS = [
  {
    id: "viva",
    title: "Viva Ethnics",
    type: "Logo Design",
    summary: `
      The VIVA Ethnics logo was designed to embody elegance, confidence, and modern femininity, qualities central to the brand’s identity as a contemporary ethnic wear label. The design fuses classic serif typography with flowing, graceful letterforms, reflecting a perfect balance between tradition and modernity.
      <br /> <br />
      The dual-color presentation in deep wine and soft blush evokes sophistication and cultural richness, ensuring strong visibility across both light and dark backgrounds. The interplay of fine curves and bold structure conveys the brand’s essence: timeless ethnic artistry presented through a refined, modern lens.
    `,
    coverSrc: VivaCover,
    gallery: vivaGallery,
  },
  {
    id: "baklava",
    title: "Baklava",
    type: "Branding",
    summary: `
      This packaging design for premium Greek Baklava reflects authenticity, craftsmanship, and cultural heritage. The rich teal background paired with elegant typography conveys freshness and premium quality, while the minimal layout highlights the handmade essence of the product. Inspired by Pontic Greek traditions, the design balances modern simplicity with cultural storytelling, creating an eye-catching, trustworthy presence on the shelf.
    `,
    coverSrc: BaklavaCover,
    gallery: baklavaGallery,
  },
  {
    id: "esora",
    title: "Esora",
    type: "Logo & Packaging Design",
    summary: `
      The ESORA Skin identity blends sophistication and natural elegance to reflect the brand’s commitment to conscious beauty. The refined serif typography paired with an organic leaf accent symbolizes purity, balance, and renewal. Minimal color tones and clean packaging elevate the sense of luxury while maintaining a calm, modern aesthetic. The result is a timeless visual identity that embodies skin wellness and effortless refinement.
    `,
    coverSrc: EsoraCover,
    gallery: esoraGallery,
  },
  {
    id: "regulate",
    title: "Regulate Sugar",
    type: "Packaging",
    summary: `
      This packaging design for Regulate Sugar reflects energy, freshness, and functionality. The bright lemon-yellow palette evokes vitality and hydration, while clean typography communicates clarity and trust. Minimal iconography highlights key benefits such as smart hydration, electrolyte balance, and blood sugar management, ensuring both shelf appeal and scientific credibility. The result is a vibrant, modern design that balances health-focused purpose with refreshing visual energy.
    `,
    coverSrc: RegulateCover,
    gallery: regulateGallery,
  },
];

export default function ProjectsPage() {
  // ✅ 3. Get the current location object
  const location = useLocation();

  // ✅ 4. Add the useEffect hook to handle scrolling
  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #esora)
    const hash = location.hash;

    if (hash) {
      // We use a small timeout to ensure all <ProjectShowcase> components
      // have finished rendering before we try to find the ID.
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          // If the element exists, scroll to it smoothly
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms delay
    }
    // Run this effect every time the location (URL) changes
  }, [location]);

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

      {/* Hero Section */}
      <section className="page-container relative" aria-label="Hero">
        <div className="projects-hero_section wrapper flex items-center justify-center mt-16 lg:mt-24 max-h-[50vh]">
          <header className="w-full text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-medium mb-4 lg:mb-7">
              Our featured
              <span className="italic editorial-font hero-heading-span">
                {" "}
                Projects
              </span>
            </h1>
            <p className="mx-auto text-sm sm:text-base lg:text-xl text-[rgba(238,238,238,0.75)] max-w-[90%] sm:max-w-[80%] lg:max-w-[66%]">
              Lorem ipsum dolor sit amet consectetur. Egestas quis faucibus
              lorem commodo mauris.
            </p>
          </header>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        {PROJECTS.map((project, index) => (
          <ProjectShowcase
            key={index}
            id={project.id} // This ID is what the useEffect is looking for
            title={project.title}
            type={project.type}
            summary={project.summary}
            coverSrc={project.coverSrc}
            gallery={project.gallery}
          />
        ))}
      </section>
    </>
  );
}