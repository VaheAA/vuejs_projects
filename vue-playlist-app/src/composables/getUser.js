import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {app} from '../firebase/config';
import {ref} from 'vue';
app;
const auth = getAuth();
const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
  user.value = _user;
});

const getUser = () => {
  return {user};
};

export default getUser;
