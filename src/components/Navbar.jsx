import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const serviceLinks = [
  { to: '/services/wedding',         label: 'Makeup Wedding' },
  { to: '/services/prewedding',      label: 'Makeup Prewedding' },
  { to: '/services/wisuda',          label: 'Makeup Wisuda' },
  { to: '/services/engagement',      label: 'Makeup Engagement' },
  { to: '/services/sweet-seventeen', label: 'Sweet Seventeen' },
  { to: '/services/photoshoot',      label: 'Makeup Photoshoot' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled]         = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isServiceActive = serviceLinks.some(s => location.pathname === s.to)

  return (
    <header className={scrolled ? 'navbar navbar--scrolled' : 'navbar'}>
      <div className="navbar__inner container">

        {/* Logo */}
        <Link to="/" className="navbar__logo">
          MI<span>MUA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            About Us
          </NavLink>

          <div className="navbar__dropdown-wrap">
            <button className={isServiceActive ? 'navbar__link navbar__link--btn active' : 'navbar__link navbar__link--btn'}>
              Services <span className="navbar__arrow">▾</span>
            </button>
            <div className="navbar__dropdown">
              {serviceLinks.map(s => (
                <NavLink key={s.to} to={s.to} className="navbar__dropdown-item">
                  {s.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            Gallery
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            Contact Us
          </NavLink>
        </nav>

        {/* Hamburger Button */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="bar"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="bar"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="bar"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <NavLink to="/" end className="navbar__mobile-link">Home</NavLink>
            <NavLink to="/about" className="navbar__mobile-link">About Us</NavLink>

            <button
              className="navbar__mobile-link navbar__mobile-link--btn"
              onClick={() => setServicesOpen(!servicesOpen)}
              style={{
                width: '100%',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>Services</span>
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="navbar__mobile-sub"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden' }}
                >
                  {serviceLinks.map(s => (
                    <NavLink key={s.to} to={s.to} className="navbar__mobile-sub-link">
                      {s.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <NavLink to="/gallery" className="navbar__mobile-link">Gallery</NavLink>
            <NavLink to="/blog"    className="navbar__mobile-link">Blog</NavLink>
            <NavLink to="/contact" className="navbar__mobile-link">Contact Us</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}