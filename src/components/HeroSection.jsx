import { Link } from 'react-router-dom'
import { WA_LINK } from '../constants'
import { useState, useEffect, useRef } from 'react'
import Particles from './Particles'

var words = ['Wedding', 'Prewedding', 'Wisuda', 'Sweet Seventeen', 'Photoshoot']

function TypingText() {
  var wordIndexArr = useState(0)
  var wordIndex = wordIndexArr[0]
  var setWordIndex = wordIndexArr[1]
  var textArr = useState('')
  var text = textArr[0]
  var setText = textArr[1]
  var isDeletingArr = useState(false)
  var isDeleting = isDeletingArr[0]
  var setIsDeleting = isDeletingArr[1]

  useEffect(function() {
    var current = words[wordIndex]
    var speed = isDeleting ? 60 : 120
    var timer = setTimeout(function() {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(function() { setIsDeleting(true) }, 1500)
        }
      } else {
        setText(current.substring(0, text.length - 1))
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setWordIndex(function(prev) { return (prev + 1) % words.length })
        }
      }
    }, speed)
    return function() { clearTimeout(timer) }
  }, [text, isDeleting, wordIndex])

  return (
    <span style={{ color: '#E8C0BE' }}>
      {text}
      <span style={{ animation: 'blink 0.8s infinite', borderRight: '2px solid #E8C0BE', marginLeft: 2 }} />
    </span>
  )
}

export default function HeroSection() {
  var bgRef = useRef(null)

  useEffect(function() {
    function onScroll() {
      if (bgRef.current) {
        var offset = window.scrollY * 0.4
        bgRef.current.style.transform = 'translateY(' + offset + 'px)'
      }
    }
    window.addEventListener('scroll', onScroll)
    return function() { window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <section className="hero">
      <div className="hero__bg" ref={bgRef} />
      <div className="hero__overlay" /><Particles />
      <div className="hero__content">
        <p className="hero__tag">MUA Profesional Bersertifikat</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 7vw, 86px)', fontWeight: 300, fontStyle: 'italic', color: 'white', lineHeight: 1.15, marginBottom: 20, letterSpacing: '0.5px' }}>
          Tampil Memukau untuk<br />
          <TypingText />
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, letterSpacing: '0.8px', marginBottom: 32, maxWidth: 520 }}>
          Makeup Artist profesional untuk Wedding, Prewedding, Wisuda & acara spesial lainnya. Melayani home service ke lokasi Anda.
        </p>
        <div className="hero__btns">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">Booking Sekarang</a>
          <Link to="/gallery" className="btn-outline btn-outline--light">Lihat Portofolio</Link>
        </div>
      </div>
    </section>
  )
}