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
      <div v-if="!playlist.songs.length">This playlist is empty.</div>
      <div v-for="song in playlist.songs" :key="song.id" class="single-song">
        <transition name="fade">
          <div class="details">
            <h1>{{ song.title }}</h1>
            <p>{{ song.artist }}</p>
          </div>
        </transition>
        <button v-if="ownership" @click="handleClick(song.id)">Delete</button>
      </div>
      <AddSong v-if="ownership" :playlist="playlist" />
    </div>
  </div>
</template>

<script>
import getDocumet from '@/composables/getDocument';
import getUser from '@/composables/getUser';
import useDocument from '@/composables/useDocument';
import useStorage from '@/composables/useStorage';
import {computed} from '@vue/reactivity';
import {useRouter} from 'vue-router';
import AddSong from '@/components/AddSong.vue';
export default {
  props: {
    id: String
  },
  setup(props) {
    const {document: playlist, error} = getDocumet('playlists', props.id);
    const {user} = getUser();
    const {delDoc, updDoc, isPending} = useDocument('playlists', props.id);
    const {deleteImage} = useStorage();
    const router = useRouter();
    const ownership = computed(() => {
      return (
        playlist.value && user.value && user.value.uid === playlist.value.userId
      );
    });
    const handleDelete = async () => {
      await deleteImage(playlist.value.filePath);
      await delDoc();
      router.push({name: 'Home'});
    };
    const handleClick = async (id) => {
      const songs = playlist.value.songs.filter((song) => song.id !== id);
      await updDoc({
        songs
      });
    };
    return {playlist, error, ownership, handleDelete, handleClick};
  },
  components: {AddSong}
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
  object-fit: cover;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.single-song {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--secondary);
  margin-bottom: 20px;
}
</style>
