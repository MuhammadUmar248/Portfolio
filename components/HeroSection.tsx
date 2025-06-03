"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"

const HeroSection = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {

    const handleScroll = () => {
      const currentY = window.scrollY
      setShowHeader(currentY < lastScrollY || currentY < 100)
      setLastScrollY(currentY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

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
            <a
              href="/My CV.pdf"
              download
              className="text-white font-semibold px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-md shadow hover:scale-105 transition-transform duration-200"
            >
              Download CV
            </a>

            <ScrollLink
              to="projects"
              smooth={true}
              duration={800} // Increased duration for smoother scroll
              offset={-80} // Better offset for header
              className="cursor-pointer text-teal-500 font-medium border shadow-teal-300/20 border-teal-500 px-6 py-3 rounded-md hover:bg-teal-500 hover:text-white transition"
              // Added easing function
              spy={true}
              hashSpy={true}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              View Projects
            </ScrollLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 w-full flex justify-center">
        <ScrollLink
          to="about"
          smooth
          duration={600}
          offset={-60}
          className="cursor-pointer group text-center"
          spy={true}
          hashSpy={true}
        >
          <div className="text-sm md:text-base text-gray-500 dark:text-gray-300">
            Scroll to explore
            <span className="block w-full h-1 mt-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full group-hover:scale-x-110 transition-transform duration-300"></span>
          </div>
        </ScrollLink>
      </div>
    </section>
  )
}

export default HeroSection