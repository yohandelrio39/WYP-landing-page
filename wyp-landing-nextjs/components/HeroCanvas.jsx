'use client'

import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const canvas = document.createElement('canvas')
    mount.appendChild(canvas)
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let W = 1, H = 1
    function resizeCanvas() {
      W = Math.max(1, mount.clientWidth)
      H = Math.max(1, mount.clientHeight)
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resizeCanvas()

    let particleHex = '#F5F5F5'
    function applyTheme() {
      particleHex = document.body.getAttribute('data-theme') === 'jour' ? '#0B0B0C' : '#F5F5F5'
    }
    applyTheme()
    const themeObs = new MutationObserver(applyTheme)
    themeObs.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })

    function rgba(hex, a) {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r},${g},${b},${a})`
    }

    function sampleLogo(src) {
      return new Promise((resolve) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
          const S = 240
          const c = document.createElement('canvas')
          c.width = S; c.height = S
          const cctx = c.getContext('2d')
          cctx.drawImage(img, 0, 0, S, S)
          const data = cctx.getImageData(0, 0, S, S).data
          const pts = []
          let minX = 1, minY = 1, maxX = 0, maxY = 0
          for (let y = 0; y < S; y++) {
            for (let x = 0; x < S; x++) {
              if (data[(y * S + x) * 4 + 3] > 96) {
                const nx = x / S, ny = y / S
                pts.push(nx, ny)
                if (nx < minX) minX = nx
                if (ny < minY) minY = ny
                if (nx > maxX) maxX = nx
                if (ny > maxY) maxY = ny
              }
            }
          }
          resolve({ pts, bbox: { minX, minY, maxX, maxY } })
        }
        img.onerror = () => resolve({ pts: [], bbox: null })
        img.src = src
      })
    }

    const PARTICLE_COUNT = 1200
    const LOGO_FIT      = 0.90
    const NEIGHBOR_REL  = 0.034
    const HOVER_REL     = 0.30
    const MAX_OFFSET_REL = 0.018

    const particles = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: 0, y: 0, ox: 0, oy: 0, vx: 0, vy: 0,
        _seed: Math.random(),
        _jx: (Math.random() - 0.5) * 0.0015,
        _jy: (Math.random() - 0.5) * 0.0015,
        phase: Math.random() * Math.PI * 2,
        twSpeed: 0.9 + Math.random() * 1.6,
        neighbors: []
      })
    }

    let sampledPts = [], bbox = null

    function mapPt(nx, ny) {
      const u = (nx - bbox.minX) / (bbox.maxX - bbox.minX)
      const v = (ny - bbox.minY) / (bbox.maxY - bbox.minY)
      const span = Math.min(W, H) * LOGO_FIT
      const sx = (W - span) / 2
      const sy = (H - span) / 2
      return [sx + u * span, sy + v * span]
    }

    function rebuildOrigins() {
      if (!sampledPts.length || !bbox) return
      const N = sampledPts.length / 2
      const jit = Math.min(W, H)
      const midX = W / 2
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const j = Math.floor(p._seed * N) * 2
        const [px, py] = mapPt(sampledPts[j], sampledPts[j + 1])
        p.ox = px + p._jx * jit
        p.oy = py + p._jy * jit
        p.x = p.ox; p.y = p.oy
        p.vx = 0; p.vy = 0
        p.order = p.ox < midX
      }
    }

    function buildNeighbors() {
      const radius = Math.min(W, H) * NEIGHBOR_REL
      const r2 = radius * radius
      const cell = radius
      const grid = new Map()
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const k = Math.floor(p.ox / cell) + ',' + Math.floor(p.oy / cell)
        if (!grid.has(k)) grid.set(k, [])
        grid.get(k).push(i)
      }
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const cx = Math.floor(p.ox / cell)
        const cy = Math.floor(p.oy / cell)
        const neigh = []
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const arr = grid.get((cx + dx) + ',' + (cy + dy))
            if (!arr) continue
            for (let a = 0; a < arr.length; a++) {
              const j = arr[a]
              if (j <= i) continue
              const o = particles[j]
              const ddx = p.ox - o.ox, ddy = p.oy - o.oy
              if (ddx * ddx + ddy * ddy <= r2) neigh.push(j)
            }
          }
        }
        if (neigh.length > 6) neigh.length = 6
        p.neighbors = neigh
      }
    }

    let ready = false, animId = null

    sampleLogo('/assets/logos/WYP_ICON_BLANC.png').then((res) => {
      if (!res.pts.length) return
      sampledPts = res.pts
      bbox = res.bbox
      rebuildOrigins()
      buildNeighbors()
      ready = true
    })

    const handleResize = () => { resizeCanvas(); rebuildOrigins(); buildNeighbors() }
    window.addEventListener('resize', handleResize)

    const mouse = { x: -1e4, y: -1e4 }
    const handleMouseMove = (e) => {
      const r = mount.getBoundingClientRect()
      const nx = (e.clientX - r.left) / r.width
      const ny = (e.clientY - r.top) / r.height
      if (nx < 0 || nx > 1 || ny < 0 || ny > 1) { mouse.x = -1e4; mouse.y = -1e4; return }
      mouse.x = ((nx - 0.5) * 0.78 + 0.5) * W
      mouse.y = ((ny - 0.5) * 0.78 + 0.5) * H
    }
    const handleMouseLeave = () => { mouse.x = -1e4; mouse.y = -1e4 }
    mount.addEventListener('mousemove', handleMouseMove)
    mount.addEventListener('mouseleave', handleMouseLeave)

    const startTime = performance.now()

    function animate() {
      animId = requestAnimationFrame(animate)
      if (!ready) return
      const t = (performance.now() - startTime) / 1000
      ctx.clearRect(0, 0, W, H)

      const m = Math.min(W, H)
      const INFL   = m * HOVER_REL,   INFL2   = INFL * INFL
      const MAX_OFF = m * MAX_OFFSET_REL, MAX_OFF2 = MAX_OFF * MAX_OFF
      const BOB    = m * 0.0022
      const LINE_MAX = m * NEIGHBOR_REL

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < INFL2) {
          const d = Math.sqrt(d2) || 0.001
          const force = (INFL - d) * 0.018
          p.vx += (dx / d) * force
          p.vy += (dy / d) * force
        }
        if (p.order) {
          const bobX = Math.sin(t * 0.55 + p.phase) * BOB
          const bobY = Math.cos(t * 0.47 + p.phase * 1.3) * BOB
          p.vx += (p.ox + bobX - p.x) * 0.06
          p.vy += (p.oy + bobY - p.y) * 0.06
          p.vx *= 0.86; p.vy *= 0.86
          p.x += p.vx; p.y += p.vy
          const ox = p.x - p.ox, oy = p.y - p.oy
          const ol2 = ox * ox + oy * oy
          if (ol2 > MAX_OFF2) {
            const k = MAX_OFF / Math.sqrt(ol2)
            p.x = p.ox + ox * k; p.y = p.oy + oy * k
            p.vx *= 0.4; p.vy *= 0.4
          }
        } else {
          p.vx += (Math.random() - 0.5) * 0.5
          p.vy += (Math.random() - 0.5) * 0.5
          p.vx *= 0.94; p.vy *= 0.94
          p.x += p.vx; p.y += p.vy
          const ox = p.x - p.ox, oy = p.y - p.oy
          const ol = Math.sqrt(ox * ox + oy * oy)
          const BOUND = MAX_OFF * 1.6
          if (ol > BOUND) {
            p.x = p.ox + (ox / ol) * BOUND; p.y = p.oy + (oy / ol) * BOUND
            p.vx *= -0.5; p.vy *= -0.5
          }
        }
      }

      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let k = 0; k < p.neighbors.length; k++) {
          const o = particles[p.neighbors[k]]
          const dx = p.x - o.x, dy = p.y - o.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINE_MAX) {
            ctx.strokeStyle = rgba(particleHex, 0.22 * (1 - d / LINE_MAX))
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(o.x, o.y); ctx.stroke()
          }
        }
      }

      const dotR = Math.max(1.1, m * 0.0028)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const tw = 0.78 + 0.22 * Math.sin(t * p.twSpeed + p.phase * 2.7)
        ctx.fillStyle = rgba(particleHex, 0.92 * tw)
        ctx.beginPath(); ctx.arc(p.x, p.y, dotR, 0, Math.PI * 2); ctx.fill()
      }
    }
    animate()

    return () => {
      if (animId) cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      mount.removeEventListener('mousemove', handleMouseMove)
      mount.removeEventListener('mouseleave', handleMouseLeave)
      themeObs.disconnect()
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  )
}
