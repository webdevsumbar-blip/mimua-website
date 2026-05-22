import { useState, useEffect } from 'react'

export default function CustomCursor() {
  var posArr = useState({ x: 0, y: 0 })
  var pos = posArr[0]
  var setPos = posArr[1]

  var trailArr = useState({ x: 0, y: 0 })
  var trail = trailArr[0]
  var setTrail = trailArr[1]

  var visibleArr = useState(false)
  var visible = visibleArr[0]
  var setVisible = visibleArr[1]

  var clickedArr = useState(false)
  var clicked = clickedArr[0]
  var setClicked = clickedArr[1]

  useEffect(function() {
    function onMove(e) {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    function onLeave() { setVisible(false) }
    function onDown() { setClicked(true) }
    function onUp() { setClicked(false) }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    return function() {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
    }
  }, [])

  useEffect(function() {
    var animId
    function animate() {
      setTrail(function(prev) {
        return {
          x: prev.x + (pos.x - prev.x) * 0.12,
          y: prev.y + (pos.y - prev.y) * 0.12,
        }
      })
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return function() { cancelAnimationFrame(animId) }
  }, [pos])

  if (!visible) return null

  var dotStyle = {
    position: 'fixed',
    left: pos.x,
    top: pos.y,
    width: clicked ? 8 : 10,
    height: clicked ? 8 : 10,
    background: 'var(--primary)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 99999,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.15s, height 0.15s',
  }

  var ringStyle = {
    position: 'fixed',
    left: trail.x,
    top: trail.y,
    width: clicked ? 28 : 36,
    height: clicked ? 28 : 36,
    border: '1.5px solid var(--primary)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 99998,
    transform: 'translate(-50%, -50%)',
    opacity: 0.6,
    transition: 'width 0.15s, height 0.15s',
  }

  return (
    <div>
      <div style={dotStyle} />
      <div style={ringStyle} />
    </div>
  )
}