'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('nuit')

  useEffect(() => {
    const saved = localStorage.getItem('wyp-theme') || 'nuit'
    setTheme(saved)

    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'nuit' ? 'jour' : 'nuit'
    document.body.setAttribute('data-theme', next)
    setTheme(next)
    localStorage.setItem('wyp-theme', next)
    // Smoke-reveal effect on cadran during theme flip
    document.querySelectorAll('.lp-pf--dual').forEach(el => {
      el.classList.remove('is-flipping')
      void el.offsetWidth
      el.classList.add('is-flipping')
      setTimeout(() => el.classList.remove('is-flipping'), 900)
    })
  }

  return (
    <nav className={`lp-nav${scrolled ? ' is-scrolled' : ''}`} id="lpNav" aria-label="Brand">
      <div className="lp-container lp-nav-inner">
        <div className="lp-nav-left">
          <span className="lp-meta">WYP · GENÈVE</span>
        </div>
        <a href="#hero" className="lp-nav-logo-link" aria-label="WYP">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lp-nav-logo" src="/assets/logos/WYP_LOGOTYPE_BLANC.png" alt="WYP" />
        </a>
        <div className="lp-nav-right">
          <button
            type="button"
            className="lp-theme-toggle"
            onClick={toggleTheme}
            aria-label="Basculer jour / nuit"
          >
            <span className="dot" />
            <span className="lbl">{theme === 'jour' ? 'Jour' : 'Nuit'}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
