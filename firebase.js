import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDMSHHBLMaYtQ7fuGu39UHK0gIDO5__J7s",
  authDomain: "pantry-app-3eb73.firebaseapp.com",
  projectId: "pantry-app-3eb73",
  storageBucket: "pantry-app-3eb73.appspot.com",
  messagingSenderId: "532040652954",
  appId: "1:532040652954:web:a9f747de95a734e2926723",
  measurementId: "G-4RYW3WJE7D"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };