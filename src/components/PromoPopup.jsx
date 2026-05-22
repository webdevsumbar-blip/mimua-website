import { useState, useEffect } from 'react'
import { WA_LINK } from '../constants'

export default function PromoPopup() {
  var showArr = useState(false)
  var show = showArr[0]
  var setShow = showArr[1]

  useEffect(function() {
    var closed = sessionStorage.getItem('popupClosed')
    if (!closed) {
      var t = setTimeout(function() { setShow(true) }, 5000)
      return function() { clearTimeout(t) }
    }
  }, [])

  function close() {
    setShow(false)
    sessionStorage.setItem('popupClosed', 'true')
  }

  function stopProp(e) { e.stopPropagation() }

  if (!show) return null

  var s1 = { position: 'fixed', inset: 0, zIndex: 9500, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }
  var s2 = { background: 'white', borderRadius: 8, maxWidth: 440, width: '100%', overflow: 'hidden' }
  var s3 = { background: 'var(--primary)', padding: '28px 28px 24px', textAlign: 'center', position: 'relative' }
  var s4 = { position: 'absolute', top: 12, right: 12, background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', width: 28, height: 28, borderRadius: '50%', cursor: 'pointer', fontSize: 14, fontFamily: 'var(--font-body)' }
  var s5 = { fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 8 }
  var s6 = { fontFamily: 'var(--font-heading)', fontSize: 26, color: 'white', lineHeight: 1.2 }
  var s7 = { padding: '24px 28px 28px' }
  var s8 = { fontSize: 14, color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 20, textAlign: 'center' }
  var s9 = { color: 'var(--primary)' }
  var s10 = { width: '100%', justifyContent: 'center', marginBottom: 12, display: 'flex', alignItems: 'center', padding: '13px 28px', background: 'var(--primary)', color: 'white', fontSize: 13, fontWeight: 500, border: 'none', borderRadius: 4, cursor: 'pointer', textDecoration: 'none', fontFamily: 'var(--font-body)' }
  var s11 = { width: '100%', padding: '10px', background: 'none', border: 'none', color: 'var(--gray-mid)', fontSize: 13, cursor: 'pointer', fontFamily: 'var(--font-body)' }

  return (
    <div style={s1} onClick={close}>
      <div style={s2} onClick={stopProp}>
        <div style={s3}>
          <button style={s4} onClick={close}>X</button>
          <p style={s5}>Penawaran Spesial</p>
          <h3 style={s6}>Konsultasi Makeup Gratis!</h3>
        </div>
        <div style={s7}>
          <p style={s8}>
            Hubungi MIMUA sekarang dan dapatkan <strong style={s9}>konsultasi makeup gratis</strong> untuk acara spesialmu!
          </p>
          <a href={WA_LINK} target="_blank" rel="noreferrer" onClick={close} style={s10}>
            Klaim Sekarang via WhatsApp
          </a>
          <button onClick={close} style={s11}>
            Tidak, terima kasih
          </button>
        </div>
      </div>
    </div>
  )
}