<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
    <input type="text" placeholder="name" v-model="displayName" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Sign Up</button>
    <button v-if="isPending">Loading...</button>
  </form>
</template>

<script>
import {ref} from '@vue/reactivity';
import useSignup from '@/composables/useSignup';
import {useRouter} from 'vue-router';

export default {
  setup() {
    const {error, signUp, isPending} = useSignup();

    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const handleSubmit = async () => {
      const res = await signUp(email.value, password.value, displayName.value);
    };
    if (!error.value) {
      router.push({name: 'UserPlaylists'});
    }

    return {displayName, email, password, handleSubmit, error, isPending};
  }
};
</script>

<style></style>
