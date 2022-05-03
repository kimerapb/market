import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJKeKJrvL5qfdSNpu7-1h09j0PD48_fJs",
  authDomain: "coderhouse-market.firebaseapp.com",
  projectId: "coderhouse-market",
  storageBucket: "coderhouse-market.appspot.com",
  messagingSenderId: "827905535574",
  appId: "1:827905535574:web:0a27dde677708c6e6f95f7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);