<template>
  <div>
    <Header />
    <img class="feature-img" src="../../public/assets/skateboard3.jpg" />
    <h2>About</h2>
    <h3>Created by:</h3>
    <p>Ricardo Piro-Rael, <br/>Sarah Flynn, <br/>Ralph Schmidt-Dunker, <br/>Steve Marquez, <br/>and Joseph Huang</p>
    <h3>Project Description:</h3>
    <p class="left">This is a geofencing application using TomTom's API to alert users when their bike, skateboard, or scooter has been moved out of a designated area. The app also allows users to track the location of a stolen item so it can be recovered.</p>
  </div>
</template>

<script>
</script>

<style scoped>
.feature-img {
  width: 100vw;
}

h2 {
  padding: 20px;
  font-size: 2em;
}
h3 {
  margin: 0 0 10px;
  font-size: 1.4em;
}

.left {
  text-align: left;
}

p {
  margin: 10px 25px 40px;
}

</style>