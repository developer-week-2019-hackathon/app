<template>
  <div class="device-card">
    <div class="img-box" v-on:click="handleSelect" >
      <img :src="imgUrl" alt="device image" />
    </div>
    <div class="info-box">
      <h4>My {{ device.type }} <span class="device-name">{{ device.name }}</span></h4>
      <div class="button-box">
        <div class="lock-box">
          <img v-if="fenced" v-on:click="handleClick" src="../../public/assets/locked.png" />
          <img v-if="!fenced" v-on:click="handleClick" src="../../public/assets/unlocked.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    device: Object,
    imgUrl: String,
  },
  data() {
    return {
      fenced: this.device.fenced
    };
  },
  methods: {
    handleClick() {
      this.fenced = !this.fenced;
    },
    handleSelect() {
      this.$router.push({ path: '/map' });
    }
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
  grid-template-rows: 200px 40px 150px;
  z-index: 999;
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

.button-box {
  display: flex;
  flex-direction: row;
  height: 70px;
}

.lock-box {
  padding-top: 1px;
  height: 150px;
  width: 95vw;
}

.lock-box img {
  max-height: 80%;
}

</style>