import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDKtgDv7bpRc8C9H58ETi54aMSAuyEOBTw",
    authDomain: "mingo-f18be.firebaseapp.com",
    projectId: "mingo-f18be",
    storageBucket: "mingo-f18be.appspot.com",
    messagingSenderId: "828699448903",
    appId: "1:828699448903:web:cfe7ce3ca4e15afcc40362",
    measurementId: "G-BW519ZDQZX"
})

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
  db,
  auth,
  storage
}