import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDg3Q65WkMcvBohhe_4PRbB67vB4Lmlrig",
    authDomain: "linkedid-clone-yt.firebaseapp.com",
    projectId: "linkedid-clone-yt",
    storageBucket: "linkedid-clone-yt.appspot.com",
    messagingSenderId: "802977404120",
    appId: "1:802977404120:web:cd4d0b94ae50491b0cb3ad",
    measurementId: "G-VWZ1E5R5DH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };