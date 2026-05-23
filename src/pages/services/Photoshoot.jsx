import ServiceTemplate from './ServiceTemplate'
export default function Photoshoot() {
  return (
    <ServiceTemplate
      title="Makeup Photoshoot"
      tag="Layanan Photoshoot"
      image="/images/service-photoshoot.jpg"
      desc="Riasan profesional untuk berbagai kebutuhan pemotretan."
      duration="Maks. 4 jam retouch"
      benefits={['Makeup tahan di bawah lampu studio', 'Cocok untuk berbagai jenis fotografi', 'Tersedia retouch indoor dan outdoor', 'Hasil optimal di kamera']}
      prices={[
        { name: 'Makeup Hairdo Tanpa Retouch',  price: 'Rp 800.000',   desc: 'Makeup dan hairdo tanpa standby retouch.' },
        { name: 'Retouch Indoor maks. 4 jam',   price: 'Rp 1.600.000', desc: 'Termasuk standby dan retouch indoor maks. 4 jam.' },
        { name: 'Retouch Outdoor maks. 4 jam',  price: 'Rp 1.700.000', desc: 'Termasuk standby dan retouch outdoor maks. 4 jam.' },
      ]}
    />
  )
}