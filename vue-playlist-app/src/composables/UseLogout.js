import {getAuth, signOut} from 'firebase/auth';
import {app} from '../firebase/config';
import {ref} from 'vue';
app;

const error = ref(null);
const isPending = ref(false);

const auth = getAuth();

const logout = async () => {
  error.value = null;
  isPending.value = true;
  try {
    await signOut(auth);
    isPending.value = false;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};

const useLogout = () => {
  return {error, logout, isPending};
};

export default useLogout;
