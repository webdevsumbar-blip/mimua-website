import { useState } from 'react'
import { WA_LINK } from '../constants'

var bookedDates = [
  '2026-06-01',
  '2026-06-07',
  '2026-06-14',
  '2026-06-21',
  '2026-06-28',
]

var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
var days   = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']

function pad(n) { return n < 10 ? '0' + n : String(n) }

export default function Availability() {
  var now      = new Date()
  var monthArr = useState(now.getMonth())
  var month    = monthArr[0]
  var setMonth = monthArr[1]
  var yearArr  = useState(now.getFullYear())
  var year     = yearArr[0]
  var setYear  = yearArr[1]

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(function(y) { return y - 1 }) }
    else { setMonth(function(m) { return m - 1 }) }
  }

  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(function(y) { return y + 1 }) }
    else { setMonth(function(m) { return m + 1 }) }
  }

  var firstDay     = new Date(year, month, 1).getDay()
  var daysInMonth  = new Date(year, month + 1, 0).getDate()
  var cells        = []

  for (var i = 0; i < firstDay; i++) { cells.push(null) }
  for (var d = 1; d <= daysInMonth; d++) { cells.push(d) }

  var headerStyle = {
    background: 'var(--primary)',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  var navBtnStyle = {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: 'white',
    width: 32,
    height: 32,
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  var monthTitleStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: 18,
    color: 'white',
    fontWeight: 600,
  }

  return (
    <section className="section" style={{ background: 'var(--primary-pale)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>Ketersediaan</span>
          <h2 className="section-title">Cek Jadwal Tersedia</h2>
          <p style={{ fontSize: 14, color: 'var(--gray-text)' }}>
            Pastikan tanggal acara kamu masih tersedia sebelum booking
          </p>
        </div>

        <div style={{ maxWidth: 500, margin: '0 auto', background: 'white', borderRadius: 8, border: '1px solid var(--primary-soft)', overflow: 'hidden' }}>

          {/* Header */}
          <div style={headerStyle}>
            <button style={navBtnStyle} onClick={prevMonth}>‹</button>
            <p style={monthTitleStyle}>{months[month]} {year}</p>
            <button style={navBtnStyle} onClick={nextMonth}>›</button>
          </div>

          {/* Nama Hari */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '12px 16px 4px' }}>
            {days.map(function(d) {
              return (
                <div key={d} style={{ textAlign: 'center', fontSize: 11, fontWeight: 600, color: 'var(--gray-mid)', letterSpacing: 1, padding: '4px 0' }}>
                  {d}
                </div>
              )
            })}
          </div>

          {/* Grid Tanggal */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '4px 16px 16px', gap: 4 }}>
            {cells.map(function(day, i) {
              if (!day) return <div key={i} />

              var dateStr  = year + '-' + pad(month + 1) + '-' + pad(day)
              var isBooked = bookedDates.indexOf(dateStr) !== -1
              var isToday  = day === now.getDate() && month === now.getMonth() && year === now.getFullYear()
              var isPast   = new Date(dateStr) < new Date(now.getFullYear(), now.getMonth(), now.getDate())

              var cellStyle = {
                textAlign: 'center',
                padding: '8px 4px',
                borderRadius: 6,
                fontSize: 13,
                fontWeight: isToday ? 700 : 400,
                background: isBooked ? 'var(--primary-soft)' : isToday ? 'var(--primary)' : 'transparent',
                color: isBooked ? 'var(--gray-mid)' : isToday ? 'white' : isPast ? 'var(--primary-soft)' : 'var(--dark)',
                textDecoration: isBooked ? 'line-through' : 'none',
              }

              return <div key={i} style={cellStyle}>{day}</div>
            })}
          </div>

          {/* Legend */}
          <div style={{ padding: '12px 16px 16px', borderTop: '1px solid var(--primary-soft)', display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--gray-text)' }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: 'var(--primary)' }} />
              Hari ini
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--gray-text)' }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: 'var(--primary-soft)' }} />
              Sudah ter-booking
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--gray-text)' }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: 'white', border: '1px solid var(--primary-soft)' }} />
              Tersedia
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <p style={{ fontSize: 13, color: 'var(--gray-text)', marginBottom: 16 }}>
            Tanggal yang kamu inginkan masih tersedia? Booking sekarang!
          </p>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            Booking via WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}