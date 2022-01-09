<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.jpg" alt="" />
      <h1>
        <router-link :to="{name: 'Home'}">Muso Ninjas</router-link>
      </h1>
      <div class="links">
        <template v-if="user">
          <span>Hi there, {{ user.displayName }}</span>
          <router-link class="btn" :to="{name: 'UserPlaylists'}"
            >My Playlists</router-link
          >
          <router-link class="btn" :to="{name: 'CreatePlaylist'}"
            >Add Playlist</router-link
          >
          <button @click="handleClick">Logout</button>
        </template>
        <template v-else>
          <router-link class="btn" :to="{name: 'Signup'}">Sign Up</router-link>
          <router-link class="btn" :to="{name: 'Login'}">Login</router-link>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import {useRouter} from 'vue-router';
import useLogout from '@/composables/UseLogout';
import getUser from '@/composables/getUser';
export default {
  setup() {
    const {logout} = useLogout();
    const {user} = getUser();

    const router = useRouter();
    const handleClick = async () => {
      await logout();
      router.push({name: 'Login'});
    };
    return {handleClick, user};
  }
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  margin-right: 16px;
  border-left: 1px solid #eee;
}
</style>
