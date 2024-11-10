import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const circleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
}

const circleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
}

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <motion.div
        className="flex space-x-2"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="w-4 h-4 bg-blue-500 rounded-full"
            variants={circleVariants}
            transition={circleTransition}
          />
        ))}
      </motion.div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}