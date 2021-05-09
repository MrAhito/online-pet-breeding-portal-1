import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyA0QkOrSkOsAt_oGZW3rCrT_exSN5ltv7U",
    authDomain: "nline-pet-breeding.firebaseapp.com",
    projectId: "nline-pet-breeding",
    storageBucket: "nline-pet-breeding.appspot.com",
    messagingSenderId: "1046823156017",
    appId: "1:1046823156017:web:b3a109a962b4ac79a8d810"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth };
export { storage };
export { firebaseApp };
export default db;
