import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyABEpq7zyR5l_QoKXSUPmCLwjc-9PutdDg",
    authDomain: "nhung-nguyen-beauty.firebaseapp.com",
    projectId: "nhung-nguyen-beauty",
    storageBucket: "nhung-nguyen-beauty.appspot.com",
    messagingSenderId: "428498253856",
    appId: "1:428498253856:web:468b0a9569522c9fa0e445",
    measurementId: "G-D9GR49VGB1"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };