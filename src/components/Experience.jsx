import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    position: 'Senior Full Stack Developer',
    period: 'Jan 2021 - Present',
    responsibilities: [
      'Lead a team of 5 developers in building and maintaining large-scale web applications',
      'Implemented microservices architecture to improve scalability and performance',
      'Mentored junior developers and conducted code reviews',
    ],
    logo: '/placeholder.svg?height=80&width=80',
  },
  {
    company: 'Digital Solutions LLC',
    position: 'Full Stack Developer',
    period: 'Jun 2018 - Dec 2020',
    responsibilities: [
      'Developed and maintained multiple client websites using React and Node.js',
      'Integrated third-party APIs and services to enhance application functionality',
      'Optimized database queries and implemented caching strategies to improve performance',
    ],
    logo: '/placeholder.svg?height=80&width=80',
  },
]

export default function Experience() {
  const { ref, controls, variants } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative max-w-4xl mx-auto overflow-hidden"
    >
      <div className="absolute inset-0 bg-blue-500 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg"></div>
      <div className="relative z-10 p-8">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg flex items-start"
            >
              <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-contain mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                <p className="text-gray-300 mb-1">{exp.position}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}