import ServiceTemplate from './ServiceTemplate'
export default function SweetSeventeen() {
  return (
    <ServiceTemplate
      title="Sweet Seventeen"
      tag="Layanan Sweet 17"
      image="/images/service-sweet17.jpg"
      desc="Makeup cantik dan segar untuk perayaan ulang tahun ke-17."
      duration="1,5-2 jam"
      benefits={['Makeup fresh dan youthful', 'Cocok untuk tema sweet seventeen', 'Hasil natural sesuai usia', 'Bisa request glam atau soft look']}
      prices={[
        { name: 'Makeup dan Hairdo', price: 'Rp 800.000', desc: 'Makeup lengkap plus hairdo untuk sweet seventeen.' },
        { name: 'Makeup Only',       price: 'Rp 600.000', desc: 'Hanya makeup tanpa hairdo.' },
      ]}
    />
  )
}