'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Google Gemini Chatbot Clone',
    description: 'An advanced AI chatbot clone with natural language processing capabilities.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'Tailwind'],
    github: 'https://github.com/abirbhab-dasgupta/Google-Gemini',
    demo: 'https://google-gemini-theta-one.vercel.app/',
    image: 'https://static.tnn.in/thumb/msid-107531035,thumbsize-302118,width-1280,height-720,resizemode-75/107531035.jpg',
  },
  {
    title: 'Recipe Finder',
    description: 'Discover recipes based on ingredients you have.',
    technologies: ['React', 'Tailwind', 'Edaman API'],
    github: 'https://github.com/abirbhab-dasgupta/recipe-finder',
    demo: 'https://recipe-finder-nine-dusky.vercel.app/',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/600-calorie-meal-collection-main-image-b0e5d22.jpg',
  },
  {
    title: 'Career Roadmap Library',
    description: 'Career Roadmap Library, your comprehensive guide to navigating the ever-evolving landscape of technology careers.',
    technologies: ['React', 'Tailwind', 'Node.js'],
    github: 'https://github.com/abirbhab-dasgupta/career-roadmap-library.git',
    demo: 'https://career-roadmap-library.vercel.app/',
    image: 'https://imgs.search.brave.com/AHsLWy8OzL73YAU3az4GNan6qJ9LNu8JIJuGMtEktVE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlj/a3VwLmNvbS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA0L0NhcmVlci1N/YXAtVGVtcGxhdGVz/LUJsb2ctRmVhdHVy/ZS5wbmc',
  },
  {
    title: 'Resume Builder',
    description: 'Create professional resumes with customizable templates and real-time preview.',
    technologies: ['React', 'Redux', 'Tailwind CSS', 'jsPDF'],
    github: 'https://github.com/abirbhab-dasgupta/resume-builder',
    demo: 'https://resume-builder-woad-ten.vercel.app/',
    image: 'https://cdn.gotresumebuilder.com/Content/Images/v3/hero_resume_1.png',
  },
  {
    title: 'Interactive Whiteboard',
    description: 'Interactive drawing application with various tools.',
    technologies: ['React', 'Canvas API', 'Tailwind'],
    github: 'https://github.com/abirbhab-dasgupta/interactive-whiteboard.git',
    demo: 'https://interactive-whiteboard-iota.vercel.app/',
    image: 'https://browserboard.com/static/marketing/img/usecase_draw.d7a94a5cfc62.png?height=300&width=400',
  },
]

const ProjectCard = ({ project, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg ${className}`}
    >
      <div className="relative h-full group">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-2 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{project.description}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-blue-600 bg-opacity-50 text-white px-2 py-0.5 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Github className="w-4 h-4 mr-1" />
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-blue-500 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">Projects</h2>
        <div className="grid grid-cols-12 gap-4">
          <ProjectCard project={projects[0]} className="col-span-12 md:col-span-8 row-span-2 h-[400px]" />
          <ProjectCard project={projects[1]} className="col-span-12 md:col-span-4 row-span-1 h-[200px]" />
          <ProjectCard project={projects[2]} className="col-span-12 md:col-span-4 row-span-1 h-[200px]" />
          <ProjectCard project={projects[3]} className="col-span-12 md:col-span-4 row-span-1 h-[200px]" />
          <ProjectCard project={projects[4]} className="col-span-12 md:col-span-8 row-span-1 h-[200px]" />
        </div>
      </div>
    </div>
  )
}

export default Projects