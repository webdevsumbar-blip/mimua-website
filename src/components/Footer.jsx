import { Link } from 'react-router-dom'
import { WA_LINK, IG_LINK, TIKTOK_LINK } from '../constants'

var menuLinks = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About Us' },
  { to: '/gallery',      label: 'Gallery' },
  { to: '/blog',         label: 'Blog' },
  { to: '/testimonials', label: 'Testimoni' },
  { to: '/contact',      label: 'Contact Us' },
]

var serviceLinks = [
  { to: '/services/wedding',          label: 'Makeup Wedding' },
  { to: '/services/prewedding',       label: 'Makeup Prewedding' },
  { to: '/services/wisuda',           label: 'Makeup Wisuda' },
  { to: '/services/engagement',       label: 'Makeup Engagement' },
  { to: '/services/sweet-seventeen',  label: 'Sweet Seventeen' },
  { to: '/services/photoshoot',       label: 'Makeup Photoshoot' },
]

var yearNow = new Date().getFullYear()

function MenuCol() {
  return (
    <div className="footer__col">
      <h4 className="footer__col-title">Menu</h4>
      <ul>
        {menuLinks.map(function(item) {
          return (
            <li key={item.to}>
              <Link to={item.to} className="footer__link">{item.label}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function ServiceCol() {
  return (
    <div className="footer__col">
      <h4 className="footer__col-title">Layanan</h4>
      <ul>
        {serviceLinks.map(function(item) {
          return (
            <li key={item.to}>
              <Link to={item.to} className="footer__link">{item.label}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function KontakCol() {
  return (
    <div className="footer__col">
      <h4 className="footer__col-title">Kontak</h4>
      <p className="footer__contact-text">Senin-Jumat: 09.00-20.00</p>
      <p className="footer__contact-text">Sabtu-Minggu: 09.00-18.00</p>
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary footer__wa-btn">
        Chat WhatsApp
      </a>
    </div>
  )
}

function BrandCol() {
  return (
    <div>
      <Link to="/" className="footer__logo">MI<span>MUA</span></Link>
      <p className="footer__tagline">Makeup Artist Profesional</p>
      <p className="footer__desc">
        Mewujudkan tampilan terbaik di setiap momen spesial hidupmu dengan sentuhan profesional.
      </p>
      <div className="footer__socials">
        <a href={IG_LINK} target="_blank" rel="noreferrer" className="footer__social-link">
          📷 @mi.mua
        </a>
        <a href={TIKTOK_LINK} target="_blank" rel="noreferrer" className="footer__social-link">
          🎵 @mi.mua
        </a>
      </div>
    </div>
  )
}

function FooterBottom() {
  return (
    <div className="footer__bottom">
      <p>© {yearNow} MIMUA. All Rights Reserved.</p>
      <div className="footer__bottom-links">
        <a href={IG_LINK}     target="_blank" rel="noreferrer">Instagram</a>
        <a href={TIKTOK_LINK} target="_blank" rel="noreferrer">TikTok</a>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <BrandCol />
          <MenuCol />
          <ServiceCol />
          <KontakCol />
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}