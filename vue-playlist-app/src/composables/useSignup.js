import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import {ref} from 'vue';

const error = ref(null);
const isPending = ref(false);

const auth = getAuth();

const signUp = async (email, password, displayName) => {
  error.value = null;
  isPending.value = true;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error('Could not complete sign up');
    }
    await updateProfile(res.user, {displayName});
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};

const useSignup = () => {
  return {error, signUp, isPending};
};

export default useSignup;
