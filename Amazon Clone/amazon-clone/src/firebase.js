import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAhP5fEqAfGeFRtQmuZCAJ-gHBmfPoxnao',
  authDomain: 'clone-2f9b0.firebaseapp.com',
  projectId: 'clone-2f9b0',
  storageBucket: 'clone-2f9b0.appspot.com',
  messagingSenderId: '1028323125561',
  appId: '1:1028323125561:web:8d8c103b025190458c60e8',
  measurementId: 'G-JS0EZR8F2W',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
