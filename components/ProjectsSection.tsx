import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "B-site (Bloging Platform)",
    description:
      "A Firebase & MongoDB-powered blogging platform where users can write/search blogs (with tags, images, and profiles). Requires Google login to post, features tag-based discovery, and includes a user dashboard with blog analytics.",
    image: "/Bloging_website.png",
    github: "https://github.com/MuhammadUmar248/bloging_website_frontend",
    link: "https://bloging-website-frontend.vercel.app/",
  },
  {
    name: "Stock Management System",
    description: "A dynamic stock management system with real-time CRUD operations (add, edit, delete items via hover actions) and search functionality (by name/price), backed by MongoDB for seamless data handling.",
    image: "/SMS.png",
    github: "https://github.com/MuhammadUmar248/Stock-management-system",
    link: "https://stock-management-system-delta.vercel.app/",
  },
  {
    name: "IQ-PLAY",
    description:
      "A competitive trivia platform with categories (e.g., cricket, entertainment) where logged-in users play timed quizzes, use lifelines, and track scores on personalized dashboards (weekly/monthly stats).",
    image: "/IQ_Play.png",
    github: "https://github.com/Attique-dash/IQPLAY",
    link: "https://iqplay-2baf.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-9 pb-32">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"/>
        </h1>

        <div className="flex flex-col gap-20">
          {projects.map((project, idx) => (
            <div key={idx} className="mb-0">
              <SlideUp offset="-150px 0px -150px 0px">
                <div className="flex flex-col md:flex-row md:space-x-8 gap-6">
                  <div className="md:w-1/2">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={800}
                        height={450}
                        className="rounded-xl shadow-xl hover:opacity-70 object-cover h-full transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
                    <p className="text-lg leading-6 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex space-x-4 mt-6">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:-translate-y-1 transition-transform"
                      >
                        <BsGithub size={28} />
                      </a>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="hover:-translate-y-1 transition-transform"
                      >
                        <BsArrowUpRightSquare size={28} />
                      </a>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection