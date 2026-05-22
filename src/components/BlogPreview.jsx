import { WA_LINK, IG_LINK, TIKTOK_LINK } from '../constants'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export default function BlogPreview() {
  return (
    <section className="section blog-preview">
      <div className="container">
        <span className="section-tag">Tips dan Inspirasi</span>
        <h2 className="section-title">Artikel Terbaru</h2>
        <div className="blog-preview__grid">
          {blogPosts.map(function(post) {
            return (
              <div key={post.id} className="blog-preview__card">
                <div className="blog-preview__img-wrap">
                  <img
                    src={'https://placehold.co/600x400/663130/ffffff?text=' + encodeURIComponent(post.category)}
                    alt={post.title}
                    loading="lazy"
                  />
                  <span className="blog-preview__cat">{post.category}</span>
                </div>
                <div className="blog-preview__body">
                  <p className="blog-preview__date">{post.date}</p>
                  <h3 className="blog-preview__title">{post.title}</h3>
                  <p className="blog-preview__excerpt">{post.excerpt}</p>
                  <Link to="/blog" className="blog-preview__link">Baca Selengkapnya</Link>
                </div>
              </div>
            )
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/blog" className="btn-outline">Lihat Semua Artikel</Link>
        </div>
      </div>
    </section>
  )
}