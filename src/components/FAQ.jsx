import { useState } from 'react'
import { faqs } from '../data/faq'
import { WA_LINK, IG_LINK, TIKTOK_LINK } from '../constants'

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="section faq">
      <div className="container">
        <span className="section-tag">FAQ</span>
        <h2 className="section-title">Pertanyaan yang Sering Ditanyakan</h2>
        <p className="section-sub">
          Tidak menemukan jawaban?{' '}
          <a href={WA_LINK} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 500 }}>
            Tanyakan via WhatsApp
          </a>
        </p>
        <div className="faq__list">
          {faqs.map(function(f) {
            return (
              <div key={f.id} className={openId === f.id ? 'faq__item faq__item--open' : 'faq__item'}>
                <button className="faq__question" onClick={function() { setOpenId(openId === f.id ? null : f.id) }}>
                  <span>{f.question}</span>
                  <span className="faq__icon">{openId === f.id ? '-' : '+'}</span>
                </button>
                {openId === f.id && (
                  <div className="faq__answer">
                    {f.answer.split('\n').map(function(line, i) {
                      return <p key={i}>{line}</p>
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}