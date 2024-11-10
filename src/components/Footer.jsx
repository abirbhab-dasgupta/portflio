import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ChevronUp, Instagram } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/abirbhab-dasgupta' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/abirbhab' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/Abirbhab_24' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/abirbhab_' },
  { name: 'Email', icon: Mail, url: 'mailto:abirbhab00dasgupta@gmail.com' },
  
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-b from-transparent to-gray-900 text-white py-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-blue-500 bg-opacity-10 backdrop-filter backdrop-blur-lg z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Abirbhab Dasgupta</h2>
            {/* <p className="text-gray-300">Full Stack Developer</p> */}
            <p className="text-sm text-gray-400">Crafting digital experiences with code and creativity</p>
          </div>
          <nav className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors">Education</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Made by Abirbhab Dasgupta.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Built with React, Three.js, Tailwind, GSAP, Framer motion, and{' '}
            <span className="text-blue-400">passion</span>
          </p>
        </div>
      </div>
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <a href="#top" className="text-white hover:text-blue-400 transition-colors">
          <ChevronUp size={32} />
        </a>
      </motion.div>
    </motion.footer>
  )
}

export default Footer