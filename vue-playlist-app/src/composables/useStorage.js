import {
  getStorage,
  ref as firebaseRef,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';
import getUser from './getUser';
import {ref} from 'vue';
import {deleteObject} from 'firebase/storage';

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

  const deleteImage = async (path) => {
    const storageRef = firebaseRef(storage, path);
    try {
      await deleteObject(storageRef);
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return {url, filePath, error, uploadImage, deleteImage};
};

export default useStorage;
