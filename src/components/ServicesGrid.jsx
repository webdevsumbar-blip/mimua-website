import { Link } from 'react-router-dom'
import { services } from '../data/services'
import AnimateOnScroll from './AnimateOnScroll'

export default function ServicesGrid() {
  return (
    <section className="section services-grid">
      <div className="container">
        <AnimateOnScroll>
          <span className="section-tag">Layanan Kami</span>
          <h2 className="section-title">Jasa Makeup Artist</h2>
        </AnimateOnScroll>
        <div className="services-grid__grid">
          {services.map(function(s, i) {
            return (
              <AnimateOnScroll key={s.id} delay={i * 0.08}>
                <div className="flip-card">
                  <div className="flip-card__inner">

                    {/* Depan */}
                    <div className="flip-card__front">
                      <div className="services-grid__num">{'0' + (i + 1)}</div>
                      <span className="services-grid__icon">{s.icon}</span>
                      <h3 className="services-grid__title">{s.title}</h3>
                      <p className="services-grid__desc">{s.desc}</p>
                      <p style={{ fontSize: 12, color: 'var(--primary-light)', marginTop: 'auto', letterSpacing: 1 }}>Hover untuk lihat harga</p>
                    </div>

                    {/* Belakang */}
                    <div className="flip-card__back">
                      <span className="services-grid__icon">{s.icon}</span>
                      <h3 className="services-grid__title" style={{ color: 'white' }}>{s.title}</h3>
                      <p className="services-grid__price" style={{ color: '#E8C0BE', fontSize: 20, margin: '12px 0' }}>{s.price}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>{s.desc}</p>
                      <Link to={s.path} className="btn-outline btn-outline--light" style={{ fontSize: 12 }}>
                        Selengkapnya
                      </Link>
                    </div>

                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}