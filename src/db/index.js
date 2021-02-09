import firebase from "firebase/app"
import "@firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCR1JqFudfvgibo9dtvzEtzoS6Vgwd4sBY",
    authDomain: "ecommerce-cursoreact-ch.firebaseapp.com",
    projectId: "ecommerce-cursoreact-ch",
    storageBucket: "ecommerce-cursoreact-ch.appspot.com",
    messagingSenderId: "672749805777",
    appId: "1:672749805777:web:405d5cd48c24002442e5f0"
})

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}