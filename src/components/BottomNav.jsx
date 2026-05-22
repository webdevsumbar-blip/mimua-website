import { NavLink, useLocation } from 'react-router-dom'

var navItems = [
  { to: '/',        label: 'Home',    icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10' },
  { to: '/gallery', label: 'Gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { to: '/services/wedding', label: 'Services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { to: '/contact',  label: 'Contact', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z' },
]

var wrapStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 997,
  background: 'white',
  borderTop: '1px solid var(--primary-soft)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '8px 0 12px',
  boxShadow: '0 -4px 16px rgba(102,49,48,0.08)',
}

var itemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  textDecoration: 'none',
  flex: 1,
}

function NavIcon(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {props.path.split(' M').map(function(p, i) {
        return <path key={i} d={i === 0 ? p : 'M' + p} />
      })}
    </svg>
  )
}

export default function BottomNav() {
  var location = useLocation()

  return (
    <div style={wrapStyle}>
      {navItems.map(function(item) {
        var isActive = location.pathname === item.to
        var color = isActive ? 'var(--primary)' : '#9A7575'
        return (
          <NavLink key={item.to} to={item.to} style={itemStyle}>
            <NavIcon path={item.icon} color={color} />
            <span style={{ fontSize: 10, color: color, letterSpacing: 0.5, fontWeight: isActive ? 600 : 400 }}>
              {item.label}
            </span>
          </NavLink>
        )
      })}
    </div>
  )
}