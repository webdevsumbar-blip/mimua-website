import AnimateOnScroll from './AnimateOnScroll'

const reasons = [
  { icon: '🎓', title: 'MUA Bersertifikat', desc: 'Terlatih dan bersertifikat resmi di bidang makeup profesional.' },
  { icon: '🏠', title: 'Home Service',      desc: 'Datang ke lokasi Anda: rumah, hotel, gedung, atau venue acara.' },
  { icon: '⏰', title: 'Tepat Waktu',       desc: 'Komitmen hadir on-time untuk setiap jadwal yang sudah dibooking.' },
  { icon: '💬', title: 'Responsif',         desc: 'Respons cepat via WhatsApp, siap konsultasi kapan saja.' },
]

export default function WhyUs() {
  return (
    <section className="section why-us">
      <div className="container">
        <AnimateOnScroll>
          <span className="section-tag">Mengapa MIMUA</span>
          <h2 className="section-title">4 Alasan Pilih Kami</h2>
        </AnimateOnScroll>
        <div className="why-us__grid">
          {reasons.map(function(r, i) {
            return (
              <AnimateOnScroll key={i} delay={i * 0.1} direction="up">
                <div className="why-us__card">
                  <span className="why-us__icon">{r.icon}</span>
                  <h3 className="why-us__title">{r.title}</h3>
                  <p className="why-us__desc">{r.desc}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}