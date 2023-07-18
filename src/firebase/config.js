
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAiSq4a5KCJAHrBkxd6wPRMtJvkEibLdsw",
    authDomain: "doodle-aks.firebaseapp.com",
    projectId: "doodle-aks",
    storageBucket: "doodle-aks.appspot.com",
    messagingSenderId: "174166947635",
    appId: "1:174166947635:web:43e25a7d967dd4fec4f046"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const projectStorage=firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage,projectFirestore};