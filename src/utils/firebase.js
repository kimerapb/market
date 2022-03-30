// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//importamos la instancia firestore de firebase
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJKeKJrvL5qfdSNpu7-1h09j0PD48_fJs",
  authDomain: "coderhouse-market.firebaseapp.com",
  projectId: "coderhouse-market",
  storageBucket: "coderhouse-market.appspot.com",
  messagingSenderId: "827905535574",
  appId: "1:827905535574:web:0a27dde677708c6e6f95f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// creamos la const de getfirebase
export const db = getFirestore(app);