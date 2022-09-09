import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdkW7zDEumvsQ71Dvjifnb-HUG88T0RDE",
  authDomain: "onelink-4be1f.firebaseapp.com",
  projectId: "onelink-4be1f",
  storageBucket: "onelink-4be1f.appspot.com",
  messagingSenderId: "878476602685",
  appId: "1:878476602685:web:e5549ade0b8d17c2c9e954"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)    
export  {db, app}