"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"

const HeroSection = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setShowHeader(currentY < lastScrollY || currentY < 100)
      setLastScrollY(currentY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-24 transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:mx-8 gap-8 md:gap-12">
        {/* Left Column - Image */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px]">
            <Image
              src="/headshot.png"
              alt="Profile Image"
              fill
              className="object-cover rounded-full shadow-xl"
              style={{
                filter: "drop-shadow(0 15px 25px rgba(0, 0, 0, 0.25))",
                border: "4px solid rgba(255, 255, 255, 0.1)",
                objectPosition: "center 30%",
              }}
              priority
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-3/5 text-center md:text-left md:pr-12">
          <h1 className="text-4xl sm:text-5xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-6 md:mb-8">
            Hi, I&apos;m Umar!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 md:mb-8">
            I&apos;m a <span className="font-semibold text-teal-600 dark:text-teal-400">Software Engineer</span> and{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Web Developer</span> passionate about
            building engaging, high-performance web applications that solve real-world problems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              className="cursor-pointer text-white font-semibold px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-md shadow hover:scale-105 transition-all duration-200 flex items-center justify-center"
              spy={true}
              hashSpy={true}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              View Projects
            </ScrollLink>

            <div className="relative group">
              <button
                onClick={toggleMenu}
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
                className="text-teal-500 font-semibold border border-teal-500 px-6 py-3 rounded-md shadow hover:bg-teal-500 hover:text-white transition-all duration-200 flex items-center justify-center w-full sm:w-auto"
              >
                CV Options
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-2 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Universal Menu - works with both hover and click */}
              <div 
                className={`
                  absolute left-0  w-full sm:w-[calc(100%-0.5rem)]
                  rounded-md shadow-lg bg-white dark:bg-stone-800 
                  ring-1 ring-black ring-opacity-5 transition-all duration-200 
                  ${isMenuOpen ? 'scale-100' : 'scale-0'}
                  origin-top-left z-10
                `}
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <div className="py-1">
                  <a
                    href="/My CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white rounded-md mx-1 my-1 transition-colors duration-200"
                  >
                    View CV
                  </a>
                  <a
                    href="/My CV.pdf"
                    download
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white rounded-md mx-1 my-1 transition-colors duration-200"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection