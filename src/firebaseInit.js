import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKSUMjLDd7oeGSFe8nvWVud1Odhh4bvSU",
  authDomain: "expencetracker-b5128.firebaseapp.com",
  projectId: "expencetracker-b5128",
  storageBucket: "expencetracker-b5128.appspot.com",
  messagingSenderId: "744915602899",
  appId: "1:744915602899:web:7120e07d8b7652de177326"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
