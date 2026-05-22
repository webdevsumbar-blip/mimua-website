import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  var state = useState(false)
  var visible = state[0]
  var setVisible = state[1]
  var progressState = useState(0)
  var progress = progressState[0]
  var setProgress = progressState[1]

  useEffect(function() {
    function onScroll() {
      var scrollTop = window.scrollY
      var docHeight = document.documentElement.scrollHeight - window.innerHeight
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setVisible(scrollTop > 400)
      setProgress(Math.min(100, pct))
    }
    window.addEventListener('scroll', onScroll)
    return function() { window.removeEventListener('scroll', onScroll) }
  }, [])

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  var size = 44
  var radius = 18
  var circumference = 2 * Math.PI * radius
  var offset = circumference - (progress / 100) * circumference

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll ke atas"
      style={{
        position: 'fixed',
        bottom: 96,
        right: 28,
        zIndex: 999,
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--dark)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={function(e) { e.currentTarget.style.transform = 'scale(1.1)' }}
      onMouseLeave={function(e) { e.currentTarget.style.transform = 'scale(1)' }}
    >
      {/* Progress circle */}
      <svg
        width={size}
        height={size}
        style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
      >
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(196,144,144,0.2)"
          strokeWidth="2"
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--primary-light)"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.2s ease' }}
        />
      </svg>

      {/* Panah atas */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}