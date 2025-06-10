import React from "react"
import Image from "next/image"
import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa"

const skills = [
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "GitHub", category: "tools" },
  { name: "MongoDB", category: "database" },
  { name: "Firebase", category: "database" },
  { name: "AI Chatbots", category: "tools" },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-16 pb-32 bg-white dark:bg-stone-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center">
          <h1 className="mb-12 text-center font-bold text-4xl">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
          </h1>

        </div>

        {/* Change this flex container from row to column layout */}
        <div className="flex flex-col gap-12 mt-10">
          {/* About Me Content */}
          <div className="w-full">
            <div className="bg-white dark:bg-stone-800 rounded-xl shadow-lg p-6 md:p-8 mb-8 transform transition-all duration-300 hover:shadow-xl">
              {/* Who I Am section content */}
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white inline-flex items-center">
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </span>
                Who I Am
              </h2>
              <div className="text-lg space-y-6 text-gray-600 dark:text-stone-300 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-stone-700 dark:to-stone-700 p-4 rounded-lg border-l-4 border-teal-500 shadow-sm">
                <p className="">
                  Hi, I&apos;m Umar, a <span className="font-bold text-teal-500">passionate</span> and{" "}
                  <span className="font-bold text-teal-500">solution-driven</span> software engineer with{" "}
                  <span className="font-bold text-teal-500">2+ years</span> of experience crafting
                  performant web applications and scalable software solutions.
                </p>

                <p>
                  I believe in{" "}
                  <span className="font-bold text-teal-500 not-italic">continuous growth</span>,{" "}
                  <span className="font-bold text-teal-500 not-italic">creative problem-solving</span>,
                  and <span className="font-bold text-teal-500 not-italic">pushing technological boundaries </span>
                  to build impactful solutions.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-stone-800 rounded-xl shadow-lg p-6 md:p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white inline-flex items-center">
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </span>
                Education
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-stone-700 dark:to-stone-700 p-4 rounded-lg border-l-4 border-teal-500 shadow-sm">
                  <h4 className="font-bold text-teal-500 text-lg">BS in Computer Science</h4>
                  <p className="text-gray-600 dark:text-stone-300 flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Superior University | 2021 - 2025
                  </p>
                  <p className="text-gray-600 dark:text-stone-300  mt-2 pl-6"> Graduated with specialization in Web Development and Software Engineering</p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-stone-700 dark:to-stone-700 p-4 rounded-lg border-l-4 border-teal-500 shadow-sm">
                  <h4 className="font-bold text-teal-500 text-lg">Intermediate in Computer Science</h4>
                  <p className="text-gray-600 dark:text-stone-300 flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    concordia College | 2019 - 2021
                  </p>
                  <p className="text-gray-600 dark:text-stone-300  mt-2 pl-6">    Completed with honors, mastering core programming concepts and computer fundamentals                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Skills & Technologies
            </h2>

            <div className="space-y-8">
              {/* Frontend Skills */}
              <div>
                <div className="flex items-center mb-4">
                  <FaCode className="text-teal-500 mr-3" size={20} />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter(skill => skill.category === "frontend")
                    .map((skill, idx) => (
                      <div
                        key={idx}
                        className="
                          cursor-pointer
                          bg-white dark:bg-stone-800
                          border-2
                          border-teal-500
                          text-teal-500 dark:text-teal-400
                          px-5
                          py-2
                          rounded-lg
                          font-semibold
                          shadow-lg
                          shadow-teal-300/20 dark:shadow-teal-400/20
                          transform
                          transition-all
                          duration-300
                          ease-in-out
                          hover:scale-110
                          hover:-translate-y-1
                          hover:shadow-2xl
                          hover:shadow-teal-500/30
                          hover:bg-teal-500
                          hover:text-white
                          dark:hover:bg-teal-500
                          dark:hover:text-white
                          relative
                          group
                        "
                      >
                        {skill.name}
                      </div>
                    ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <div className="flex items-center mb-4">
                  <FaServer className="text-teal-500 mr-3" size={20} />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter(skill => skill.category === "backend")
                    .map((skill, idx) => (
                      <div
                        key={idx}
                        className="
                          cursor-pointer
                          bg-white dark:bg-stone-800
                          border-2
                          border-teal-500
                          text-teal-500 dark:text-teal-400
                          px-5
                          py-2
                          rounded-lg
                          font-semibold
                          shadow-lg
                          shadow-teal-300/20 dark:shadow-teal-400/20
                          transform
                          transition-all
                          duration-300
                          ease-in-out
                          hover:scale-110
                          hover:-translate-y-1
                          hover:shadow-2xl
                          hover:shadow-teal-500/30
                          hover:bg-teal-500
                          hover:text-white
                          dark:hover:bg-teal-500
                          dark:hover:text-white
                          relative
                          group
                        "
                      >
                        {skill.name}
                      </div>
                    ))}
                </div>
              </div>

              {/* Database Skills */}
              <div>
                <div className="flex items-center mb-4">
                  <FaDatabase className="text-teal-500 mr-3" size={20} />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Database</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter(skill => skill.category === "database")
                    .map((skill, idx) => (
                      <div
                        key={idx}
                        className="
                          cursor-pointer
                          bg-white dark:bg-stone-800
                          border-2
                          border-teal-500
                          text-teal-500 dark:text-teal-400
                          px-5
                          py-2
                          rounded-lg
                          font-semibold
                          shadow-lg
                          shadow-teal-300/20 dark:shadow-teal-400/20
                          transform
                          transition-all
                          duration-300
                          ease-in-out
                          hover:scale-110
                          hover:-translate-y-1
                          hover:shadow-2xl
                          hover:shadow-teal-500/30
                          hover:bg-teal-500
                          hover:text-white
                          dark:hover:bg-teal-500
                          dark:hover:text-white
                          relative
                          group
                        "
                      >
                        {skill.name}
                      </div>
                    ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <div className="flex items-center mb-4">
                  <FaTools className="text-teal-500 mr-3" size={20} />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter(skill => skill.category === "tools")
                    .map((skill, idx) => (
                      <div
                        key={idx}
                        className="
                          cursor-pointer
                          bg-white dark:bg-stone-800
                          border-2
                          border-teal-500
                          text-teal-500 dark:text-teal-400
                          px-5
                          py-2
                          rounded-lg
                          font-semibold
                          shadow-lg
                          shadow-teal-300/20 dark:shadow-teal-400/20
                          transform
                          transition-all
                          duration-300
                          ease-in-out
                          hover:scale-110
                          hover:-translate-y-1
                          hover:shadow-2xl
                          hover:shadow-teal-500/30
                          hover:bg-teal-500
                          hover:text-white
                          dark:hover:bg-teal-500
                          dark:hover:text-white
                          relative
                          group
                        "
                      >
                        {skill.name}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection