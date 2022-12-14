import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCO7yFywo5KbsWvjtghZmgC3pPVRDaHJlo",
  authDomain: "fisioevolui.firebaseapp.com",
  projectId: "fisioevolui",
  storageBucket: "fisioevolui.appspot.com",
  messagingSenderId: "313844843671",
  appId: "1:313844843671:web:b338a07c07ea02e8a115d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { auth }; 