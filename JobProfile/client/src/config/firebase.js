
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "job-listing-fa33e.firebaseapp.com",
    projectId: "job-listing-fa33e",
    storageBucket: "job-listing-fa33e.appspot.com",
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: "G-1FWTY8QX3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export {storage, ref, uploadBytes, getDownloadURL}