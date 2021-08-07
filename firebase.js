import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKixJdlTpS3oezXK739d6aDA2ZzDdsZPM",
  authDomain: "facebook-clone-e2299.firebaseapp.com",
  projectId: "facebook-clone-e2299",
  storageBucket: "facebook-clone-e2299.appspot.com",
  messagingSenderId: "104670961356",
  appId: "1:104670961356:web:f9a7550cc94d9bef2dac69",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = app.storage();

export { db, storage };
