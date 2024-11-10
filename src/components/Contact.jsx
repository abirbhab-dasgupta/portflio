import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Connect() {
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
        <h2 className="text-3xl font-bold mb-6">Connect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              I'm always open to new opportunities and collaborations. Feel free to get in touch!
            </p>
            <p className="text-lg mb-4">
              If you have any feedback, questions, or would like to collaborate, please don't hesitate to reach out via email.
            </p>
            <div className="space-y-4">
              <a href="mailto:abirbhab00dasgupta@gmail.com" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Mail className="w-6 h-6 mr-2" />
                abirbhab00dasgupta@gmail.com
              </a>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/abirbhab" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/abirbhab-dasgupta" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Let's Create Something Amazing</h3>
            <p className="text-gray-300 mb-4">
              Whether you have a project in mind, a question about my work, or just want to say hello, I'd love to hear from you. Your ideas and feedback are always welcome!
            </p>
            <p className="text-gray-300 mb-4">
              Drop me an email, and I'll get back to you as soon as possible. Looking forward to connecting with you!
            </p>
            <a
              href="mailto:abirbhab00dasgupta@gmail.com"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}