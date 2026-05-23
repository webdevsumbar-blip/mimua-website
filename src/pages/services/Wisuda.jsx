import ServiceTemplate from './ServiceTemplate'
export default function Wisuda() {
  return (
    <ServiceTemplate
      title="Makeup Wisuda"
      tag="Layanan Wisuda"
      image="/images/service-wisuda.jpg"
      desc="Tampil fresh dan fotogenik untuk momen wisuda yang tak terlupakan."
      duration="1,5-2 jam"
      benefits={['Makeup natural dan fotogenik', 'Cocok untuk semua jenis kulit', 'Tahan lama dari pagi hingga sore', 'Hasil sesuai referensi kamu']}
      prices={[
        { name: 'Makeup dan Hairdo', price: 'Rp 800.000', desc: 'Makeup lengkap plus penataan rambut untuk wisuda.' },
        { name: 'Makeup Only',       price: 'Rp 600.000', desc: 'Hanya makeup tanpa hairdo.' },
      ]}
    />
  )
}