import { useState, useEffect } from 'react'
import { WA_LINK } from '../constants'

var TARGET_DATE = new Date('2026-12-31T23:59:59')

function pad(n) { return n < 10 ? '0' + n : String(n) }

function getTimeLeft() {
  var diff = TARGET_DATE - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

var sectionStyle = {
  position: 'relative',
  padding: '48px 24px',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(rgba(26,8,8,0.65), rgba(26,8,8,0.65)), url("/images/footer-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
}

var gridStyle = {
  display: 'flex',
  gap: 16,
  justifyContent: 'center',
  margin: '28px 0',
  flexWrap: 'wrap',
}

var boxStyle = {
  background: 'var(--primary)',
  borderRadius: 8,
  padding: '16px 20px',
  minWidth: 80,
  textAlign: 'center',
}

var numStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: 42,
  fontWeight: 700,
  color: 'white',
  lineHeight: 1,
  display: 'block',
}

var labelStyle = {
  fontSize: 10,
  letterSpacing: 2,
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.7)',
  marginTop: 6,
  display: 'block',
}

var sepStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: 36,
  color: 'var(--primary-light)',
  display: 'flex',
  alignItems: 'center',
  paddingBottom: 16,
}

export default function CountdownTimer() {
  var timeArr = useState(getTimeLeft())
  var time = timeArr[0]
  var setTime = timeArr[1]

  useEffect(function() {
    var timer = setInterval(function() {
      setTime(getTimeLeft())
    }, 1000)
    return function() { clearInterval(timer) }
  }, [])

  return (
    <section style={sectionStyle}>
      <div className="container">
        <p style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--primary-light)', marginBottom: 8 }}>
          Penawaran Terbatas
        </p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 4vw, 36px)', color: 'white', marginBottom: 8 }}>
          Promo Akhir Tahun MIMUA
        </h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
          Diskon spesial untuk booking sebelum 31 Desember 2026!
        </p>

        <div style={gridStyle}>
          <div style={boxStyle}>
            <span style={numStyle}>{pad(time.days)}</span>
            <span style={labelStyle}>Hari</span>
          </div>
          <span style={sepStyle}>:</span>
          <div style={boxStyle}>
            <span style={numStyle}>{pad(time.hours)}</span>
            <span style={labelStyle}>Jam</span>
          </div>
          <span style={sepStyle}>:</span>
          <div style={boxStyle}>
            <span style={numStyle}>{pad(time.minutes)}</span>
            <span style={labelStyle}>Menit</span>
          </div>
          <span style={sepStyle}>:</span>
          <div style={boxStyle}>
            <span style={numStyle}>{pad(time.seconds)}</span>
            <span style={labelStyle}>Detik</span>
          </div>
        </div>

        <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-outline btn-outline--light">
          Booking Sekarang Sebelum Terlambat!
        </a>
      </div>
    </section>
  )
}