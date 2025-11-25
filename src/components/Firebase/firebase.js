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
//   apiKey: "AIzaSyAE7QYfIQPtSyT5AYxd0Ih0Nz_EnyxsNPA",
//   authDomain: "hrms-website.firebaseapp.com",
//   databaseURL: "https://hrms-website-default-rtdb.firebaseio.com",
//   projectId: "hrms-website",
//   storageBucket:  "hrms-website.appspot.com",
//   messagingSenderId: "80513858592",
//   appId: "1:80513858592:web:a8bc3e6ce3ddf5611bd045",
//   measurementId: "G-HBY8R3ZF7Y",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAar6ayUtgJ3VuM3ygNim5JKeDopoEC240",
  authDomain: "sapience-minds.firebaseapp.com",
  databaseURL: "https://sapience-minds-default-rtdb.firebaseio.com",
  projectId: "sapience-minds",
  storageBucket: "sapience-minds.firebasestorage.app",
  messagingSenderId: "187885069095",
  appId: "1:187885069095:web:0b44f9fb86622713ccff02",
  measurementId: "G-PF4ZD2637F"
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
