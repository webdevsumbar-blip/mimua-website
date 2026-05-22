import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--off-white)',
      padding: '40px 24px',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', maxWidth: 480 }}
      >
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 120,
          fontWeight: 700,
          color: 'var(--primary-soft)',
          lineHeight: 1,
          marginBottom: 16,
        }}>
          404
        </div>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 32,
          color: 'var(--dark)',
          marginBottom: 12,
        }}>
          Halaman Tidak Ditemukan
        </h1>
        <p style={{
          fontSize: 15,
          color: 'var(--gray-text)',
          lineHeight: 1.8,
          marginBottom: 32,
        }}>
          Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary">Kembali ke Home</Link>
          <Link to="/contact" className="btn-outline">Hubungi Kami</Link>
        </div>
      </motion.div>
    </main>
  )
}