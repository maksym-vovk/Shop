const path = 'Space_Black_Stainless_Steel_Case_with_Space_Black_Milanese_Loop';

export const models = {
  model: {
    filter: {
      title: 'Series 4',
      subTitle: 'GPS + Cellular',
      model: 'Apple Watch',
      size: '44mm',
      caseMaterial: 'Stainless steel',
      bandType: 'Stainless Steel',
      bandColor: 'black',
      price: 849,
      category:'watch'
    },
    description: 'Space Black Stainless Steel Case with Space Black Milanese Loop',
    images: {
      mainImage: `/static/img/watch/series_4/${path}/1.jpg`,
      tabsImages: [
        `/static/img/watch/series_4/${path}/2.jpg`,
        `/static/img/watch/series_4/${path}/3.jpg`,
        `/static/img/watch/series_4/${path}/4.jpg`
      ]
    },
    technicalInfo: [
      {
        text: 'Space Black stainless steel case'
      },
      {
        text: 'LTE and UMTS, Built-in GPS, GLONASS, Galileo, and QZSS'
      },
      {
        text: 'S4 with 64-bit dual-core processor'
      },
      {
        text:
          'W3 Apple wireless chip, Wi-Fi (802.11b/g/n 2.4GHz), Bluetooth 5.0'
      },
      {
        text: 'Barometric altimeter'
      },
      {
        text: 'Capacity 16GB'
      },
      {
        text:
          'Optical heart sensor, Electrical heart sensor,Ambient light sensor'
      },
      {
        text: 'Improved accelerometer up to 32 g‑forces'
      },
      {
        text: 'Improved gyroscope'
      },
      {
        text: 'LTPO OLED Retina display with Force Touch (1000 nits)'
      },
      {
        text: 'Digital Crown with haptic feedback'
      },
      {
        text: 'Louder speaker'
      },
      {
        text: 'Sapphire crystal glass, Sapphire crystal and ceramic back'
      },
      {
        text:
          'Built-in rechargeable lithium-ion battery, Up to 18 hours of battery life'
      },
      {
        text: 'Water resistant 50 meters'
      },
      {
        text: 'watchOS 5'
      }
    ],
    warehouseCount: 10
  }
};
