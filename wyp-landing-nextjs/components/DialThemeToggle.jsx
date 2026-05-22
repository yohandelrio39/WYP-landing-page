'use client'

import { useEffect, useState } from 'react'

export default function DialThemeToggle() {
  const [theme, setTheme] = useState('nuit')

  useEffect(() => {
    const read = () =>
      document.body.getAttribute('data-theme') === 'jour' ? 'jour' : 'nuit'
    setTheme(read())
    // Stay in sync with the nav toggle (both drive body[data-theme])
    const obs = new MutationObserver(() => setTheme(read()))
    obs.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])

  const toggle = () => {
    const next = theme === 'jour' ? 'nuit' : 'jour'
    document.body.setAttribute('data-theme', next)
    localStorage.setItem('wyp-theme', next)
    setTheme(next)
  }

  return (
    <button
      type="button"
      className="lp-dial-toggle"
      onClick={toggle}
      aria-label="Toggle dial day / night"
    >
      <span className="dot" />
      <span className="lbl">{theme === 'jour' ? 'Day' : 'Night'}</span>
    </button>
  )
}
