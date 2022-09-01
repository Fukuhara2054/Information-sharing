import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOKVIm6tyxm9o8CxujL7ztnctgYcdGAFs",
  authDomain: "sample-iwasaki.firebaseapp.com",
  projectId: "sample-iwasaki",
  storageBucket: "sample-iwasaki.appspot.com",
  messagingSenderId: "319772155522",
  appId: "1:319772155522:web:65e4ecb9e021f665769e9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)    
export default db