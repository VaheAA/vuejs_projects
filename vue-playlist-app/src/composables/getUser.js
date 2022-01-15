import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {ref} from 'vue';
const auth = getAuth();
const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
  user.value = _user;
});

const getUser = () => {
  return {user};
};

export default getUser;
