import {initializeApp} from 'firebase/app';
import {getFirestore, serverTimestamp} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9ggEcEZlQGMJODPRlsloYs4_RTyYSeBU',
  authDomain: 'music-with-vue-a2840.firebaseapp.com',
  projectId: 'music-with-vue-a2840',
  storageBucket: 'music-with-vue-a2840.appspot.com',
  messagingSenderId: '935875811735',
  appId: '1:935875811735:web:43ad8b88052eb36b520cd2'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const createdAt = serverTimestamp();

export {db, app, createdAt};
