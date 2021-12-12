<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="logo">
          <img src="../assets/images/logo.svg" alt="Fylo" />
        </div>
        <Navbar />
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
  name: 'Header',
  components: {Navbar},
};
</script>

<style scoped>
.header {
  padding-top: 60px;
  height: 100%;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .logo {
  max-width: 100%;
}
.header .logo img {
  max-width: 100%;
}
@media (max-width: 727px) {
  .header {
    padding-top: 35px;
  }
  .header .logo {
    max-width: 100px;
  }
}
</style>
