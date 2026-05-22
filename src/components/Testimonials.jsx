import { testimonials } from '../data/testimonials'
import AnimateOnScroll from './AnimateOnScroll'

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <AnimateOnScroll>
          <span className="section-tag">Testimoni Klien</span>
          <h2 className="section-title">Apa Kata Mereka</h2>
        </AnimateOnScroll>
        <div className="testimonials__grid">
          {testimonials.map(function(t, i) {
            return (
              <AnimateOnScroll key={t.id} delay={i * 0.1}>
                <div className="testimonials__card">
                  <div className="testimonials__header">
                    {/* Foto klien */}
                    <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                      <img
                        src={t.img}
                        alt={t.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={function(e) {
                          e.target.style.display = 'none'
                          e.target.parentNode.style.background = 'var(--primary)'
                          e.target.parentNode.style.display = 'flex'
                          e.target.parentNode.style.alignItems = 'center'
                          e.target.parentNode.style.justifyContent = 'center'
                          e.target.parentNode.innerHTML = '<span style="color:white;font-size:14px;font-weight:600">' + t.initials + '</span>'
                        }}
                      />
                    </div>
                    <div>
                      <p className="testimonials__name">{t.name}</p>
                      <p className="testimonials__service">{t.service}</p>
                    </div>
                  </div>
                  <div className="testimonials__stars">★★★★★</div>
                  <p className="testimonials__text">"{t.text}"</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}