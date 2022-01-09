<template>
  <div class="home">
    <div class="error" v-if="error">Could not fetch data</div>
    <transition name="slide-fade">
      <div v-if="documents">
        <ListView :playlists="documents" />
      </div>
      <div v-else>Loading...</div>
    </transition>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection';
import ListView from '../components/ListView.vue';
export default {
  name: 'Home',
  setup() {
    const {documents, error} = getCollection('playlists');
    return {documents, error};
  },
  components: {ListView}
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
