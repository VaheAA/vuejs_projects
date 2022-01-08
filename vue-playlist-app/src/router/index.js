import {createRouter, createWebHistory} from 'vue-router';
import Login from '../views/auth/Login.vue';
import SignUp from '../views/auth/SignUp.vue';
import Home from '../views/Home.vue';
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylists',
    component: CreatePlaylist
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
