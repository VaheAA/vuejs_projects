import {app} from '../firebase/config';
import {db} from '../firebase/config';
import {doc, deleteDoc} from 'firebase/firestore';
import {ref} from 'vue';
app;

const useDocument = (collectionName, id) => {
  const error = ref(null);
  const isPending = ref(false);

  let docRef = doc(db, collectionName, id);

  const delDoc = async () => {
    error.value = null;
    isPending.value = true;
    try {
      const res = await deleteDoc(docRef);
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      isPending.value = false;
      error.value = 'could not delete the document';
    }
  };
  return {error, delDoc, isPending};
};

export default useDocument;
