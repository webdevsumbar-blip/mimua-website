import ServiceTemplate from './ServiceTemplate'
export default function Wedding() {
  return (
    <ServiceTemplate
      title="Makeup Wedding"
      tag="Layanan Wedding"
      image="/images/service-wedding.jpg"
      desc="Tampil cantik memukau di hari pernikahan."
      duration="3-4 jam"
      benefits={['Makeup tahan lama sepanjang hari', 'Tersedia paket dengan dan tanpa retouch', 'Bisa request gaya makeup sesuai tema', 'Tersedia untuk pengantin, mama, bridesmaid', 'Konsultasi gratis sebelum hari H']}
      prices={[
        { name: 'Makeup Hairdo Tanpa Retouch',  price: 'Rp 2.000.000', desc: 'Makeup dan hairdo pengantin wanita tanpa standby retouch.' },
        { name: 'Makeup Hairdo Dengan Retouch', price: 'Rp 3.000.000', desc: 'Makeup dan hairdo plus standby retouch sepanjang acara.' },
        { name: 'Paket D-Day + Trial',           price: 'Rp 3.700.000', desc: 'Hemat! D-Day plus 1x sesi trial sebelum hari H.' },
      ]}
    />
  )
}