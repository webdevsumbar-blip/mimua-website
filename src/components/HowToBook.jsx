import { WA_LINK, IG_LINK, TIKTOK_LINK } from '../constants'

const steps = [
  { num: '1', title: 'Hubungi via WhatsApp',      desc: 'Kirim pesan ke WhatsApp MIMUA untuk mulai konsultasi.' },
  { num: '2', title: 'Informasikan Detail Acara', desc: 'Sampaikan tanggal, jenis acara, dan lokasi.' },
  { num: '3', title: 'Konfirmasi Paket dan Harga',desc: 'Diskusikan paket yang sesuai dan setujui total harga.' },
  { num: '4', title: 'Transfer DP',               desc: 'Bayar DP minimal 50% untuk mengunci tanggal.' },
  { num: '5', title: 'Kami Siap di Hari H',       desc: 'MIMUA hadir tepat waktu dan siap tampil maksimal untukmu.' },
]

export default function HowToBook() {
  return (
    <section className="section how-to-book">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>Cara Booking</span>
          <h2 className="section-title">Cara Booking MIMUA</h2>
        </div>
        <div className="how-to-book__steps">
          {steps.map(function(s, i) {
            return (
              <div key={i} className="how-to-book__step">
                <div className="how-to-book__num">{s.num}</div>
                <div>
                  <h3 className="how-to-book__title">{s.title}</h3>
                  <p className="how-to-book__desc">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            Booking Sekarang via WhatsApp
          </a>
          <p className="how-to-book__hours">Senin-Jumat 09.00-20.00 · Sabtu-Minggu 09.00-18.00</p>
        </div>
      </div>
    </section>
  )
}