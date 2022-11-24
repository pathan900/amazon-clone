// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCMdm3O8q2s8uT4lNFbcqdkayC28MdABIQ",
    authDomain: "clone-5b5cf.firebaseapp.com",
    projectId: "clone-5b5cf",
    storageBucket: "clone-5b5cf.appspot.com",
    messagingSenderId: "276828463711",
    appId: "1:276828463711:web:94c2578162967a6847f1ea",
    measurementId: "G-68SCP4L5N1"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};