"use client"

import React, { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-black dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link 
              to="home"
              smooth={true}
              duration={500}
              offset={-80} // Added offset to account for navbar height
              className="cursor-pointer"
            >
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-black dark:text-white">Umar shafeeq</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 dark:text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  smooth={true}
                  duration={500}
                  offset={-80} // Added offset to account for navbar height
                  spy={true}
                  activeClass="active"
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer transition-colors duration-300"
                  onClick={() => setNavbar(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Toggle Button */}
              <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                className="ml-4 p-2 rounded-full transition duration-300 bg-gray-200 dark:bg-stone-700 hover:bg-gray-300 dark:hover:bg-stone-600"
              >
                {currentTheme === "dark" ? (
                  <RiSunLine className="text-white" size={22} />
                ) : (
                  <RiMoonFill className="text-black" size={22} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}