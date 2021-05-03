import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "",
    authDomain: "evernote-ec1a9.firebaseapp.com",
    projectId: "evernote-ec1a9",
    storageBucket: "evernote-ec1a9.appspot.com",
    messagingSenderId: "95352223441",
    appId: ""
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export default db;
