import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf_IUze2BnR7uDv0870E5JK7OqKZ2eJrs",
  authDomain: "next-1028.firebaseapp.com",
  projectId: "next-1028",
  storageBucket: "next-1028.appspot.com",
  messagingSenderId: "50087211849",
  appId: "1:50087211849:web:84e049b056178752f36098"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)    
export  {db, app}