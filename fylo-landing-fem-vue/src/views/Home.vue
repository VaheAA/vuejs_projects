<template>
  <header><Navbar></Navbar></header>
  <main>
    <Hero></Hero>
    <Features></Features>
    <EarlyAccess></EarlyAccess>
  </main>
  <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import EarlyAccess from '../components/EarlyAccess.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
    Navbar,
    Hero,
    Features,
    EarlyAccess,
    Footer,
  },
};
</script>

<style></style>
