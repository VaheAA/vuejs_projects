import {ref} from 'vue';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../firebase/config';
import {getAnalytics, logEvent} from 'firebase/analytics';

const analytics = getAnalytics();

const useCollection = (collectionName) => {
  const error = ref(null);
  const isPending = ref(false);

  const addNewDoc = async (doc) => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await addDoc(collection(db, collectionName), doc);
      isPending.value = false;
      logEvent(analytics, 'add_playlist', {
        playlist_name: doc.title,
        userId: doc.userId
      });

      return res;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
      isPending.value = false;
    }
  };

  return {error, addNewDoc, isPending};
};

export default useCollection;
