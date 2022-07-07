// import { initializeApp } from "firebase/app";
// import { getFirestore,
//     collection,
//     getDocs,
//     addDoc} from 'firebase/firestore/lite';
// import { getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     sendPasswordResetEmail,
//     signOut } from "firebase/auth";
// import "firebase/auth"
//
// const firebaseConfig = {
//     apiKey: "AIzaSyChz9VCsVuyb7bWzM3niEfkw_yMJ9vr2_g",
//     authDomain: "giveingoodhands-12a02.firebaseapp.com",
//     projectId: "giveingoodhands-12a02",
//     storageBucket: "giveingoodhands-12a02.appspot.com",
//     messagingSenderId: "245465048448",
//     appId: "1:245465048448:web:16f70785a2b9b1cd7d8d65",
//     measurementId: "G-V5HG9YEWP4"
// };
//
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// export const auth = getAuth(app);
// export default getFirestore();
// export const logout = () => {
//     signOut(auth);
// };
//
// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });

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
        // await addDoc(collection(db, "users"), {
        //     uid: user.uid,
        //     name,
        //     authProvider: "local",
        //     email,
        // });
    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
};

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
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};