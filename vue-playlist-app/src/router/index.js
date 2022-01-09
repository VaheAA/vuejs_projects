import {createRouter, createWebHistory} from 'vue-router';
import Login from '../views/auth/Login.vue';
import SignUp from '../views/auth/SignUp.vue';
import Home from '../views/Home.vue';
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue';
import {getAuth} from 'firebase/auth';
import PlaylistDetails from '../views/playlists/PlaylistDetails.vue';
import UserPlaylists from '../views/playlists/UserPlaylists.vue';

const auth = getAuth();

// route guards
const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (!user) {
    next({name: 'Login'});
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
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
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth
  },
  {
    path: '/playlists/:id',
    name: 'PlaylistDetails',
    component: PlaylistDetails,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/playlists/user',
    name: 'UserPlaylists',
    component: UserPlaylists,
    beforeEnter: requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
