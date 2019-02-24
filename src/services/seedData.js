let seedData = [
  {
    username: 'sarah',
    password: 123,
    devices: [
      {
        key: 1,
        type: 'skateboard',
        name: 'Santa Cruz'
      },
      {
        key: 2,
        type: 'scooter',
        name: 'Zip'
      }
    ]
  },

];

export default {
  getSeedData() {
    return seedData;
  }
};
