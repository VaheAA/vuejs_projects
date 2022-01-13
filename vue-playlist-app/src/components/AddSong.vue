<template>
  <div class="add-song">
    <button v-if="!showForm" @click="showForm = true">Add Song</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <h4>Add a New Song</h4>
      <input type="text" placeholder="Song title" required v-model="title" />
      <input type="text" placeholder="Artits" required v-model="artist" />
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import {ref} from '@vue/reactivity';
import useDocument from '@/composables/useDocument';
import {getAnalytics, logEvent} from 'firebase/analytics';
app;

export default {
  props: {
    playlist: Object
  },
  setup(props) {
    const title = ref('');
    const artist = ref('');
    const showForm = ref(false);
    const {updDoc} = useDocument('playlists', props.playlist.id);
    const analytics = getAnalytics();

    const handleSubmit = async () => {
      const newSong = {
        title: title.value,
        artist: artist.value,
        id: Math.floor(Math.random() * 100000000)
      };
      await updDoc({
        songs: [...props.playlist.songs, newSong]
      });
      logEvent(analytics, 'add_song', {
        artist_name: artist.value,
        song_name: title.value
      });
      title.value = '';
      artist.value = '';
    };

    return {title, artist, showForm, handleSubmit};
  }
};
</script>

<style scoped>
.add-song {
  text-align: center;
  margin-top: 40px;
}
form {
  max-width: 100%;
  text-align: left;
}
</style>
