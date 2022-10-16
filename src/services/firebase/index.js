import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA2efg8ZQSxpdAREDjL9eO--niEqUR8jjE",
    authDomain: "backendpf.firebaseapp.com",
    projectId: "backendpf",
    storageBucket: "backendpf.appspot.com",
    messagingSenderId: "400988866222",
    appId: "1:400988866222:web:19e3f82368398281190f3f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) //es la dirección de mi base de datos en el sitio