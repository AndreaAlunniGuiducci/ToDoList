// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANHt2CO9RnAQLPe-v2RiUSgPIAZVfI-5E",
    authDomain: "todolist-5f035.firebaseapp.com",
    projectId: "todolist-5f035",
    storageBucket: "todolist-5f035.appspot.com",
    messagingSenderId: "755491184949",
    appId: "1:755491184949:web:7beab32a5a54d26781ec7c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };