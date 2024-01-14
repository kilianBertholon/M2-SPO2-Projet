import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = {
  apiKey: "AIzaSyDcmovKMPQ6UUXowrg-8eEoJVjMnMeXanQ",
  authDomain: "sp02project.firebaseapp.com",
  projectId: "sp02project",
  storageBucket: "sp02project.appspot.com",
  messagingSenderId: "1018845378736",
  appId: "1:1018845378736:web:1d4854f074d373329fa375",
  measurementId: "G-4G86GYM77H"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth, app}

