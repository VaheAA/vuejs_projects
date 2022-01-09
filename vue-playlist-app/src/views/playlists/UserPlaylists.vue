<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
    <transition name="slide-fade">
      <template v-if="playlists">
        <ListView :playlists="playlists" />
      </template>
      <p v-else>Loading...</p>
    </transition>
    <router-link class="btn" :to="{name: 'CreatePlaylist'}"
      >Create A New Playlist</router-link
    >
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import getUser from '@/composables/getUser';
import ListView from '../../components/ListView.vue';
export default {
  components: {ListView},
  setup() {
    const {user} = getUser();
    const {documents: playlists} = getCollection('playlists', [
      'userId',
      '==',
      user.value.uid
    ]);
    console.log(playlists);
    return {playlists};
  }
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
