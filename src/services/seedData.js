let devices = [
  {
    key: 1,
    imgUrl: '../assets/skateboard1.jpg',
    name: 'Santa Cruz',
    fenced: true,
    alert: false
  },
  {
    key: 2,
    imgUrl: '../assets/bike3.jpg',
    name: 'Pedals',
    fenced: false,
    alert: false
  },
  {
    key: 3,
    imgUrl: '../assets/scooter2.jpg',
    name: 'Zip',
    fenced: false,
    alert: false
  }
];

export default {
  getDevices() {
    return devices;
  }
};
