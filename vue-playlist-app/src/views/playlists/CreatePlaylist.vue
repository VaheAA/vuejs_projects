<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" required placeholder="Playlist title" v-model="title" />
    <textarea
      required
      placeholder="Playlist description"
      v-model="description"
    ></textarea>
    <label>Upload Playlist Cover Image</label>
    <input type="file" @change="handleChange" />
    <div class="error">{{ fileError }}</div>
    <button>Create</button>
  </form>
</template>

<script>
import {ref} from '@vue/reactivity';
import useStorage from '@/composables/useStorage';
export default {
  setup() {
    const {filePath, url, uploadImage} = useStorage();

    const title = ref('');
    const description = ref('');
    const file = ref(null);
    const fileError = ref(null);

    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value);
        console.log('image uploaded', url.value);
      }
    };

    // allowerd types
    const types = ['image/png', 'image/jpeg', 'images/jpg'];

    const handleChange = (e) => {
      const selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = 'Please select an image (png or jpeg)';
      }
    };

    return {title, description, fileError, handleSubmit, handleChange};
  }
};
</script>

<style>
form {
  background: white;
}
input[type='file'] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
