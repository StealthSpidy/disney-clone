
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKdpIyd34VLDolH3FThPVA-2z4jdBSXxs",
    authDomain: "disneyplus-clone-d4485.firebaseapp.com",
    projectId: "disneyplus-clone-d4485",
    storageBucket: "disneyplus-clone-d4485.appspot.com",
    messagingSenderId: "1026815072671",
    appId: "1:1026815072671:web:25777f5db28a5dd21445aa",
    measurementId: "G-X8K1CN6M0M"
  };
 
  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage  = firebase.storage();

  export  {auth, provider, storage};
  export default db;