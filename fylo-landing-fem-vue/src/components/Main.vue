<template>
  <main class="main">
    <Hero />
    <Features />
    <EarlyAccess />
  </main>
</template>

<script>
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import EarlyAccess from '../components/EarlyAccess.vue';
export default {
  components: {
    Hero,
    Features,
    EarlyAccess,
  },
};
</script>

<style></style>
