import {
  getStorage,
  ref as firebaseRef,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';
import {app} from '../firebase/config';
import getUser from './getUser';
import {ref} from 'vue';
app;

const {user} = getUser();

const storage = getStorage();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`;

    const storageRef = firebaseRef(storage, filePath.value);
    try {
      const res = await uploadBytes(storageRef, file);
      url.value = await getDownloadURL(storageRef);
    } catch (err) {
      console.log(err.message);
      error.value = 'Could not sign in';
    }
  };

  return {url, filePath, error, uploadImage};
};

export default useStorage;
