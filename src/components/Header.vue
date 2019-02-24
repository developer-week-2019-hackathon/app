<template>
  <header>
    <div class="logo-container">
      <img src="../../public/assets/logo-wide.png" alt="signal.ly logo" class="logo">
    </div>
    <div class="icon">
      <input id="hamburger" type="checkbox" v-model="checkboxToggle">
      <label for="hamburger" class="hamburger"></label>
    </div>
    <nav v-bind:class="{active: checkboxToggle}">
      <div v-if="checkboxToggle && (width < 600)" class="navbar" id="navbar">
        <RouterLink v-if="!user" class="navlink" to="/auth">Sign in</RouterLink>
        <RouterLink v-if="user" class="navlink" to="/">Dashboard</RouterLink>
        <RouterLink class="navlink" to="/about">About</RouterLink>
        <a v-if="user" class="navlink" href="/" @click.prevent="handleSignOut">Sign Out</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checkboxToggle: false,
      width: null
    };
  },
  created() {
    this.width = window.innerWidth;
  }
};
</script>

<style scoped>

.logo-container {
  height: 80px;
  padding: 10px;
  text-align: left;
}

.logo {
  height: 80px;
}

header {
  position: relative;
  background-color: var(--headerBackground);
  height: 100px;
}

nav {
  width: 100vw;
  display: flex;
  z-index: 999;
  position: relative;
  top: 100;
}

nav .navlink {
  flex-grow: 2;
  position: relative;
  display: inline-block;
  text-align: center;
  font-size: 4.5vw;
  color: var(--headerText);
  line-height: 80px;
  flex-direction: row;
  width: 25vw;
  transition: background-color 1s ease;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Montserrat", serif;
  font-weight: 600;
}

nav .navlink:hover {
  background-color: var(--headerHover);
}

.hamburger {
  background: var(--headerText);
  min-height: 5px;
  height: 5px;
  transition: 1s;
  width: 40px;
  border-radius: 4px;
}

.hamburger::before,
.hamburger::after {
  height: 5px;
  background: var(--headerText);
  content: "";
  display: block;
  position: relative;
  transition: 1s;
  border-radius: 4px;
}

.hamburger::before {
  top: -12px;
}

.hamburger::after {
  top: 7px;
}

.icon {
  height:80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vw;
  position: absolute;
  right: 0;
  top: 0;
}

.icon input {
  width: 50px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 9999999;
}

input:checked ~ .hamburger {
  background: transparent;
}

input:checked ~ .hamburger::before {
  transform: rotate(45deg);
  top: 0;
}

input:checked ~ .hamburger::after {
  transform: rotate(-45deg);
  top: -5px;
}

@media (max-width: 600px) {
  nav,
  .navbar {
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: relative;
  }

  nav .navlink {
    width: 100vw;
  }

  .active {
    background-color: var(--headerBackground);
  }

  nav {
    position: relative;
  }
}
</style>
