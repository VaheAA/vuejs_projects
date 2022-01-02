import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, addDoc } from 'firebase/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyC3fiORyCvGtzWTdJ5ilWFASrpgJqRlGYs",

    authDomain: "vue-firebase-789a8.firebaseapp.com",

    projectId: "vue-firebase-789a8",

    storageBucket: "vue-firebase-789a8.appspot.com",

    messagingSenderId: "273774693399",

    appId: "1:273774693399:web:65cc82dcf13b64391c6052"

};

initializeApp(firebaseConfig);
const db = getFirestore();
// get a collection
const colRef = collection(db, 'posts');
getDocs(colRef);


// get a single document
const getSinglePost = async (id) => {
    const snap = await getDoc(doc(db, 'posts', id));
    return snap;
};

// add a new doc 
const addNewPost = async (post) => {
    const docRef = await addDoc(collection(db, "posts"), post);
    return docRef;

};

export {
    db,
    getDocs,
    colRef,
    getSinglePost,
    addNewPost
};
