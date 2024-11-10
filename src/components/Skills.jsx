"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { FaReact, FaJs, FaHtml5, FaCss3, FaNode, FaPython, FaGit, FaLinux, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiPostman, SiFigma, SiRedux, SiFramer, SiJupyter, SiC, SiMongodb, SiMysql } from 'react-icons/si'


const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-300' },
      { name: 'Python', icon: FaPython, color: 'text-blue-500' },
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-400' },
      { name: 'CSS3', icon: FaCss3, color: 'text-blue-300' },
      { name: 'C', icon: SiC, color: 'text-blue-600' },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: 'React', icon: FaReact, color: 'text-blue-400' },
      { name: 'Node.js', icon: FaNode, color: 'text-green-400' },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
      { name: 'Redux', icon: SiRedux, color: 'text-purple-600' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'Framer Motion', icon: SiFramer, color: 'text-blue-400' },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'SQL', icon: SiMysql, color: 'text-blue-400' },
    ]
  },
  {
    title: "Others",
    skills: [
      { name: 'Git', icon: FaGit, color: 'text-red-400' },
      { name: 'GitHub', icon: FaGithub, color: 'text-gray-300' },
      { name: 'Linux', icon: FaLinux, color: 'text-yellow-600' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-400' },
      { name: 'Jupyter Notebook', icon: SiJupyter, color: 'text-orange-600' },
    ]
  }
]

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        delay: index * 0.2,
        ease: 'power1.inOut',
      })
    }
  }, [index])

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col items-center justify-center p-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <skill.icon className={`text-2xl ${skill.color}`} />
      <span className="mt-1 text-xs font-medium text-white text-center">{skill.name}</span>
    </motion.div>
  )
}

export default function SkillsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section className="py-8 babsolute inset-0 bg-blue-500 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] opacity-10 bg-repeat bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">My Skills</h2>
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title} className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">{group.title}</h3>
            <motion.div
              ref={containerRef}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {group.skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <SkillCard skill={skill} index={index + groupIndex * 10} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
