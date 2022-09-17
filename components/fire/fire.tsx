import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Y2ETPNfXkP8ESJs6B7SOZuRA78NTrII",
  authDomain: "onelink-2.firebaseapp.com",
  projectId: "onelink-2",
  storageBucket: "onelink-2.appspot.com",
  messagingSenderId: "77219991443",
  appId: "1:77219991443:web:090be08b65fdf56ab86266"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)    
export  {db, app}