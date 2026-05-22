import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  var progressArr = useState(0)
  var progress = progressArr[0]
  var setProgress = progressArr[1]

  useEffect(function() {
    function onScroll() {
      var scrollTop = window.scrollY
      var docHeight = document.documentElement.scrollHeight - window.innerHeight
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, pct)))
    }
    window.addEventListener('scroll', onScroll)
    return function() { window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      zIndex: 9999,
      background: 'rgba(102,49,48,0.15)',
      pointerEvents: 'none',
    }}>
      <div style={{
        height: '100%',
        width: progress + '%',
        background: 'var(--primary)',
        transition: 'width 0.1s linear',
      }} />
    </div>
  )
}