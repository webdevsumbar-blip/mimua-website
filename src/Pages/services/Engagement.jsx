import ServiceTemplate from './ServiceTemplate'
export default function Engagement() {
  return (
    <ServiceTemplate
      title="Makeup Engagement"
      tag="Layanan Engagement"
      image="/images/service-engagement.jpg"
      desc="Riasan elegan untuk momen lamaran, sangjit, dan tingjing."
      duration="1,5-2 jam"
      benefits={['Makeup elegan dan anggun', 'Cocok untuk berbagai tema lamaran', 'Tahan lama sepanjang acara', 'Tersedia dengan dan tanpa retouch']}
      prices={[
        { name: 'Makeup Hairdo Tanpa Retouch',  price: 'Rp 900.000',   desc: 'Makeup dan hairdo untuk acara lamaran.' },
        { name: 'Makeup Hairdo Dengan Retouch', price: 'Rp 1.400.000', desc: 'Makeup dan hairdo plus standby retouch.' },
        { name: 'Makeup Only',                  price: 'Rp 700.000',   desc: 'Hanya makeup tanpa hairdo.' },
      ]}
    />
  )
}