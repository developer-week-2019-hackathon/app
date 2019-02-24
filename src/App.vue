<template>
  <div id="app">
    <Header></Header>
    <RouterView id="app-view" class="routes"></RouterView>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
  },
  created() {
  }
};
</script>

<style scoped>
</style>
