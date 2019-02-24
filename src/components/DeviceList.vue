<template>
  <div class="device-list">
  <Device v-for="device in devices"
    :key="device.key"
    :device="device" />
  </div>
</template>

<script>
import Device from './Device.vue';
export default {
  props: {
    devices: Array
  },
  components: {
    Device
  }
};
</script>

<style scoped>

</style>