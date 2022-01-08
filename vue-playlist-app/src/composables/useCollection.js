import {ref} from 'vue';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../firebase/config';

const useCollection = (collectionName) => {
  const error = ref(null);
  const isPending = ref(false);

  const addNewDoc = async (doc) => {
    error.value = null;
    isPending.value = true;

    try {
      await addDoc(collection(db, collectionName), doc);
      isPending.value = false;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
      isPending.value = false;
    }
  };

  return {error, addNewDoc, isPending};
};

export default useCollection;
