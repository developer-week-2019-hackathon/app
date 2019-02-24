<template>
  <div id="dash">
    <DeviceList :devices="devices" />
  </div>
</template>

<script>
import DeviceList from './DeviceList.vue';
import data from '../services/seedData';

export default {
  props: {
  },
  components: {
    DeviceList
  },
  data() {
    return {
      devices: null
    };
  },
  created() {
    this.devices = data.getDevices();
  },
  methods: {
    handleAdd(newDevice) {
      this.devices.push(newDevice);
    }
  }
};

</script>

<style scoped>

#dash {
  background-color: var(--theme1);
  min-height: 100vh;
}

</style>
