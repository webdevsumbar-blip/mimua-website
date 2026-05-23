import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { IG_LINK, TIKTOK_LINK } from '../constants'

var steps = [
  { num: '1', text: 'MIMUA akan membalas pesanmu dalam waktu singkat' },
  { num: '2', text: 'Diskusikan detail acara, tanggal, dan paket yang sesuai' },
  { num: '3', text: 'Lakukan pembayaran DP minimal 50% untuk mengunci jadwal' },
  { num: '4', text: 'MIMUA siap hadir di hari H dengan tampilan terbaik!' },
]

export default function ThankYou() {
  useEffect(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <main style={{ minHeight: '100vh', background: 'var(--off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>

        {/* Icon */}
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 36 }}>
          💄
        </div>

        {/* Judul */}
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 5vw, 42px)', color: 'var(--dark)', marginBottom: 12 }}>
          Terima Kasih!
        </h1>
        <p style={{ fontSize: 15, color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 40 }}>
          Pesan kamu sudah terkirim ke WhatsApp MIMUA. Kami akan segera membalas dan membantu mewujudkan tampilan terbaikmu!
        </p>

        {/* Next Steps */}
        <div style={{ background: 'white', border: '1px solid var(--primary-soft)', borderRadius: 8, padding: '28px 24px', marginBottom: 32, textAlign: 'left' }}>
          <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 20, fontWeight: 600 }}>
            Langkah Selanjutnya
          </p>
          {steps.map(function(s, i) {
            var isLast = i === steps.length - 1
            return (
              <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: isLast ? 0 : 20, position: 'relative' }}>
                {!isLast && (
                  <div style={{ position: 'absolute', left: 16, top: 32, width: 2, height: 'calc(100% - 12px)', background: 'var(--primary-soft)' }} />
                )}
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  {s.num}
                </div>
                <p style={{ fontSize: 14, color: 'var(--gray-text)', lineHeight: 1.7, paddingTop: 4 }}>
                  {s.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* Jam Operasional */}
        <div style={{ background: 'var(--primary-pale)', border: '1px solid var(--primary-soft)', borderRadius: 8, padding: '16px 24px', marginBottom: 32 }}>
          <p style={{ fontSize: 13, color: 'var(--gray-text)', lineHeight: 1.8 }}>
            ⏰ Jam operasional MIMUA:<br />
            <strong style={{ color: 'var(--dark)' }}>Senin-Jumat 09.00-20.00 · Sabtu-Minggu 09.00-18.00</strong>
          </p>
        </div>

        {/* Sosmed */}
        <p style={{ fontSize: 13, color: 'var(--gray-text)', marginBottom: 16 }}>
          Sambil menunggu, yuk follow sosmed MIMUA untuk inspirasi makeup terbaru!
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 32 }}>
          <a href={IG_LINK} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: 13 }}>
            Instagram @mi.mua
          </a>
          <a href={TIKTOK_LINK} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: 13 }}>
            TikTok @mi.mua
          </a>
        </div>

        {/* Tombol Kembali */}
        <Link to="/" className="btn-primary" style={{ justifyContent: 'center' }}>
          Kembali ke Home
        </Link>

      </div>
    </main>
  )
}