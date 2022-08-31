import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzU1kqH4_7-McjzPNhmSyRqZ2BZxoVsn0",
  authDomain: "next-328c0.firebaseapp.com",
  projectId: "next-328c0",
  storageBucket: "next-328c0.appspot.com",
  messagingSenderId: "786846321039",
  appId: "1:786846321039:web:ddec9613cd7505818aa3fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)    
export default db