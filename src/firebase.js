import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9f6XDBG9ZdeGUuBhHoGXznN8WjG8GnT4",
  authDomain: "whatsapp-clon3.firebaseapp.com",
  projectId: "whatsapp-clon3",
  storageBucket: "whatsapp-clon3.appspot.com",
  messagingSenderId: "961947014974",
  appId: "1:961947014974:web:8e2ef0a645caeab3dabe6f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
