import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export function useScrollAnimation() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start('visible')
      setHasAnimated(true)
    }
  }, [controls, inView, hasAnimated])

  return { ref, controls, variants: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  }}
}