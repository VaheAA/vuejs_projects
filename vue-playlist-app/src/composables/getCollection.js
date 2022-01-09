import {ref, watchEffect} from 'vue';
import {db} from '../firebase/config';
import {collection, orderBy, query, onSnapshot} from 'firebase/firestore';

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  let colRef = collection(db, collectionName);
  let q = query(colRef, orderBy('createdAt'));
  const unsubscrbe = onSnapshot(
    q,
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({...doc.data(), id: doc.id});
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = 'could not fetch data';
    }
  );

  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when component unmounted
    onInvalidate(() => {
      unsubscrbe();
    });
  });

  return {documents, error};
};

export default getCollection;
