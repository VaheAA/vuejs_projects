import {createApp} from 'vue';
import {firebase} from './firebase/config';

import App from './App.vue';
import router from './router';
import './assets/main.css';
import {getAuth} from 'firebase/auth';

let app;

const auth = getAuth();

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).use(firebase).mount('#app');
  }
});
