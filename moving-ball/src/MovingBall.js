import React, { useRef, useState, useEffect } from 'react'

export default function MovingBall() {
  const containerRef = useRef(null)
  const [pos, setPos] = useState(0)
  const size = 40
  const speed = 180 // px/s
  const velocityRef = useRef(speed)
  const rafRef = useRef(null)
  const lastRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(600)

  useEffect(() => {
    function onResize() {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    function step(time) {
      if (lastRef.current == null) lastRef.current = time
      const dt = (time - lastRef.current) / 1000
      lastRef.current = time
      setPos((prev) => {
        let next = prev + velocityRef.current * dt
        const max = Math.max(0, containerWidth - size)
        if (next > max) {
          next = max
          velocityRef.current = -Math.abs(velocityRef.current)
        }
        if (next < 0) {
          next = 0
          velocityRef.current = Math.abs(velocityRef.current)
        }
        return next
      })
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      lastRef.current = null
    }
  }, [containerWidth])

  const ball = React.createElement('div', {
    className: 'ball',
    style: { width: size + 'px', height: size + 'px', transform: `translateX(${pos}px)` },
  })

  return React.createElement('div', { className: 'track', ref: containerRef }, ball)
}
