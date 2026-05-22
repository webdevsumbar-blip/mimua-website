const stats = [
  { num: '100+', label: 'Klien Puas' },
  { num: '4+',   label: 'Tahun Pengalaman' },
  { num: '4.9',  label: 'Rating Klien' },
  { num: '6+',   label: 'Jenis Layanan' },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container stats-bar__grid">
        {stats.map(function(s, i) {
          return (
            <div key={i} className="stats-bar__item">
              <span className="stats-bar__num">{s.num}</span>
              <span className="stats-bar__label">{s.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}