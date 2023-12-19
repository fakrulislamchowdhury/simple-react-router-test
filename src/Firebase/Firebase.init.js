// Initialize Firebase

import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const initializationAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuth;