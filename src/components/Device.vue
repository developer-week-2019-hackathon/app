<template>
  <div class="device-card" v-bind:style="{ backgroundImage: 'url(' + device.imgUrl + ')'}">
    <p>{{ device.name }}</p>
    <p>{{ device.fenced }}</p>
    <p>{{ device.alert }}</p>
  </div>
</template>

<script>
export default {
  props: {
    device: Object
  }
};
</script>

<style scoped>

</style>