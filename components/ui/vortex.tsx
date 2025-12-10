"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface VortexProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  particleCount?: number
  rangeY?: number
  baseHue?: number
  baseSpeed?: number
  rangeSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  backgroundColor?: string
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particleCount = props.particleCount || 700
  const particlePropCount = 9
  const particlePropsLength = particleCount * particlePropCount
  const rangeY = props.rangeY || 100
  const baseTTL = 50
  const rangeTTL = 150
  const baseSpeed = props.baseSpeed || 0.0
  const rangeSpeed = props.rangeSpeed || 1.5
  const baseRadius = props.baseRadius || 1
  const rangeRadius = props.rangeRadius || 2
  const baseHue = props.baseHue || 220
  const rangeHue = 100
  const noiseSteps = 3
  const xOff = 0.00125
  const yOff = 0.00125
  const zOff = 0.0005
  const backgroundColor = props.backgroundColor || "transparent"
  let tick = 0
  const particleProps = useRef(new Float32Array(particlePropsLength)).current
  const [rafId, setRafId] = useState<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let center: [number, number] = [0, 0]

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = container.offsetWidth * dpr
      canvas.height = container.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${container.offsetWidth}px`
      canvas.style.height = `${container.offsetHeight}px`
      center = [container.offsetWidth / 2, container.offsetHeight / 2]
      initParticles()
      draw()
    }

    const initParticles = () => {
      tick = 0
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i)
      }
    }

    const initParticle = (i: number) => {
      const x = Math.random() * canvas.width
      const y = center[1] + (Math.random() - 0.5) * rangeY
      const vx = 0
      const vy = 0
      const life = 0
      const ttl = baseTTL + Math.random() * rangeTTL
      const speed = baseSpeed + Math.random() * rangeSpeed
      const radius = baseRadius + Math.random() * rangeRadius
      const hue = baseHue + Math.random() * rangeHue

      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
    }

    const drawParticles = () => {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i)
      }
    }

    const updateParticle = (i: number) => {
      const i2 = 1 + i
      const i3 = 2 + i
      const i4 = 3 + i
      const i5 = 4 + i
      const i6 = 5 + i
      const i7 = 6 + i
      const i8 = 7 + i
      const i9 = 8 + i

      const x = particleProps[i]
      const y = particleProps[i2]
      const n = simplex3d(x * xOff, y * yOff, tick * zOff) * noiseSteps * Math.PI * 2
      const vx = Math.cos(n)
      const vy = Math.sin(n)
      const life = particleProps[i5]
      const ttl = particleProps[i6]
      const speed = particleProps[i7]
      const radius = particleProps[i8]
      const hue = particleProps[i9]

      const dx = x - center[0]
      const dy = y - center[1]
      const d = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx)
      const force = 1 - d / (canvas.width * 0.5)
      const forceX = Math.cos(angle) * force * 0.3
      const forceY = Math.sin(angle) * force * 0.3

      particleProps[i] = x + vx * speed + forceX
      particleProps[i2] = y + vy * speed + forceY
      particleProps[i3] = vx
      particleProps[i4] = vy
      particleProps[i5] = life + 1

      ctx.a = Math.abs(Math.sin((life / ttl) * Math.PI))

      ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${ctx.a})`
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()

      if (life > ttl) {
        initParticle(i)
      }
    }

    const draw = () => {
      tick++

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawParticles()

      setRafId(requestAnimationFrame(draw))
    }

    setup()
    window.addEventListener("resize", setup)

    return () => {
      window.removeEventListener("resize", setup)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)} ref={containerRef}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className={cn("relative z-10", props.className)}>{props.children}</div>
    </div>
  )
}

// Simplex noise implementation
function simplex3d(x: number, y: number, z: number) {
  const F3 = 1.0 / 3.0
  const G3 = 1.0 / 6.0
  let n0, n1, n2, n3

  const s = (x + y + z) * F3
  const i = Math.floor(x + s)
  const j = Math.floor(y + s)
  const k = Math.floor(z + s)
  const t = (i + j + k) * G3
  const X0 = i - t
  const Y0 = j - t
  const Z0 = k - t
  const x0 = x - X0
  const y0 = y - Y0
  const z0 = z - Z0

  let i1, j1, k1
  let i2, j2, k2
  if (x0 >= y0) {
    if (y0 >= z0) {
      i1 = 1
      j1 = 0
      k1 = 0
      i2 = 1
      j2 = 1
      k2 = 0
    } else if (x0 >= z0) {
      i1 = 1
      j1 = 0
      k1 = 0
      i2 = 1
      j2 = 0
      k2 = 1
    } else {
      i1 = 0
      j1 = 0
      k1 = 1
      i2 = 1
      j2 = 0
      k2 = 1
    }
  } else {
    if (y0 < z0) {
      i1 = 0
      j1 = 0
      k1 = 1
      i2 = 0
      j2 = 1
      k2 = 1
    } else if (x0 < z0) {
      i1 = 0
      j1 = 1
      k1 = 0
      i2 = 0
      j2 = 1
      k2 = 1
    } else {
      i1 = 0
      j1 = 1
      k1 = 0
      i2 = 1
      j2 = 1
      k2 = 0
    }
  }

  const x1 = x0 - i1 + G3
  const y1 = y0 - j1 + G3
  const z1 = z0 - k1 + G3
  const x2 = x0 - i2 + 2.0 * G3
  const y2 = y0 - j2 + 2.0 * G3
  const z2 = z0 - k2 + 2.0 * G3
  const x3 = x0 - 1.0 + 3.0 * G3
  const y3 = y0 - 1.0 + 3.0 * G3
  const z3 = z0 - 1.0 + 3.0 * G3

  const ii = i & 255
  const jj = j & 255
  const kk = k & 255

  let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0
  if (t0 < 0) n0 = 0.0
  else {
    t0 *= t0
    n0 = t0 * t0 * grad3(perm[ii + perm[jj + perm[kk]]], x0, y0, z0)
  }

  let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1
  if (t1 < 0) n1 = 0.0
  else {
    t1 *= t1
    n1 = t1 * t1 * grad3(perm[ii + i1 + perm[jj + j1 + perm[kk + k1]]], x1, y1, z1)
  }

  let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2
  if (t2 < 0) n2 = 0.0
  else {
    t2 *= t2
    n2 = t2 * t2 * grad3(perm[ii + i2 + perm[jj + j2 + perm[kk + k2]]], x2, y2, z2)
  }

  let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3
  if (t3 < 0) n3 = 0.0
  else {
    t3 *= t3
    n3 = t3 * t3 * grad3(perm[ii + 1 + perm[jj + 1 + perm[kk + 1]]], x3, y3, z3)
  }

  return 32.0 * (n0 + n1 + n2 + n3)
}

function grad3(hash: number, x: number, y: number, z: number) {
  const h = hash & 15
  const u = h < 8 ? x : y
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
}

const perm = new Uint8Array(512)
const p = new Uint8Array(256)
for (let i = 0; i < 256; i++) {
  p[i] = i
}
for (let i = 255; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  ;[p[i], p[j]] = [p[j], p[i]]
}
for (let i = 0; i < 512; i++) {
  perm[i] = p[i & 255]
}
