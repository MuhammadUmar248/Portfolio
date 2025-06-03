import React from "react"
import Image from "next/image"

const skills = [
  {name: "HTML", category: "Frontend"},
  {name: "CSS", category: "Frontend"},
  {name: "JavaScript", category: "Frontend"},
  {name: "TypeScript", category: "Frontend"},
  {name: "React", category: "Frontend"},
  {name: "Next.js", category: "Fullstack"},
  {name: "Node.js", category: "Backend"},
  {name: "Python", category: "Backend"},
  {name: "Tailwind CSS", category: "Frontend"},
  {name: "GitHub", category: "Tools"},
  {name: "MongoDB", category: "Database"},
  {name: "Firebase", category: "Backend"},
  {name: "AI Chatbots", category: "AI"},
]

const AboutSection = () => {
  return (
    <section id="about" className="py-8 pb-32 bg-white dark:bg-stone-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-gray-800 dark:text-white">
            About Me
          </h1>
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 mt-16">
          {/* About Me Content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Who I Am
            </h2>
            <div className="text-lg space-y-6 text-gray-600 dark:text-stone-300">
              <p>
                Hi, I'm Umar, a <span className="font-bold text-teal-500">passionate</span> and{" "}
                <span className="font-bold text-teal-500">solution-driven</span> software engineer with{" "}
                <span className="font-bold text-teal-500">2+ years</span> of experience crafting 
                performant web applications and scalable software solutions.
              </p>
              
              <p>
                Currently advancing my knowledge in{" "}
                <span className="font-bold text-teal-500">Computer Science</span> at{" "}
                <span className="font-bold text-teal-500">Superior University</span>, 
                now in my <span className="font-bold text-teal-500">5th semester </span> 
                with a focus on modern web technologies and AI applications.
              </p>

              <p >
                I believe in{" "}
                <span className="font-bold text-teal-500 not-italic">continuous growth</span>,{" "}
                <span className="font-bold text-teal-500 not-italic">creative problem-solving</span>, 
                and <span className="font-bold text-teal-500 not-italic">pushing technological boundaries </span> 
                to build impactful solutions.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Skills & Technologies
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
                    relative
                    group
                  "
                >
                  {skill.name}
                  <span className="
                    absolute
                    -bottom-8
                    left-1/2
                    transform
                    -translate-x-1/2
                    bg-stone-800
                    text-white
                    text-xs
                    px-2
                    py-1
                    rounded
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-200
                    whitespace-nowrap
                  ">
                    {skill.category}
                  </span>
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