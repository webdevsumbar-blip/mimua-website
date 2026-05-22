import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import SEO from '../components/SEO'
import { WA_LINK } from '../constants'

var tips = [
  'Persiapkan kulit dengan baik sebelum makeup',
  'Gunakan produk yang sesuai jenis kulit',
  'Konsultasikan dengan MUA profesional',
  'Jangan lupa setting spray untuk ketahanan makeup',
]

var styles = {
  shareWa: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: '#25D366', color: 'white', borderRadius: 4, fontSize: 13, fontWeight: 500, textDecoration: 'none' },
  shareFb: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: '#1877F2', color: 'white', borderRadius: 4, fontSize: 13, fontWeight: 500, textDecoration: 'none' },
  shareCopy: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: 'var(--primary-pale)', color: 'var(--primary)', border: '1px solid var(--primary-soft)', borderRadius: 4, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-body)' },
  sidebarCta: { background: 'var(--primary)', borderRadius: 6, padding: 24, marginBottom: 24, textAlign: 'center' },
  sidebarList: { background: 'var(--primary-pale)', borderRadius: 6, padding: 20, border: '1px solid var(--primary-soft)' },
  sidebarBtn: { width: '100%', justifyContent: 'center' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' },
  crumbLink: { color: 'rgba(255,255,255,0.5)', fontSize: 13 },
  crumbSep: { color: 'rgba(255,255,255,0.3)' },
  crumbActive: { color: 'var(--primary-light)', fontSize: 13 },
  articleDate: { color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 12 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, alignItems: 'start' },
  sidebar: { position: 'sticky', top: 88 },
  shareWrap: { display: 'flex', gap: 10, flexWrap: 'wrap' },
  shareTitle: { fontSize: 13, fontWeight: 600, color: 'var(--dark)', marginBottom: 14, letterSpacing: 1 },
  shareDivider: { marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--primary-soft)' },
  tipWrap: { display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' },
  tipCheck: { color: 'var(--primary)', fontWeight: 700, flexShrink: 0 },
  articleLinkWrap: { display: 'block', marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--primary-soft)' },
  articleLinkTitle: { fontSize: 13, color: 'var(--dark)', fontWeight: 500, lineHeight: 1.5, marginBottom: 4 },
  articleLinkDate: { fontSize: 11, color: 'var(--gray-mid)' },
  ctaTitle: { fontFamily: 'var(--font-heading)', fontSize: 20, color: 'white', marginBottom: 8 },
  ctaDesc: { fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 20, lineHeight: 1.7 },
  sidebarLabel: { fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 16 },
  h3: { fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--dark)', margin: '28px 0 12px' },
  imgStyle: { width: '100%', borderRadius: 6, marginBottom: 32 },
  bodyText: { fontSize: 15, color: 'var(--gray-text)', lineHeight: 1.9 },
  para: { marginBottom: 20 },
  backBtn: { marginTop: 32 },
  notFoundWrap: { minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  notFoundInner: { textAlign: 'center' },
  notFoundTitle: { fontFamily: 'var(--font-heading)', marginBottom: 12 },
}

export default function BlogDetail() {
  var params = useParams()
  var slug = params.slug
  var post = blogPosts.find(function(p) { return p.slug === slug })

  if (!post) {
    return (
      <main style={styles.notFoundWrap}>
        <div style={styles.notFoundInner}>
          <h2 style={styles.notFoundTitle}>Artikel tidak ditemukan</h2>
          <Link to="/blog" className="btn-primary">Kembali ke Blog</Link>
        </div>
      </main>
    )
  }

  var url = window.location.href
  var waHref = 'https://wa.me/?text=' + encodeURIComponent(post.title + ' ' + url)
  var fbHref = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url)
  var imgSrc = 'https://placehold.co/800x400/663130/ffffff?text=' + encodeURIComponent(post.category)
  var otherPosts = blogPosts.filter(function(p) { return p.slug !== slug })

  function copyLink() {
    navigator.clipboard.writeText(url)
    alert('Link berhasil disalin!')
  }

  return (
    <main>
      <SEO title={post.title} description={post.excerpt} />

      <div className="page-header">
        <div className="container">
          <div style={styles.breadcrumb}>
            <Link to="/" style={styles.crumbLink}>Home</Link>
            <span style={styles.crumbSep}>/</span>
            <Link to="/blog" style={styles.crumbLink}>Blog</Link>
            <span style={styles.crumbSep}>/</span>
            <span style={styles.crumbActive}>{post.category}</span>
          </div>
          <span className="section-tag">{post.category}</span>
          <h1 className="page-header__title">{post.title}</h1>
          <p style={styles.articleDate}>{post.date}</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={styles.grid}>

            <div>
              <img src={imgSrc} alt={post.title} style={styles.imgStyle} />

              <div style={styles.bodyText}>
                <p style={styles.para}>{post.excerpt}</p>
                <p style={styles.para}>
                  Persiapan yang matang adalah kunci tampilan makeup yang sempurna.
                  Mulai dari perawatan kulit hingga pemilihan produk yang tepat,
                  setiap langkah memiliki peran penting dalam menghasilkan riasan
                  yang tahan lama dan flawless.
                </p>
                <h3 style={styles.h3}>Tips Penting yang Perlu Diketahui</h3>
                <div style={styles.para}>
                  {tips.map(function(item, i) {
                    return (
                      <div key={i} style={styles.tipWrap}>
                        <span style={styles.tipCheck}>checkmark</span>
                        <span>{item}</span>
                      </div>
                    )
                  })}
                </div>
                <p>
                  Dengan persiapan yang tepat dan bantuan MUA profesional,
                  kamu bisa tampil sempurna di setiap momen spesial.
                </p>
              </div>

              <div style={styles.shareDivider}>
                <p style={styles.shareTitle}>BAGIKAN ARTIKEL INI</p>
                <div style={styles.shareWrap}>
                  <a href={waHref} target="_blank" rel="noreferrer" style={styles.shareWa}>WhatsApp</a>
                  <a href={fbHref} target="_blank" rel="noreferrer" style={styles.shareFb}>Facebook</a>
                  <button onClick={copyLink} style={styles.shareCopy}>Copy Link</button>
                </div>
              </div>

              <div style={styles.backBtn}>
                <Link to="/blog" className="btn-outline">Kembali ke Blog</Link>
              </div>
            </div>

            <div style={styles.sidebar}>
              <div style={styles.sidebarCta}>
                <p style={styles.ctaTitle}>Siap Tampil Cantik?</p>
                <p style={styles.ctaDesc}>
                  Konsultasikan kebutuhan makeup kamu dengan MIMUA sekarang!
                </p>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-outline btn-outline--light" style={styles.sidebarBtn}>
                  Booking Sekarang
                </a>
              </div>

              <div style={styles.sidebarList}>
                <p style={styles.sidebarLabel}>Artikel Lainnya</p>
                {otherPosts.map(function(p) {
                  return (
                    <Link key={p.id} to={'/blog/' + p.slug} style={styles.articleLinkWrap}>
                      <p style={styles.articleLinkTitle}>{p.title}</p>
                      <p style={styles.articleLinkDate}>{p.date}</p>
                    </Link>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}