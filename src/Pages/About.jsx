import SEO from '../components/SEO'
import AnimateOnScroll from '../components/AnimateOnScroll'
import { WA_LINK } from '../constants'

const milestones = [
  { tahun: '2020', judul: 'Memulai Karir',       desc: 'Memulai perjalanan sebagai makeup artist dengan mengikuti kursus makeup profesional bersertifikat.' },
  { tahun: '2021', judul: 'Klien Pertama',        desc: 'Melayani klien pertama untuk acara wisuda dan mendapat respon yang sangat positif.' },
  { tahun: '2022', judul: 'Spesialisasi Wedding', desc: 'Fokus pada makeup wedding dan mulai melayani berbagai acara pernikahan di daerah sekitar.' },
  { tahun: '2023', judul: '100+ Klien Terlayani', desc: 'Mencapai milestone 100+ klien puas dengan rating 4.9/5 dari semua ulasan yang masuk.' },
  { tahun: '2024', judul: 'Ekspansi Layanan',     desc: 'Menambah layanan baru dan memperluas jangkauan ke berbagai kota di Indonesia.' },
]

const komitmen = [
  { icon: '💎', title: 'Kualitas Terbaik', desc: 'Menggunakan produk makeup berkualitas tinggi yang aman, halal, dan tahan lama.' },
  { icon: '❤️', title: 'Penuh Dedikasi',   desc: 'Setiap klien diperlakukan spesial. Hasilmu adalah kebanggaan kami.' },
  { icon: '🎓', title: 'Profesional',      desc: 'Bersertifikat resmi dengan jam terbang tinggi di berbagai jenis acara.' },
  { icon: '⭐', title: 'Kepuasan Klien',   desc: 'Rating 4.9/5 dari 100+ klien yang sudah mempercayakan penampilan mereka.' },
]

const skills = [
  { icon: '💍', label: 'Makeup Wedding',    level: 95 },
  { icon: '📸', label: 'Makeup Prewedding', level: 90 },
  { icon: '🎓', label: 'Makeup Wisuda',     level: 92 },
  { icon: '💒', label: 'Makeup Engagement', level: 88 },
  { icon: '🎂', label: 'Sweet Seventeen',   level: 85 },
  { icon: '🎨', label: 'Makeup Photoshoot', level: 90 },
]

const stats = [
  ['100+', 'Klien'],
  ['4+',   'Tahun'],
  ['4.9',  'Rating'],
]

function MilestoneItem({ m, showLine }) {
  var lineStyle = {
    position: 'absolute',
    left: 43,
    top: 44,
    width: 2,
    height: 'calc(100% - 8px)',
    background: 'var(--primary-soft)',
  }

  var bubbleStyle = {
    width: 88,
    height: 44,
    borderRadius: 22,
    background: 'var(--primary)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-heading)',
    fontSize: 16,
    fontWeight: 700,
    flexShrink: 0,
    position: 'relative',
    zIndex: 1,
  }

  var wrapStyle = {
    display: 'flex',
    gap: 24,
    paddingBottom: 36,
    position: 'relative',
  }

  return (
    <div style={wrapStyle}>
      {showLine && <div style={lineStyle} />}
      <div style={bubbleStyle}>{m.tahun}</div>
      <div style={{ paddingTop: 8 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--dark)', marginBottom: 6, fontFamily: 'var(--font-body)' }}>
          {m.judul}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--gray-text)', lineHeight: 1.8 }}>
          {m.desc}
        </p>
      </div>
    </div>
  )
}

function SkillItem({ skill }) {
  var barStyle = {
    width: skill.level + '%',
    height: '100%',
    background: 'var(--primary)',
    borderRadius: 4,
    transition: 'width 1s ease',
  }

  return (
    <div style={{ background: 'var(--primary-pale)', border: '1px solid var(--primary-soft)', borderRadius: 6, padding: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: 24 }}>{skill.icon}</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--dark)' }}>{skill.label}</span>
      </div>
      <div style={{ background: 'var(--primary-soft)', borderRadius: 4, height: 6, overflow: 'hidden' }}>
        <div style={barStyle} />
      </div>
      <p style={{ fontSize: 11, color: 'var(--primary)', marginTop: 6, textAlign: 'right', fontWeight: 600 }}>
        {skill.level}%
      </p>
    </div>
  )
}

export default function About() {
  var lastIndex = milestones.length - 1

  return (
    <main>
      <SEO
        title="About Us"
        description="Kenali lebih dekat MIMUA, makeup artist profesional bersertifikat dengan pengalaman 4+ tahun."
      />

      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <span className="section-tag">About Us</span>
          <h1 className="page-header__title">Tentang MIMUA</h1>
          <p className="page-header__sub">
            MUA Profesional Bersertifikat yang berdedikasi menghadirkan
            tampilan terbaik di setiap momen spesialmu.
          </p>
        </div>
      </div>

      {/* Main About */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="about__grid">

            <AnimateOnScroll direction="left">
              <div className="about__photo">
                <img
                  src="/images/about.jpg"
                  alt="MIMUA Makeup Artist"
                  style={{ width: '100%', borderRadius: 6, objectFit: 'cover' }}
                  onError={function(e) {
                    e.target.src = 'https://placehold.co/540x620/663130/ffffff?text=Foto+MIMUA'
                  }}
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div>
                <span className="section-tag">MUA Profesional</span>
                <h2 className="section-title">Halo, Saya MIMUA!</h2>

                <div className="about__stats">
                  {stats.map(function(item) {
                    return (
                      <div key={item[1]} className="about__stat">
                        <span className="about__stat-num">{item[0]}</span>
                        <span className="about__stat-label">{item[1]}</span>
                      </div>
                    )
                  })}
                </div>

                <p style={{ fontSize: 14, color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 16 }}>
                  MIMUA adalah makeup artist profesional bersertifikat dengan
                  pengalaman lebih dari 4 tahun di industri kecantikan.
                  Spesialis dalam makeup wedding, prewedding, wisuda, dan
                  berbagai acara spesial lainnya.
                </p>
                <p style={{ fontSize: 14, color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 28 }}>
                  Dengan layanan home service, kami hadir langsung ke lokasi
                  Anda. Setiap detail dikerjakan dengan penuh dedikasi agar
                  Anda tampil percaya diri di hari terpenting.
                </p>

                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
                  Konsultasi Sekarang
                </a>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Milestone */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-tag" style={{ justifyContent: 'center' }}>Perjalanan</span>
              <h2 className="section-title">Milestone MIMUA</h2>
            </div>
          </AnimateOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 680, margin: '0 auto' }}>
            {milestones.map(function(m, i) {
              var showLine = i !== lastIndex
              return (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <MilestoneItem m={m} showLine={showLine} />
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Komitmen */}
      <section className="section" style={{ background: 'var(--primary-pale)' }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span className="section-tag" style={{ justifyContent: 'center' }}>Nilai Kami</span>
              <h2 className="section-title">Komitmen MIMUA</h2>
            </div>
          </AnimateOnScroll>
          <div className="why-us__grid">
            {komitmen.map(function(item, i) {
              return (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <div className="why-us__card">
                    <span className="why-us__icon">{item.icon}</span>
                    <h3 className="why-us__title">{item.title}</h3>
                    <p className="why-us__desc">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Spesialisasi */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span className="section-tag" style={{ justifyContent: 'center' }}>Keahlian</span>
              <h2 className="section-title">Spesialisasi Layanan</h2>
            </div>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {skills.map(function(skill, i) {
              return (
                <AnimateOnScroll key={i} delay={i * 0.08}>
                  <SkillItem skill={skill} />
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary)', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: 'white', marginBottom: 12 }}>
          Siap Bekerja Sama?
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.8 }}>
          Hubungi MIMUA sekarang untuk konsultasi dan booking jadwal makeup untuk acara spesialmu.
        </p>
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-outline btn-outline--light">
          Chat WhatsApp
        </a>
      </section>

    </main>
  )
}