import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBAJV6SvhvJbRpmG-2P2y3JHgvOhoD7UHI",
  authDomain: "walkie-talkie-4d550.firebaseapp.com",
  databaseURL: "https://walkie-talkie-4d550.firebaseio.com",
  projectId: "walkie-talkie-4d550",
  storageBucket: "walkie-talkie-4d550.appspot.com",
  messagingSenderId: "390060198874",
  appId: "1:390060198874:web:99b8022c2bc4d32d408ee3",
  measurementId: "G-8MCERDT8ZR"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();



