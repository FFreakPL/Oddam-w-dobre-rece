import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
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
const auth = getAuth(app);
const db = getFirestore(app);


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const userCollection = collection(db, "users");
        const payload = {email: email, password: password, userType: "normal"}
        await addDoc(userCollection, payload)

    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const sendData = async (dataName, data) => {
    try {
        const res = await logInWithEmailAndPassword(auth);
        const user = res.user;
        const data = res.data;
        const dataCollection = collection(db, "data");
        const upload = {dataName: dataName, data: "data" }
        await addDoc(dataCollection, upload)
    }
    catch (err) {
        console.error(err);
        alert(err.message)
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logout = () => {
    signOut(auth);
};
export {
    auth,
    db,
    sendData,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};