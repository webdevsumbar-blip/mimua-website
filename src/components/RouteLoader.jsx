import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function RouteLoader() {
  var location = useLocation()
  var state = useState(false)
  var show = state[0]
  var setShow = state[1]
  var widthState = useState(0)
  var width = widthState[0]
  var setWidth = widthState[1]

  useEffect(function() {
    setShow(true)
    setWidth(0)

    var t1 = setTimeout(function() { setWidth(30) }, 50)
    var t2 = setTimeout(function() { setWidth(60) }, 150)
    var t3 = setTimeout(function() { setWidth(85) }, 300)
    var t4 = setTimeout(function() { setWidth(100) }, 500)
    var t5 = setTimeout(function() { setShow(false); setWidth(0) }, 700)

    return function() {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [location.pathname])

  if (!show) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      zIndex: 99999,
      pointerEvents: 'none',
    }}>
      {/* Bar utama */}
      <div style={{
        height: '100%',
        width: width + '%',
        background: 'var(--primary-light)',
        transition: 'width 0.3s ease',
        borderRadius: '0 2px 2px 0',
      }} />
      {/* Efek cahaya di ujung bar */}
      <div style={{
        position: 'absolute',
        right: 100 - width + '%',
        top: 0,
        width: 80,
        height: '100%',
        background: 'linear-gradient(to right, transparent, rgba(196,144,144,0.8), transparent)',
        transition: 'right 0.3s ease',
      }} />
    </div>
  )
}