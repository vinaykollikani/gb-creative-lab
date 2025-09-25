/**
 * File: src/components/contactsection.jsx
 * Role: Contact info + form (responsive: phone+tablet stack, desktop split)
 */
import React from 'react'
import bluedot from './../../assets/Blue_dot.svg'
import MailSVG from './../../assets/MailSVG.svg'
import CallSVG from './../../assets/CallSVG.svg'
import LocationSVG from './../../assets/LocationSVG.svg'
import ArrowSVG from './../../assets/Arrow.svg'

export default function ContactSection() {
  return (
    <section
      className="contact-section scroll-mt-20"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="wrapper">
        <div className="divider contact-blue" aria-hidden="true"></div>

        {/* Layout: column by default, row on desktop */}
        <div className="flex flex-col gap-10 mt-16 items-stretch lg:flex-row lg:gap-6">
          {/* Left: details */}
          <div className="contact-section-container w-full flex flex-col lg:w-1/2">
            <div className="contact-details mb-8">
              <div className="relative rounded-4xl w-fit h-fit mb-4">
                <span className="glass-btn-rounded-ba"></span>
                <span className="px-2 py-1 w-fit flex gap-2 items-center justify-center rounded-4xl glass-btn-rounded">
                  <img src={bluedot} alt="" aria-hidden="true" />
                  <span className="font-light text-sm sm:text-base">Contact</span>
                </span>
              </div>

              <h2
                id="contact-heading"
                className="mb-3 text-3xl sm:text-4xl lg:text-5xl"
              >
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg lg:text-xl opacity-75">
                Lorem ipsum dolor sit amet consectetur. Egestas quis faucibus
                lorem commodo mauris.
              </p>
            </div>

            {/* Contact list */}
            <ul className="w-full flex flex-col gap-4 justify-center flex-1">
              {/* Email */}
              <li className="w-full h-[72px] flex items-center justify-between rounded-xl px-4 py-1 text-white glass-card-border contact-form-bg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 p-2 rounded-lg glass-effect flex items-center justify-center">
                    <img src={MailSVG} alt="" className="w-full" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-base sm:text-lg">Email Us</span>
                    <span className="text-sm text-gray-400 -mt-1">
                      sanmukhsai7@gmail.com
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:sanmukhsai7@gmail.com"
                  className="flex items-center justify-center w-9 h-9 p-2.5 glass-effect rounded-full cursor-pointer hover-effect"
                  aria-label="Send email"
                >
                  <img src={ArrowSVG} alt="" className="w-5" aria-hidden="true" />
                </a>
              </li>

              {/* Phone */}
              <li className="w-full h-[72px] flex items-center justify-between rounded-xl px-4 py-1 text-white shadow-lg glass-card-border contact-form-bg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 p-2 rounded-lg glass-effect flex items-center justify-center">
                    <img src={CallSVG} alt="" className="w-full" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-base sm:text-lg">Call Us</span>
                    <span className="text-sm text-gray-400 -mt-1">
                      +91 98765 43210
                    </span>
                  </div>
                </div>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center w-9 h-9 p-2.5 glass-effect rounded-full cursor-pointer hover-effect"
                  aria-label="Call us"
                >
                  <img src={ArrowSVG} alt="" className="w-5" aria-hidden="true" />
                </a>
              </li>

              {/* Location */}
              <li className="w-full h-[72px] flex items-center justify-between rounded-xl px-4 py-1 text-white shadow-lg glass-card-border contact-form-bg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 p-2 rounded-lg glass-effect flex items-center justify-center">
                    <img
                      src={LocationSVG}
                      alt=""
                      className="h-full"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-base sm:text-lg">Visit Us</span>
                    <span className="text-sm text-gray-400 -mt-1">
                      Bhubaneswar, Odisha, India
                    </span>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Bhubaneswar,Odisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 p-2.5 glass-effect rounded-full cursor-pointer hover-effect"
                  aria-label="View location on map"
                >
                  <img src={ArrowSVG} alt="" className="w-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <form
            className="w-full glass-card-border contact-form-bg text-white shadow-lg p-4 flex flex-col gap-3 lg:w-1/2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="contact-name" className="sr-only">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Name"
              className="w-full px-3 py-3 glass-card-border contact-form-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-[16px]"
              required
            />

            <label htmlFor="contact-email" className="sr-only">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-3 glass-card-border contact-form-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-[16px]"
              required
            />

            <label htmlFor="contact-phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-3 glass-card-border contact-form-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-[16px]"
            />

            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full px-3 py-3 glass-card-border contact-form-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-base sm:text-[16px] flex-1 min-h-[120px]"
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200 text-base sm:text-[16px] mt-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
