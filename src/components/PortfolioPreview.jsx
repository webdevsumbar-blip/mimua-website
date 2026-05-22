import { WA_LINK, IG_LINK } from '../constants'

const items = [
  { id: 1, label: 'Wedding Look',   img: '/images/portfolio-1.jpg' },
  { id: 2, label: 'Korean Look',    img: '/images/portfolio-2.jpg' },
  { id: 3, label: 'Douyin Look',    img: '/images/portfolio-3.jpg' },
  { id: 4, label: 'Soft Glam',      img: '/images/portfolio-4.jpg' },
  { id: 5, label: 'Adat Sunda',     img: '/images/portfolio-5.jpg' },
  { id: 6, label: 'Mature Elegan',  img: '/images/portfolio-6.jpg' },
  { id: 7, label: 'Prewedding',     img: '/images/portfolio-7.jpg' },
  { id: 8, label: 'Party Look',     img: '/images/portfolio-8.jpg' },
]

export default function PortfolioPreview() {
  return (
    <section className="section portfolio-preview">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portofolio</span>
          <h2 className="section-title">Hasil Karya MIMUA</h2>
        </div>
        <div className="portfolio-preview__grid">
          {items.map(function(item) {
            return (
              <div key={item.id} className="portfolio-preview__item">
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  onError={function(e) {
                    e.target.src = 'https://placehold.co/400x500/663130/fff?text=' + encodeURIComponent(item.label)
                  }}
                />
                <div className="portfolio-preview__overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="portfolio-preview__btns">
          <a href={IG_LINK} target="_blank" rel="noreferrer" className="btn-outline">
            Lihat Semua di Instagram
          </a>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            Booking Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}