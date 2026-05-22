import { useState } from 'react'
import { WA_LINK, IG_LINK, TIKTOK_LINK } from '../constants'

const packages = [
  {
    id: 'bride', emoji: '👰', title: 'Bride Services',
    items: [
      { layanan: 'Makeup Hairdo - 1x D-Day',           tanpa: 'Rp 2.000.000', dengan: 'Rp 3.000.000' },
      { layanan: 'Makeup Hairdo - 1x Trial',            tanpa: 'Rp 1.200.000', dengan: '-' },
      { layanan: 'Makeup Hairdo - Paket D-Day + Trial', tanpa: 'Rp 3.000.000', dengan: 'Rp 3.700.000' },
      { layanan: 'Makeup Only - 1x D-Day',              tanpa: 'Rp 1.200.000', dengan: 'Rp 1.700.000' },
      { layanan: 'Makeup Only - 1x Trial',              tanpa: 'Rp 900.000',   dengan: '-' },
      { layanan: 'Makeup Only - Paket D-Day + Trial',   tanpa: 'Rp 1.800.000', dengan: 'Rp 2.300.000' },
    ],
  },
  {
    id: 'regular', emoji: '✨', title: 'Regular - Wisuda, Party, Bridesmaid',
    items: [
      { layanan: 'Makeup Hairdo', tanpa: 'Rp 800.000', dengan: 'Rp 1.300.000' },
      { layanan: 'Makeup Only',   tanpa: 'Rp 600.000', dengan: 'Rp 900.000' },
    ],
  },
  {
    id: 'engagement', emoji: '💐', title: 'Engagement / Sangjit',
    items: [
      { layanan: 'Makeup Hairdo', tanpa: 'Rp 900.000', dengan: 'Rp 1.400.000' },
      { layanan: 'Makeup Only',   tanpa: 'Rp 700.000', dengan: 'Rp 1.200.000' },
    ],
  },
  {
    id: 'photoshoot', emoji: '📸', title: 'Photoshoot Services',
    items: [
      { layanan: 'Makeup Hairdo - Tanpa Retouch',             tanpa: 'Rp 800.000',   dengan: '-' },
      { layanan: 'Makeup Hairdo - Retouch Indoor (max 4 jam)', tanpa: '-',            dengan: 'Rp 1.600.000' },
      { layanan: 'Makeup Only - Tanpa Retouch',               tanpa: 'Rp 600.000',   dengan: '-' },
      { layanan: 'Makeup Only - Retouch Indoor (max 4 jam)',   tanpa: '-',            dengan: 'Rp 1.200.000' },
    ],
  },
]

function AccordionItem({ pkg, isOpen, onToggle }) {
  return (
    <div className={isOpen ? 'pricing__item pricing__item--open' : 'pricing__item'}>
      <button className="pricing__header" onClick={onToggle}>
        <span>{pkg.emoji} {pkg.title}</span>
        <span className="pricing__arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="pricing__body">
          <table className="pricing__table">
            <thead>
              <tr>
                <th>Layanan</th>
                <th>Tanpa Retouch</th>
                <th>Dengan Retouch</th>
              </tr>
            </thead>
            <tbody>
              {pkg.items.map(function(item, i) {
                return (
                  <tr key={i}>
                    <td>{item.layanan}</td>
                    <td>{item.tanpa}</td>
                    <td>{item.dengan}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default function Pricing() {
  const [openId, setOpenId] = useState('bride')

  return (
    <section className="section pricing">
      <div className="container">
        <span className="section-tag">Harga dan Paket</span>
        <h2 className="section-title">Harga Layanan MIMUA</h2>
        <p className="section-sub">Klik kategori untuk melihat detail harga.</p>

        <div className="pricing__accordion">
          {packages.map(function(pkg) {
            return (
              <AccordionItem
                key={pkg.id}
                pkg={pkg}
                isOpen={openId === pkg.id}
                onToggle={function() { setOpenId(openId === pkg.id ? null : pkg.id) }}
              />
            )
          })}
        </div>

        <div className="pricing__note">
          <h4>Syarat dan Ketentuan</h4>
          <ul>
            <li>DP minimal 50% dari total layanan</li>
            <li>Pelunasan maksimal H-3 acara</li>
            <li>Harga belum termasuk biaya transport</li>
            <li>Reschedule maksimal 1x</li>
            <li>DP tidak bisa di-refund</li>
            <li>Booking minimal 2 minggu sebelum acara</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            Tanya Harga dan Booking Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}