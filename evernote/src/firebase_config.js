import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCfYmFvdzwHYd4x_eb7hM-Axqltn582TJ8",
    authDomain: "evernote-ec1a9.firebaseapp.com",
    projectId: "evernote-ec1a9",
    storageBucket: "evernote-ec1a9.appspot.com",
    messagingSenderId: "95352223441",
    appId: "1:95352223441:web:1975dab367f9aa710337f0"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export default db;