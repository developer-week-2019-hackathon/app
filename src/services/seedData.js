import data from './data.js';

if(!data.devices) {
  data.devices = [
    {
      key: 1,
      imgUrl: '../../assets/skateboard1.jpg',
      type: 'skateboard',
      name: 'Santa Cruz',
      fenced: true,
      alert: false
    },
    {
      key: 2,
      imgUrl: '../../assets/bike3.jpg',
      type: 'bike',
      name: 'Pedals',
      fenced: true,
      alert: false
    },
    {
      key: 3,
      imgUrl: '../../assets/scooter2.jpg',
      type: 'scooter',
      name: 'Zip',
      fenced: false,
      alert: false
    }
  ];
}

export default {
  getDevices() {
    return data.devices;
  }
};
