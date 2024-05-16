
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage"; 
import { getFirestore, collection, getDocs } from 'firebase/firestore';
export const firebaseConfig = {
  apiKey: "AIzaSyCLuBLhuc_VG1C2B6k529P2-sjICWCM2P8",
  authDomain: "appconcesionario-adca5.firebaseapp.com",
  projectId: "appconcesionario-adca5",
  storageBucket: "appconcesionario-adca5.appspot.com",
  messagingSenderId: "863702313397",
  appId: "1:863702313397:web:f9815e8cd77b71953891fc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { app,db,storage };

