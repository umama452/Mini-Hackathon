// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfjnPJ-o7cF7pas-feweXeOVOxt5kmE7g",
    authDomain: "hackathon-fcb7c.firebaseapp.com",
    projectId: "hackathon-fcb7c",
    storageBucket: "hackathon-fcb7c.appspot.com",
    messagingSenderId: "459793046612",
    appId: "1:459793046612:web:b9a8a2d92405110e7021c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}