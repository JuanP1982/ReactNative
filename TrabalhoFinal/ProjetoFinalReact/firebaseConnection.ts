
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, Auth, Persistence } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7CwHJMLBgOQ5Qkv39yzeYO_D8IcXNk5A",
  authDomain: "aula-98bb5.firebaseapp.com",
  projectId: "aula-98bb5",
  storageBucket: "aula-98bb5.appspot.com",
  messagingSenderId: "784434287337",
  appId: "1:784434287337:web:35ceb0cb74415a3cfd1678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app)




export {db, auth, storage};