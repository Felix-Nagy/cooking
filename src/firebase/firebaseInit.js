import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4LOEmhQZyVLjhQBqDidsPwoUK_gw2eo8",
    authDomain: "cooking-4ff40.firebaseapp.com",
    projectId: "cooking-4ff40",
    storageBucket: "cooking-4ff40.appspot.com",
    messagingSenderId: "643569233228",
    appId: "1:643569233228:web:3cc8220618e8fb4851b3e9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export {timestamp};
  export default firebaseApp.firestore();