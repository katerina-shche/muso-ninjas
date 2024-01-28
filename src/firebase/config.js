// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore, collection, 
    getDocs,
    onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABIUdy0EKoTTMBW4zgnZNqLU1jota0_3w",
  authDomain: "muso-ninjas-shche.firebaseapp.com",
  projectId: "muso-ninjas-shche",
  storageBucket: "muso-ninjas-shche.appspot.com",
  messagingSenderId: "420898076219",
  appId: "1:420898076219:web:db6690112721bbbc6fce1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init serveses

const projectFirestore = getFirestore(app)
const projectAuth = getAuth(app)

//init timestamp

const timestamp = serverTimestamp

export { projectAuth, projectFirestore, timestamp }