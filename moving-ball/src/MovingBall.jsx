import React, { useRef, useState, useEffect } from 'react'

export default function MovingBall({ speed = 150, playing = true, direction = 1, size = 40 }) {
  const containerRef = useRef(null)
  const [pos, setPos] = useState(0)
  const velocityRef = useRef(Math.abs(speed) * (direction >= 0 ? 1 : -1))
  const rafRef = useRef(null)
  const lastRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(600)

  useEffect(() => {
    velocityRef.current = Math.abs(speed) * (direction >= 0 ? 1 : -1)
  }, [speed, direction])

  useEffect(() => {
    function onResize() {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!playing) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      lastRef.current = null
      return
    }

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
  }, [playing, containerWidth, size])

  return (
    <div className="track" ref={containerRef}>
      <div className="ball" style={{ width: size + 'px', height: size + 'px', transform: `translateX(${pos}px)` }} />
    </div>
  )
}
