<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div class="playlist-details" v-if="playlist">
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl" :alt="playlist.title" />
      </div>
      <h2>{{ playlist.title }}</h2>
      <p class="username">Created By: {{ playlist.userName }}</p>
      <p class="description">{{ playlist.description }}</p>
      <button @click="handleDelete" v-if="ownership">Delete Playlist</button>
    </div>
    <div class="song-list">
      <p>song list here</p>
    </div>
  </div>
</template>

<script>
import getDocumet from '@/composables/getDocument';
import getUser from '@/composables/getUser';
import useDocument from '../../composables/useDocument';
import {computed} from '@vue/reactivity';
export default {
  props: {
    id: String
  },
  setup(props) {
    const {document: playlist, error} = getDocumet('playlists', props.id);
    const {user} = getUser();
    const {delDoc, isPending} = useDocument('playlists', props.id);
    const ownership = computed(() => {
      return (
        playlist.value && user.value && user.value.uid === playlist.value.userId
      );
    });
    const handleDelete = async () => {
      await delDoc();
      console.log('doc deleted');
    };

    return {playlist, error, ownership, handleDelete};
  }
};
</script>

<style>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 160px;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  max-width: 200%;
  max-height: 200%;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
</style>
