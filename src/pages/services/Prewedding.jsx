import ServiceTemplate from './ServiceTemplate'
export default function Prewedding() {
  return (
    <ServiceTemplate
      title="Makeup Prewedding"
      tag="Layanan Prewedding"
      image="/images/service-prewedding.jpg"
      desc="Look natural hingga glamour untuk sesi foto prewedding."
      duration="1,5-2 jam"
      benefits={['Makeup fotogenik dan tahan lama', 'Cocok untuk sesi outdoor dan indoor', 'Konsultasi look sebelum sesi foto', 'Bisa request berbagai gaya makeup']}
      prices={[
        { name: 'Makeup dan Hairdo', price: 'Rp 800.000', desc: 'Makeup lengkap dengan hairdo untuk sesi prewedding.' },
        { name: 'Makeup Only',       price: 'Rp 600.000', desc: 'Hanya makeup tanpa hairdo.' },
      ]}
    />
  )
}