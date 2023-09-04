import {initializeApp}  from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { collection, getFirestore , addDoc, serverTimestamp } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAmdAmSyd19OEFLtVxjIJJM01EvC7eCn30",
  authDomain: "clone-reactjs-389d2.firebaseapp.com",
  projectId: "clone-reactjs-389d2",
  storageBucket: "clone-reactjs-389d2.appspot.com",
  messagingSenderId: "375904931875",
  appId: "1:375904931875:web:2bbdae4a5c19271e99e196",
};
const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

function getServerTimestamp() {
  return serverTimestamp();
}
export { database, getServerTimestamp, auth, provider};