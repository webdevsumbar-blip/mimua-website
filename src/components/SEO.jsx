import { useEffect } from 'react'

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title + ' | MIMUA - Makeup Artist Profesional'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)
  }, [title, description])

  return null
}