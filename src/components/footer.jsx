/**
 * File: src/components/footer.jsx
 * Role: Footer (contentinfo) + social nav
 */
import React from "react";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-12 h-12 text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors duration-300"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M23,31H9c-4.4,0-8-3.6-8-8V9c0-4.4,3.6-8,8-8h14c4.4,0,8,3.6,8,8v14C31,27.4,27.4,31,23,31z"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="8" r="2" className="stroke-current" strokeWidth="1.5" />
    <rect
      x="7"
      y="13"
      width="4"
      height="12"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <path
      d="M20.5,13c-0.9,0-1.8,0.3-2.5,0.8V13h-4v12h4v-6.5c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5V25h4v-7.5C25,15,23,13,20.5,13z"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-12 h-12 text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors duration-300"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M23,31H9c-4.4,0-8-3.6-8-8V9c0-4.4,3.6-8,8-8h14c4.4,0,8,3.6,8,8v14C31,27.4,27.4,31,23,31z"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
    <path
      d="M26,16h-5v-2.8c0-0.7,0.5-1.2,1.2-1.2H25V7h-4c-2.8,0-5,2.2-5,5v4h-4v5h4v10h5V21h3L26,16z"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-12 h-12 text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors duration-300"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M23,31H9c-4.4,0-8-3.6-8-8V9c0-4.4,3.6-8,8-8h14c4.4,0,8,3.6,8,8v14C31,27.4,27.4,31,23,31z"
      className="stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
    <circle
      cx="16"
      cy="16"
      r="7"
      className="stroke-current"
      strokeWidth="1.5"
    />
    <circle cx="24" cy="7" r="1" className="stroke-current" strokeWidth="1.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="wrapper" role="contentinfo">
      <div className="divider footer-top-divider" aria-hidden="true"></div>

      <nav
        aria-label="Social links"
        className="flex gap-12 items-stretch justify-center mt-24"
      >
        <a href="http://www.linkedin.com" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <span className="border border-[#FFFFFF80]" aria-hidden="true"></span>
        <a href="http://www.instagram.com" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <span className="border border-[#FFFFFF80]" aria-hidden="true"></span>
        <a href="http://www.facebook.com" aria-label="Facebook">
          <FacebookIcon />
        </a>
      </nav>

      <a
        href="mailto:testmail@gmail.com"
        className="mx-auto block text-center my-14 text-[#FFFFFF80] underline"
      >
        testmail@gmail.com
      </a>

      <div className="divider footer-bottom-divider" aria-hidden="true"></div>
      <p className="my-14 mx-auto text-center">
        All rights reserved © GBCreativeLab
      </p>
    </footer>
  );
}
