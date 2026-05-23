import { useState } from 'react'
import { WA_LINK, IG_LINK, TIKTOK_LINK } from '../constants'
import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'

const contactItems = [
  { icon: '📱', label: 'WhatsApp',        val: '082261838802',                                        href: WA_LINK },
  { icon: '📷', label: 'Instagram',       val: '@mi.mua',                                             href: IG_LINK },
  { icon: '🎵', label: 'TikTok',          val: '@mi.mua',                                             href: TIKTOK_LINK },
  { icon: '⏰', label: 'Jam Operasional', val: 'Senin-Jumat 09.00-20.00 | Sabtu-Minggu 09.00-18.00', href: null },
]

const jenisAcara = [
  'Makeup Wedding',
  'Makeup Prewedding',
  'Makeup Wisuda',
  'Makeup Engagement',
  'Sweet Seventeen',
  'Makeup Photoshoot',
  'Makeup Party',
]

export default function Contact() {
  var emptyForm = { nama: '', acara: '', tanggal: '', lokasi: '' }
  var inputState = useState(emptyForm)
  var form = inputState[0]
  var setForm = inputState[1]

  function handleChange(e) {
    var key = e.target.name
    var val = e.target.value
    setForm({ nama: key === 'nama' ? val : form.nama, acara: key === 'acara' ? val : form.acara, tanggal: key === 'tanggal' ? val : form.tanggal, lokasi: key === 'lokasi' ? val : form.lokasi })
  }

  function handleSubmit() {
    if (!form.nama || !form.acara || !form.tanggal || !form.lokasi) {
      alert('Mohon lengkapi semua kolom terlebih dahulu.')
      return
    }
    var pesan = 'Halo MIMUA, saya mau booking makeup\nNama: ' + form.nama + '\nAcara: ' + form.acara + '\nTanggal: ' + form.tanggal + '\nLokasi: ' + form.lokasi
    window.open('https://wa.me/6282261838802?text=' + encodeURIComponent(pesan), '_blank')
  }

  var inputStyle = {
    width: '100%',
    padding: '10px 14px',
    fontSize: 13,
    border: '1px solid var(--primary-soft)',
    borderRadius: 4,
    background: 'white',
    color: 'var(--dark)',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    marginBottom: 12,
  }

  var labelStyle = {
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--gray-text)',
    letterSpacing: 1,
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: 6,
  }

  return (
    <main>
      <SEO
        title="Contact Us"
        description="Hubungi MIMUA untuk konsultasi dan booking makeup."
      />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <span className="section-tag">Hubungi Kami</span>
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__sub">
            Siap melayani konsultasi dan booking untuk acara spesialmu.
          </p>
        </div>
      </div>

      {/* Kontak + Form */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="contact__grid">

            {/* Kiri - Info Kontak */}
            <AnimateOnScroll direction="left">
              <div>
                <span className="section-tag">Informasi Kontak</span>
                <h2 className="section-title">Hubungi MIMUA</h2>
                <div className="contact__items">
                  {contactItems.map(function(c, i) {
                    return (
                      <div key={i} className="contact__item">
                        <span className="contact__icon">{c.icon}</span>
                        <div>
                          <p className="contact__label">{c.label}</p>
                          {c.href
                            ? <a href={c.href} target="_blank" rel="noreferrer" className="contact__val">{c.val}</a>
                            : <span className="contact__val">{c.val}</span>
                          }
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="contact__social-btns">
                  <a href={IG_LINK}     target="_blank" rel="noreferrer" className="btn-outline">Instagram</a>
                  <a href={TIKTOK_LINK} target="_blank" rel="noreferrer" className="btn-outline">TikTok</a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Kanan - Form WA */}
            <AnimateOnScroll direction="right">
              <div className="contact__cta-card">
                <h3 style={{ marginBottom: 6 }}>Booking via WhatsApp</h3>
                <p style={{ marginBottom: 20 }}>
                  Isi form di bawah, lalu klik tombol — WhatsApp langsung terbuka dengan pesan yang sudah terisi!
                </p>
                <div>
                  <label style={labelStyle}>Nama Lengkap</label>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Contoh: Siti Rahma"
                    value={form.nama}
                    onChange={handleChange}
                    style={inputStyle}
                  />

                  <label style={labelStyle}>Jenis Acara</label>
                  <select name="acara" value={form.acara} onChange={handleChange} style={inputStyle}>
                    <option value="">Pilih jenis acara</option>
                    {jenisAcara.map(function(j) {
                      return <option key={j} value={j}>{j}</option>
                    })}
                  </select>

                  <label style={labelStyle}>Tanggal Acara</label>
                  <input
                    type="date"
                    name="tanggal"
                    value={form.tanggal}
                    onChange={handleChange}
                    style={inputStyle}
                  />

                  <label style={labelStyle}>Lokasi Acara</label>
                  <input
                    type="text"
                    name="lokasi"
                    placeholder="Contoh: Padang, Sumatera Barat"
                    value={form.lokasi}
                    onChange={handleChange}
                    style={inputStyle}
                  />

                  <button
                    onClick={handleSubmit}
                    className="btn-primary"
                    style={{ width: '100%', marginTop: 4, justifyContent: 'center', fontSize: 14 }}
                  >
                    Kirim via WhatsApp
                  </button>

                  <p style={{ fontSize: 12, color: 'var(--gray-mid)', textAlign: 'center', marginTop: 10 }}>
                    Senin-Jumat 09.00-20.00 · Sabtu-Minggu 09.00-18.00
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section" style={{ background: 'var(--primary-pale)', paddingTop: 0 }}>
        <div className="container">
          <AnimateOnScroll>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, marginBottom: 8, color: 'var(--dark)' }}>
              Area Layanan MIMUA
            </h3>
            <p style={{ fontSize: 13, color: 'var(--gray-text)', marginBottom: 20 }}>
              Melayani home service ke seluruh area dan sekitarnya
            </p>
          </AnimateOnScroll>

          <div style={{
            borderRadius: 8,
            overflow: 'hidden',
            border: '1px solid var(--primary-soft)',
            height: 420,
            boxShadow: '0 4px 20px rgba(102,49,48,0.08)',
          }}>
            <iframe
              title="Area Layanan MIMUA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126933.42775858637!2d100.2793088!3d-0.9492202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b93f38dc3ef9%3A0x9f7c6e5c0b09e3d0!2sPadang%2C%20Kota%20Padang%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </main>
  )
}