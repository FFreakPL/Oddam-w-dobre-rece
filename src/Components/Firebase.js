import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyChz9VCsVuyb7bWzM3niEfkw_yMJ9vr2_g",
    authDomain: "giveingoodhands-12a02.firebaseapp.com",
    projectId: "giveingoodhands-12a02",
    storageBucket: "giveingoodhands-12a02.appspot.com",
    messagingSenderId: "245465048448",
    appId: "1:245465048448:web:16f70785a2b9b1cd7d8d65",
    measurementId: "G-V5HG9YEWP4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export default getFirestore();