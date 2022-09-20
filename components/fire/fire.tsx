import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrI1oL4gk2F1paxcpMycegHAAuiLkrb4k",
  authDomain: "threelink-b269a.firebaseapp.com",
  projectId: "threelink-b269a",
  storageBucket: "threelink-b269a.appspot.com",
  messagingSenderId: "487898461484",
  appId: "1:487898461484:web:443144852291971e072889"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)    
export  {db, app}