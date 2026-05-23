import { Link } from 'react-router-dom'
import { WA_LINK } from '../../constants'

export default function ServiceTemplate({ title, tag, desc, benefits, prices, duration, image }) {
  return (
    <main>
      <div className="page-header">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Services</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--primary-light)', fontSize: 13 }}>{title}</span>
          </div>
          <span className="section-tag">{tag}</span>
          <h1 className="page-header__title">{title}</h1>
          <p className="page-header__sub">{desc}</p>
          <div style={{ marginTop: 20 }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.6)', fontSize: 13, border: '1px solid rgba(255,255,255,0.2)', padding: '6px 14px', borderRadius: 4 }}>
              Kembali ke Home
            </Link>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="service-page__grid">
            <div>
              <img
                src={image}
                alt={title}
                style={{ borderRadius: 6, width: '100%', objectFit: 'cover', maxHeight: 400 }}
                onError={function(e) {
                  e.target.src = 'https://placehold.co/540x400/663130/ffffff?text=' + encodeURIComponent(title)
                }}
              />
            </div>
            <div>
              <span className="section-tag">Keunggulan Layanan</span>
              <h2 className="section-title">Mengapa Pilih Layanan Ini?</h2>
              <div className="service-page__benefits">
                {benefits.map(function(b, i) {
                  return (
                    <div key={i} className="service-page__benefit">
                      <div className="service-page__check">✓</div>
                      <span>{b}</span>
                    </div>
                  )
                })}
              </div>
              {duration && (
                <p style={{ marginTop: 20, fontSize: 13, color: 'var(--gray-text)' }}>
                  Estimasi durasi: <strong style={{ color: 'var(--dark)' }}>{duration}</strong>
                </p>
              )}
              <div style={{ marginTop: 28 }}>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">Booking Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--primary-pale)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>Harga</span>
            <h2 className="section-title">{'Paket ' + title}</h2>
          </div>
          <div className="service-page__pricing">
            {prices.map(function(p, i) {
              return (
                <div key={i} className="service-page__price-card">
                  <p className="service-page__price-name">{p.name}</p>
                  <p className="service-page__price-price">{p.price}</p>
                  <p className="service-page__price-desc">{p.desc}</p>
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">Booking</a>
                </div>
              )
            })}
          </div>
          <p style={{ textAlign: 'center', marginTop: 20, fontSize: 12, color: 'var(--gray-mid)' }}>
            Harga belum termasuk biaya transport
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--primary)', padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: 'white', marginBottom: 12 }}>
          Siap Tampil Memukau?
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 24px' }}>
          Hubungi MIMUA sekarang untuk cek ketersediaan jadwal dan dapatkan penawaran terbaik.
        </p>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-outline btn-outline--light">
          Chat WhatsApp
        </a>
      </section>
    </main>
  )
}