import {ref, watchEffect} from 'vue';
import {app} from '../firebase/config';
import {db} from '../firebase/config';
import {doc, onSnapshot} from 'firebase/firestore';
app;

const getDocumet = (collectionName, id) => {
  const document = ref(null);
  const error = ref(null);

  let docRef = doc(db, collectionName, id);

  const unsubscrbe = onSnapshot(
    docRef,
    (doc) => {
      if (doc.data()) {
        document.value = {...doc.data(), id: doc.id};
        error.value = null;
        console.log(doc);
      } else {
        error.value = `Playlist with id ${doc.id} does not exist`;
      }
    },
    (err) => {
      console.log(err.message);
      error.value = 'could not fetch data';
    }
  );

  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when component unmounted
    onInvalidate(() => {
      unsubscrbe();
    });
  });

  return {document, error};
};

export default getDocumet;
