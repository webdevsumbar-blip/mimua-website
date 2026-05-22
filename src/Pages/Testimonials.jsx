import { WA_LINK } from '../constants'

var list = [
  { id: 1, initials: 'NA', name: 'Nita A.', service: 'Makeup Wisuda', stars: 5, text: 'Suka banget sama hasil makeupnya! Semua orang bilang pangling.' },
  { id: 2, initials: 'ZR', name: 'Zairani', service: 'Makeup Party', stars: 5, text: 'Alhamdulillah semua berjalan lancar. Kalau ada acara lagi pasti panggil MIMUA lagi.' },
  { id: 3, initials: 'CA', name: 'Carissa A.', service: 'Makeup Party', stars: 5, text: 'The makeup is very detailed and good! Long lasting from morning to night.' },
  { id: 4, initials: 'DJ', name: 'Dewi J.', service: 'Makeup Party', stars: 5, text: 'Kaknya ramah, hasil makeupnya flawless banget. Very recommended!' },
  { id: 5, initials: 'NS', name: 'Nasuha', service: 'Makeup Party', stars: 5, text: 'Terima kasih banyak ya. Makeupnya cantik! Semoga bisa pakai jasa lagi.' },
  { id: 6, initials: 'AU', name: 'Aura', service: 'Makeup Wisuda', stars: 5, text: 'Bagus bangeett! Makeupnya tahan lama dan hasilnya sesuai ekspektasi.' },
  { id: 7, initials: 'RA', name: 'Rini A.', service: 'Makeup Wedding', stars: 5, text: 'Hasilnya luar biasa! Tamu undangan banyak yang memuji. Terima kasih MIMUA!' },
  { id: 8, initials: 'FA', name: 'Fitria A.', service: 'Makeup Party', stars: 5, text: 'Kaknya ramah, suka banget sama makeupnya! Sangat recommended.' },
  { id: 9, initials: 'BS', name: 'Bella S.', service: 'Makeup Wedding', stars: 5, text: 'Sangat memuaskan! Makeupnya tahan dari pagi sampai malam.' },
]

function Card(props) {
  var t = props.item
  var stars = ''
  var i = 0
  while (i < t.stars) { stars += '★'; i++ }
  return (
    <div className="testimonials__card">
      <div className="testimonials__header">
        <div className="testimonials__avatar">{t.initials}</div>
        <div>
          <p className="testimonials__name">{t.name}</p>
          <p className="testimonials__service">{t.service}</p>
        </div>
      </div>
      <div className="testimonials__stars">{stars}</div>
      <p className="testimonials__text">"{t.text}"</p>
    </div>
  )
}

function Stats() {
  var items = [
    { val: '100+', label: 'Klien Puas' },
    { val: '4.9/5', label: 'Rating' },
    { val: '100%', label: 'Rekomendasi' },
  ]
  return (
    <div style={{ background: 'var(--primary)', padding: '32px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, textAlign: 'center' }}>
          {items.map(function(s, i) {
            return (
              <div key={i}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: 'white', fontWeight: 700 }}>{s.val}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: 2, textTransform: 'uppercase' }}>{s.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Grid() {
  return (
    <section className="section" style={{ background: 'var(--dark)' }}>
      <div className="container">
        <div className="testimonials__grid">
          {list.map(function(t) {
            return <Card key={t.id} item={t} />
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">Booking Sekarang</a>
        </div>
      </div>
    </section>
  )
}

function Header() {
  return (
    <div className="page-header">
      <div className="container">
        <span className="section-tag">Ulasan Klien</span>
        <h1 className="page-header__title">Testimoni Klien</h1>
        <p className="page-header__sub">Kepuasan klien adalah prioritas utama MIMUA.</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <main>
      <Header />
      <Stats />
      <Grid />
    </main>
  )
}