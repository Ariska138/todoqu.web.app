 import firebase from "firebase/app";
 import "firebase/firestore";
import "firebase/auth";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCrbDjDaa1T7KiXggar16mHLid96Haw4zo",
    authDomain: "todoqu.firebaseapp.com",
    databaseURL: "https://todoqu.firebaseio.com",
    projectId: "todoqu",
    storageBucket: "todoqu.appspot.com",
    messagingSenderId: "135932337458",
    appId: "1:135932337458:web:e5938be044bb4e6c444b2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore();

  export default firebase;