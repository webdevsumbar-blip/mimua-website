import { useState } from 'react'
import { WA_LINK } from '../constants'

export default function PromoBanner() {
  var showArr = useState(true)
  var show = showArr[0]
  var setShow = showArr[1]

  if (!show) return null

  var wrapStyle = {
    background: 'var(--primary)',
    padding: '10px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    position: 'relative',
  }

  var textStyle = {
    fontSize: 13,
    color: 'white',
    fontWeight: 400,
    letterSpacing: 0.5,
    textAlign: 'center',
  }

  var linkStyle = {
    fontSize: 12,
    color: 'white',
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: 'uppercase',
    borderBottom: '1px solid rgba(255,255,255,0.6)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  }

  var closeBtnStyle = {
    position: 'absolute',
    right: 16,
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.7)',
    fontSize: 18,
    cursor: 'pointer',
    lineHeight: 1,
    fontFamily: 'var(--font-body)',
  }

  return (
    <div style={wrapStyle}>
      <p style={textStyle}>
        Konsultasi makeup GRATIS untuk booking bulan ini!
      </p>
      <a href={WA_LINK} target="_blank" rel="noreferrer" style={linkStyle}>
        Claim Sekarang
      </a>
      <button style={closeBtnStyle} onClick={function() { setShow(false) }}>
        x
      </button>
    </div>
  )
}