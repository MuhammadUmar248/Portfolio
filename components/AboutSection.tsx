import React from "react"
import Image from "next/image"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "GitHub",
  "Mongo DB",
  "Firebase",
  "AI chatbot",
]

const AboutSection = () => {
  return (
    <section id="about" className="py-24 pb-32 bg-white dark:bg-stone-900 transition-colors duration-300">
      {/* Changed py-24 to py-24 pb-32 for extra bottom padding */}
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-center font-bold text-4xl text-gray-800 dark:text-white">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col md:flex-row gap-12 mt-16">
          {/* About Me Content - Left Column */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Get to know me!
            </h2>
            <div className="text-lg space-y-6 text-gray-600 dark:text-stone-300">
              <p>
                Hi, my name is Umar, and I am a{" "}
                <span className="font-bold text-gray-800 dark:text-white">highly motivated</span> and{" "}
                <span className="font-bold text-gray-800 dark:text-white">dedicated</span> software engineer with{" "}
                <span className="font-bold text-gray-800 dark:text-white">3 years of experience</span> in web development and software solutions.
              </p>
              <p>
                I completed my graduation from{" "}
                <span className="font-bold text-gray-800 dark:text-white">Superior University</span> in{" "}
                <span className="font-bold text-gray-800 dark:text-white">2025</span>, with a degree in{" "}
                <span className="font-bold text-gray-800 dark:text-white">Computer Science</span>.
              </p>
              <p>
                Beyond tech, I enjoy staying active through{" "}
                <span className="font-bold text-gray-800 dark:text-white">sports</span>, exploring new ideas, and continually learning.
              </p>
              <p>
                I believe in{" "}
                <span className="font-bold text-teal-500">growth</span>,{" "}
                <span className="font-bold text-teal-500">creativity</span>, and{" "}
                <span className="font-bold text-teal-500">pushing boundaries</span>.
              </p>
            </div>
          </div>

          {/* Skills - Right Column */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              My Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
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
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection