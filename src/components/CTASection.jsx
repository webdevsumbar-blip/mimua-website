import { WA_LINK, IG_LINK } from '../constants'
import { useNavigate } from 'react-router-dom'

export default function CTASection() {
  var navigate = useNavigate()

  function handleBooking() {
    window.open(WA_LINK, '_blank')
    setTimeout(function() { navigate('/thank-you') }, 500)
  }

  return (
    <section className="cta-section">
      <div className="cta-section__inner">
        <h2 className="cta-section__title">Siap Tampil Memukau?</h2>
        <p className="cta-section__sub">Hubungi kami untuk cek ketersediaan jadwal, konsultasi paket, dan dapatkan penawaran terbaik untuk acara Anda.</p>
        <div className="cta-section__btns">
          <button onClick={handleBooking} className="btn-primary">Booking Sekarang</button>
          <a href={IG_LINK} target="_blank" rel="noreferrer" className="btn-outline btn-outline--light">Lihat Portofolio</a>
        </div>
        <p className="cta-section__hours">Senin-Jumat: 09.00-20.00 · Sabtu-Minggu: 09.00-18.00</p>
      </div>
    </section>
  )
}