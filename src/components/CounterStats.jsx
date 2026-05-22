import { useState, useEffect, useRef } from 'react'

var statsData = [
  { target: 100, suffix: '+', label: 'Klien Puas' },
  { target: 4,   suffix: '+', label: 'Tahun Pengalaman' },
  { target: 4.9, suffix: '',  label: 'Rating Klien' },
  { target: 6,   suffix: '+', label: 'Jenis Layanan' },
]

function Counter(props) {
  var target = props.target
  var suffix = props.suffix
  var countArr = useState(0)
  var count = countArr[0]
  var setCount = countArr[1]
  var ref = useRef(null)
  var started = useRef(false)

  useEffect(function() {
    var observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true
        var steps = 40
        var increment = target / steps
        var current = 0
        var timer = setInterval(function() {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, 1500 / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return function() { observer.disconnect() }
  }, [target])

  return (
    <span ref={ref}>{count}{suffix}</span>
  )
}

export default function CounterStats() {
  return (
    <div className="stats-bar">
      <div className="container stats-bar__grid">
        {statsData.map(function(s, i) {
          return (
            <div key={i} className="stats-bar__item">
              <span className="stats-bar__num">
                <Counter target={s.target} suffix={s.suffix} />
              </span>
              <span className="stats-bar__label">{s.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}