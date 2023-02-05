import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getDatabase, ref } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpfBgQDeFHXOqpe2UIcp7x3ZghsmIt3Hk",
    authDomain: "foodieewoodiee-15c23.firebaseapp.com",
    projectId: "foodieewoodiee-15c23",
    storageBucket: "foodieewoodiee-15c23.appspot.com",
    messagingSenderId: "593936298023",
    appId: "1:593936298023:web:803663001426fa2a575e02",
    measurementId: "G-Q5GVBE27QZ"
};

//Initalize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const database = getDatabase()
export const db = getFirestore()
export const storage = getStorage()
export const provider = new GoogleAuthProvider()
export const refS = ref 