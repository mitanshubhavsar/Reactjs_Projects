import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJRw8qvhcSsi_jt7UEir6Un4IOg-2iiSo',
  authDomain: 'clone-16838.firebaseapp.com',
  projectId: 'clone-16838',
  storageBucket: 'clone-16838.appspot.com',
  messagingSenderId: '225941075380',
  appId: '1:225941075380:web:af70083942d2b388126ee1',
  measurementId: 'G-LTGGKP71DQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
