// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set, push, get } from "firebase/database";
// import {
//   getStorage,
//   ref as storageRef,
//   uploadBytes,
//   getDownloadURL,
// } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyC8UFS5CwSds-nzpcozF6Pr7nTqOPxiFDA",
//   authDomain: "sapienceminds-14e88.firebaseapp.com",
//   databaseURL: "https://sapienceminds-14e88-default-rtdb.firebaseio.com",
//   projectId: "sapienceminds-14e88",
//   storageBucket: "sapienceminds-14e88.firebasestorage.app",
//   messagingSenderId: "264617161548",
//   appId: "1:264617161548:web:f83729f4706555354915e9",
//   measurementId: "G-HRRSCERX7Z",
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const storage = getStorage(app);
// export {
//   database,
//   storage,
//   ref,
//   set,
//   push,
//   get,
//   storageRef,
//   uploadBytes,
//   getDownloadURL,
// };

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get, remove, update  } from "firebase/database";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyAar6ayUtgJ3VuM3ygNim5JKeDopoEC240",
//   authDomain: "sapience-minds.firebaseapp.com",
//   databaseURL: "https://sapience-minds-default-rtdb.firebaseio.com",
//   projectId: "sapience-minds",
//   storageBucket: "sapience-minds.firebasestorage.app",
//   messagingSenderId: "187885069095",
//   appId: "1:187885069095:web:0b44f9fb86622713ccff02",
//   measurementId: "G-PF4ZD2637F"
// };
const firebaseConfig = {
  apiKey: "AIzaSyB0Jl0OUoxsCz4wogihJ2WofJDTYDotp88",
  authDomain: "incrediquowebsite-dc242.firebaseapp.com",
  databaseURL: "https://incrediquowebsite-dc242-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "incrediquowebsite-dc242",
  storageBucket: "incrediquowebsite-dc242.firebasestorage.app",
  messagingSenderId: "612480357526",
  appId: "1:612480357526:web:da33921a756251942cdeb7",
  measurementId: "G-XF9SX9JTZE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {
  database,
  storage,
  auth,
  ref,
  set,
  push,
  get,
  remove,
  update,
  storageRef,
  uploadBytes,
  getDownloadURL,
  
};
