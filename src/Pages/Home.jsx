import HeroSection      from '../components/HeroSection'
import CounterStats     from '../components/CounterStats'
import PortfolioPreview from '../components/PortfolioPreview'
import WhyUs            from '../components/WhyUs'
import ServicesGrid     from '../components/ServicesGrid'
import Testimonials     from '../components/Testimonials'
import Pricing          from '../components/Pricing'
import HowToBook        from '../components/HowToBook'
import Availability     from '../components/Availability'
import BlogPreview      from '../components/BlogPreview'
import FAQ              from '../components/FAQ'
import CountdownTimer   from '../components/CountdownTimer'
import CTASection       from '../components/CTASection'
import SEO              from '../components/SEO'

export default function Home() {
  return (
    <main>
      <SEO
        title="Home"
        description="MIMUA - Jasa Makeup Artist Profesional untuk Wedding, Prewedding, Wisuda, Sweet Seventeen dan lainnya. Home service ke lokasi Anda."
      />
      <HeroSection />
      <CounterStats />
      <PortfolioPreview />
      <WhyUs />
      <ServicesGrid />
      <Testimonials />
      <Pricing />
      <HowToBook />
      <Availability />
      <BlogPreview />
      <FAQ />
      <CountdownTimer />
      <CTASection />
    </main>
  )
}