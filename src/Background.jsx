import { useEffect, useRef } from 'react'

const COLORS = [
  'rgba(137, 180, 250, ',
  'rgba(166, 227, 161, ',
  'rgba(249, 226, 175, ',
  'rgba(243, 139, 168, ',
]

function Background({ isMobile, discordRef, githubRef, pcPartsRef, youtubeRef }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) {
      return undefined
    }

    let width = 0
    let height = 0
    let frame = 0
    let animationFrame
    let blobRadius = 1
    let mouseX = 0
    let mouseY = 0
    const alpha = [1, 1, 1, 1]
    const alphaTarget = [1, 1, 1, 1]

    const resize = () => {
      const pixelRatio = isMobile
        ? Math.min(window.devicePixelRatio || 1, 1.5)
        : window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const updateMouse = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    class Particle {
      constructor(radius, theta, size, color) {
        this.radius = radius
        this.theta = theta
        this.size = size
        this.color = color
      }

      draw() {
        context.fillStyle = `${COLORS[this.color]}${alpha[this.color]})`
        context.beginPath()
        context.arc(
          width / 2 + (1 - blobRadius) * (
            this.radius * Math.cos(frame / this.radius + this.theta)
            + (width / 2 - mouseX) / 100
            - this.size / 2
          ),
          height / 2 + (1 - blobRadius) * (
            this.radius * Math.sin(frame / this.radius + this.theta)
            + (height / 2 - mouseY) / 100
            - this.size / 2
          ),
          this.size * 10 * (1 - blobRadius),
          0,
          Math.PI * 2,
        )
        context.fill()
      }
    }

    const particles = []
    const setBlobVisibility = (index, visibility) => {
      alphaTarget.forEach((_, colorIndex) => {
        if (index !== colorIndex) {
          alphaTarget[colorIndex] = visibility
        }
      })
    }

    const buttonRefs = [
      [discordRef, 0],
      [githubRef, 1],
      [pcPartsRef, 2],
      [youtubeRef, 3],
    ]
    const listeners = []

    buttonRefs.forEach(([buttonRef, index]) => {
      const button = buttonRef?.current
      if (!button) {
        return
      }

      const showBlob = () => setBlobVisibility(index, 0)
      const showAllBlobs = () => setBlobVisibility(index, 1)
      button.addEventListener('mouseenter', showBlob)
      button.addEventListener('mouseleave', showAllBlobs)
      listeners.push({ button, showBlob, showAllBlobs })
    })

    resize()
    mouseX = width / 2
    mouseY = height / 2

    const particleCount = isMobile ? 24 : 50
    for (let index = 0; index < particleCount; index += 1) {
      particles.push(new Particle(
        (Math.random() * width / 250) + index * width / 60,
        Math.random() * Math.PI * 2,
        (Math.max(index, 10) * width) / 2000,
        Math.floor(Math.random() * COLORS.length),
      ))
    }

    let lastFrameTime = 0
    const draw = (timestamp) => {
      if (isMobile && timestamp - lastFrameTime < 33) {
        animationFrame = window.requestAnimationFrame(draw)
        return
      }

      lastFrameTime = timestamp
      context.clearRect(0, 0, width, height)
      frame += 0.3
      blobRadius *= 0.98

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        particles[index].draw()
      }

      alpha.forEach((value, index) => {
        alpha[index] = (value * 19 + alphaTarget[index]) / 20
      })

      animationFrame = window.requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', updateMouse)
    animationFrame = window.requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', updateMouse)
      window.cancelAnimationFrame(animationFrame)
      listeners.forEach(({ button, showBlob, showAllBlobs }) => {
        button.removeEventListener('mouseenter', showBlob)
        button.removeEventListener('mouseleave', showAllBlobs)
      })
    }
  }, [isMobile, discordRef, githubRef, pcPartsRef, youtubeRef])

  return <canvas id="animBackground" ref={canvasRef} aria-hidden="true" />
}

export default Background
