import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {ref} from 'vue';

const error = ref(null);
const isPending = ref(false);
const auth = getAuth();

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = 'Could not sign in';
    isPending.value = false;
  }
};

const useLogin = () => {
  return {error, login, isPending};
};

export default useLogin;
