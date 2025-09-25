/**
 * File: src/pages/homepage.jsx
 * Role: Home page composer (sections)
 */
import React from 'react'
import HeroSection from '../components/home/hero_section.jsx'
import AboutSection from '../components/home/about.jsx'
import ServicesSection from '../components/home/services.jsx'
import ProjectsSection from '../components/home/projects.jsx'
import ProcessSection from '../components/home/process.jsx'
import ContactSection from '../components/home/contact.jsx'

export default function Homepage() {
  return (
    <div className="text-2xl page_container page-container">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
    </div>
  )
}
