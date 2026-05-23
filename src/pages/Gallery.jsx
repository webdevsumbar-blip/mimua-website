import { useState, useEffect } from 'react'
import SEO from '../components/SEO'

var categories = ['Semua', 'Wedding', 'Prewedding', 'Wisuda', 'Party', 'Photoshoot', 'Sweet 17']

var galleryItems = [
  { id: 1,  label: 'Wedding Look',    cat: 'Wedding',    img: '/images/gallery-1.jpg' },
  { id: 2,  label: 'Korean Look',     cat: 'Party',      img: '/images/gallery-2.jpg' },
  { id: 3,  label: 'Douyin Look',     cat: 'Photoshoot', img: '/images/gallery-3.jpg' },
  { id: 4,  label: 'Soft Glam',       cat: 'Party',      img: '/images/gallery-4.jpg' },
  { id: 5,  label: 'Adat Sunda',      cat: 'Wedding',    img: '/images/gallery-5.jpg' },
  { id: 6,  label: 'Mature Elegan',   cat: 'Party',      img: '/images/gallery-6.jpg' },
  { id: 7,  label: 'Prewedding Look', cat: 'Prewedding', img: '/images/gallery-7.jpg' },
  { id: 8,  label: 'Party Look',      cat: 'Party',      img: '/images/gallery-8.jpg' },
  { id: 9,  label: 'Wisuda Look',     cat: 'Wisuda',     img: '/images/gallery-9.jpg' },
  { id: 10, label: 'Sweet 17',        cat: 'Sweet 17',   img: '/images/gallery-10.jpg' },
  { id: 11, label: 'Engagement',      cat: 'Wedding',    img: '/images/gallery-11.jpg' },
  { id: 12, label: 'Photoshoot',      cat: 'Photoshoot', img: '/images/gallery-12.jpg' },
]

var filterBtnBase = {
  padding: '8px 18px',
  borderRadius: 20,
  border: '1.5px solid',
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.2s',
  fontFamily: 'var(--font-body)',
}

var zoomBtnBase = {
  background: 'rgba(255,255,255,0.15)',
  border: '1px solid rgba(255,255,255,0.3)',
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

var navBtnStyle = {
  background: 'rgba(255,255,255,0.15)',
  color: 'white',
  border: '1px solid rgba(255,255,255,0.3)',
  fontSize: 22,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 44,
  height: 44,
  borderRadius: '50%',
}

var closeBtnStyle = {
  position: 'absolute',
  top: -16,
  right: -16,
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: 'var(--primary)',
  color: 'white',
  border: 'none',
  fontSize: 16,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

var overlayStyle = {
  position: 'fixed',
  inset: 0,
  zIndex: 9000,
  background: 'rgba(0,0,0,0.92)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
}

var hintStyle = {
  position: 'absolute',
  bottom: 20,
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'rgba(255,255,255,0.3)',
  fontSize: 11,
  letterSpacing: 1,
  whiteSpace: 'nowrap',
}

var zoomWrapStyle = {
  position: 'absolute',
  bottom: -52,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 8,
  alignItems: 'center',
}

var labelStyle = {
  textAlign: 'center',
  color: 'white',
  marginTop: 12,
  fontSize: 14,
  fontWeight: 500,
}

var counterStyle = {
  textAlign: 'center',
  color: 'rgba(255,255,255,0.4)',
  fontSize: 11,
  marginTop: 4,
}

function FilterBtn(props) {
  var isActive = props.active === props.cat
  var style = Object.assign({}, filterBtnBase, {
    borderColor: isActive ? 'var(--primary)' : 'var(--primary-soft)',
    background: isActive ? 'var(--primary)' : 'transparent',
    color: isActive ? 'white' : 'var(--gray-text)',
  })
  return (
    <button style={style} onClick={function() { props.onSelect(props.cat) }}>
      {props.cat}
    </button>
  )
}

function GalleryItem(props) {
  return (
    <div
      className="gallery__item"
      onClick={function() { props.onOpen(props.item) }}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={props.item.img}
        alt={props.item.label}
        loading="lazy"
        onError={function(e) {
          e.target.src = 'https://placehold.co/400x500/663130/ffffff?text=' + encodeURIComponent(props.item.label)
        }}
      />
      <div className="gallery__overlay">🔍 {props.item.label}</div>
    </div>
  )
}

function ZoomBtn(props) {
  var style = Object.assign({}, zoomBtnBase, props.extraStyle)
  return (
    <button style={style} onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default function Gallery() {
  var activeArr   = useState('Semua')
  var active      = activeArr[0]
  var setActive   = activeArr[1]

  var lightboxArr = useState(null)
  var lightbox    = lightboxArr[0]
  var setLightbox = lightboxArr[1]

  var zoomArr     = useState(1)
  var zoom        = zoomArr[0]
  var setZoom     = zoomArr[1]

  var touchArr    = useState(null)
  var touchStart  = touchArr[0]
  var setTouchStart = touchArr[1]

  var filtered = active === 'Semua'
    ? galleryItems
    : galleryItems.filter(function(item) { return item.cat === active })

  function openLightbox(item) {
    setLightbox(item)
    setZoom(1)
  }

  function closeLightbox() {
    setLightbox(null)
    setZoom(1)
  }

  function prevPhoto() {
    var idx = filtered.findIndex(function(i) { return i.id === lightbox.id })
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length])
    setZoom(1)
  }

  function nextPhoto() {
    var idx = filtered.findIndex(function(i) { return i.id === lightbox.id })
    setLightbox(filtered[(idx + 1) % filtered.length])
    setZoom(1)
  }

  function zoomIn()    { setZoom(function(p) { return Math.min(3, Math.round((p + 0.25) * 100) / 100) }) }
  function zoomOut()   { setZoom(function(p) { return Math.max(0.5, Math.round((p - 0.25) * 100) / 100) }) }
  function zoomReset() { setZoom(1) }

  function onWheel(e) {
    e.preventDefault()
    var delta = e.deltaY > 0 ? -0.15 : 0.15
    setZoom(function(prev) {
      var next = Math.round((prev + delta) * 100) / 100
      if (next < 0.5) return 0.5
      if (next > 3) return 3
      return next
    })
  }

  // Keyboard navigation
  useEffect(function() {
    function onKeyDown(e) {
      if (!lightbox) return
      if (e.key === 'Escape')     closeLightbox()
      if (e.key === 'ArrowLeft')  prevPhoto()
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === '+')          zoomIn()
      if (e.key === '-')          zoomOut()
      if (e.key === '0')          zoomReset()
    }
    window.addEventListener('keydown', onKeyDown)
    return function() { window.removeEventListener('keydown', onKeyDown) }
  }, [lightbox, zoom, filtered])

  // Swipe gesture HP
  useEffect(function() {
    function onTouchStart(e) {
      setTouchStart(e.touches[0].clientX)
    }
    function onTouchEnd(e) {
      if (!touchStart || !lightbox) return
      var diff = touchStart - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextPhoto()
        else prevPhoto()
      }
      setTouchStart(null)
    }
    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchend', onTouchEnd)
    return function() {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [touchStart, lightbox, filtered])

  var currentIndex = lightbox
    ? filtered.findIndex(function(i) { return i.id === lightbox.id }) + 1
    : 0

  var imgSrc = lightbox
    ? 'https://placehold.co/520x650/663130/ffffff?text=' + encodeURIComponent(lightbox.label)
    : ''

  return (
    <main>
      <SEO
        title="Gallery"
        description="Lihat hasil karya terbaik MIMUA untuk berbagai jenis makeup."
      />

      <div className="page-header">
        <div className="container">
          <span className="section-tag">Portofolio</span>
          <h1 className="page-header__title">Gallery MIMUA</h1>
          <p className="page-header__sub">
            Kumpulan hasil karya terbaik dari berbagai layanan makeup yang telah kami kerjakan.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">

          {/* Filter Buttons */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {categories.map(function(cat) {
              return (
                <FilterBtn
                  key={cat}
                  cat={cat}
                  active={active}
                  onSelect={setActive}
                />
              )
            })}
          </div>

          {/* Gallery Grid */}
          <div className="gallery__grid">
            {filtered.map(function(item) {
              return (
                <GalleryItem
                  key={item.id}
                  item={item}
                  onOpen={openLightbox}
                />
              )
            })}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--gray-mid)', padding: '40px 0' }}>
              Belum ada foto untuk kategori ini.
            </p>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={closeLightbox} onWheel={onWheel} style={overlayStyle}>
          <div
            onClick={function(e) { e.stopPropagation() }}
            style={{ position: 'relative', maxWidth: 520, width: '100%' }}
          >
            {/* Foto */}
            <img
              src={lightbox.img}
              alt={lightbox.label}
              style={{ width: '100%', borderRadius: 6, display: 'block', maxHeight: '80vh', objectFit: 'contain', transform: 'scale(' + zoom + ')', transition: 'transform 0.2s ease' }}
              onError={function(e) { e.target.src = imgSrc }}
            />

            {/* Label */}
            <p style={labelStyle}>{lightbox.label}</p>

            {/* Counter */}
            <p style={counterStyle}>
              {currentIndex} / {filtered.length} · Scroll untuk zoom · Geser untuk navigasi
            </p>

            {/* Tombol Tutup */}
            <button onClick={closeLightbox} style={closeBtnStyle}>X</button>

            {/* Tombol Prev */}
            <button
              onClick={prevPhoto}
              style={{ ...navBtnStyle, position: 'absolute', left: -20, top: '45%', transform: 'translateY(-50%)' }}
            >
              ‹
            </button>

            {/* Tombol Next */}
            <button
              onClick={nextPhoto}
              style={{ ...navBtnStyle, position: 'absolute', right: -20, top: '45%', transform: 'translateY(-50%)' }}
            >
              ›
            </button>

            {/* Tombol Zoom */}
            <div style={zoomWrapStyle}>
              <ZoomBtn
                label="-"
                onClick={zoomOut}
                extraStyle={{ width: 32, height: 32, borderRadius: '50%', fontSize: 18 }}
              />
              <ZoomBtn
                label={Math.round(zoom * 100) + '%'}
                onClick={zoomReset}
                extraStyle={{ padding: '0 12px', height: 32, borderRadius: 16, fontSize: 12 }}
              />
              <ZoomBtn
                label="+"
                onClick={zoomIn}
                extraStyle={{ width: 32, height: 32, borderRadius: '50%', fontSize: 18 }}
              />
            </div>
          </div>

          {/* Hint */}
          <p style={hintStyle}>
            ESC tutup · ← → navigasi · Scroll zoom · Geser di HP
          </p>
        </div>
      )}

    </main>
  )
}