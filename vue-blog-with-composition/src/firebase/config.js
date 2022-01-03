import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, deleteDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';


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

const createdAt = serverTimestamp();

// get a collection
const getAllPosts = async () => {
    const colRef = await getDocs(collection(db, 'posts'));
    return colRef;
};
// get a collection realtime
const getRealtimePosts = () => {
    const colRef = onSnapshot(collection(db, 'posts'));
    return colRef;
};

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
// delete single doc 
const removeDoc = async (id) => {
    await deleteDoc(doc(db, "posts", id));
};


export {
    db,
    getAllPosts,
    getSinglePost,
    addNewPost,
    removeDoc,
    createdAt,
    getRealtimePosts
};
