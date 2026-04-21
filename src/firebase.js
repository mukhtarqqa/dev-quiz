import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCje45qZIaxOfJv4Snl1bvtLEkI2dRVUrk",
  authDomain: "devquiz-2-0.firebaseapp.com",
  projectId: "devquiz-2-0",
  storageBucket: "devquiz-2-0.firebasestorage.app",
  messagingSenderId: "315859938006",
  appId: "1:315859938006:web:d80437cd7368af23697777",
  measurementId: "G-29ZDZ23HGR"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
