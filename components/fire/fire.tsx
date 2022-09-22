import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: "AIzaSyCE4yEbBzefGekUxX2Okq4crSzIQ0zkj44",
  authDomain: "onelink-sample.firebaseapp.com",
  projectId: "onelink-sample",
  storageBucket: "onelink-sample.appspot.com",
  messagingSenderId: "76066462616",
  appId: "1:76066462616:web:542d77bb7b0d01e27469ed"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)    
export  {db, app}