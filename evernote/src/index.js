import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebase = require('firebase');
require('firebase/firestore');

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

ReactDOM.render(
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
