import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBA2MWsUSPvVX1F0Wr4lISsE7Py5IMiL_o',
  authDomain: 'whatsapp-clone-6ab4d.firebaseapp.com',
  projectId: 'whatsapp-clone-6ab4d',
  storageBucket: 'whatsapp-clone-6ab4d.appspot.com',
  messagingSenderId: '840887516883',
  appId: '1:840887516883:web:d54defda7596891f989e26',
  measurementId: 'G-5ZSJSDK3MJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
