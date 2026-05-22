import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import SEO from '../components/SEO'

export default function Blog() {
  return (
    <main>
        <SEO title="About Us" description="Kenali lebih dekat MIMUA, makeup artist profesional bersertifikat dengan pengalaman 4+ tahun." />
      <div className="page-header">
        <div className="container">
          <span className="section-tag">Tips dan Inspirasi</span>
          <h1 className="page-header__title">Blog MIMUA</h1>
          <p className="page-header__sub">Tips makeup, inspirasi tampilan, dan panduan pernikahan dari MIMUA.</p>
        </div>
      </div>

      <section className="section blog-preview">
        <div className="container">
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
        </div>
      </section>
    </main>
  )
}