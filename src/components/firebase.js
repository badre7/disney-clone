// Import de functies die je nodig hebt
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuratie
const firebaseConfig = {
  apiKey: "AIzaSyAt4MiM_KDbIagczkwAdIjY17Y0zardjD4",
  authDomain: "disneyplus-clone-51165.firebaseapp.com",
  projectId: "disneyplus-clone-51165",
  storageBucket: "disneyplus-clone-51165.firebasestorage.app",
  messagingSenderId: "290925607257",
  appId: "1:290925607257:web:18573be2de0f9132413448"
};

// Initializeer je app
const app = initializeApp(firebaseConfig);

// aparte instanties
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage};
export default db;