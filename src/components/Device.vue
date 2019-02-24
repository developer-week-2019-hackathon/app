<template>
  <div class="device-card">
    <div class="img-box">
      <img :src="imgUrl" alt="device image" />
    </div>
    <div class="info-box">
      <h4>My {{ device.type }} <span class="device-name">{{ device.name }}</span></h4>
      <p>{{ device.fenced }}</p>
      <p>{{ device.alert }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    device: Object,
    imgUrl: String,
  }
};
</script>

<style scoped>

.device-card {
  width: 90vw;
  background-color: var(--cardBackground);
  color: var(--cardFont);
  margin: 5vw;
  display: grid;
  grid-gap: 0;
  grid-template-rows: 200px 130px;
}

.img-box {
  width: 90vw;
  overflow: hidden;
}

.img-box img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.info-box {
  padding: 10px 5px;
}

.device-name {
  font-style: italic;
}
</style>