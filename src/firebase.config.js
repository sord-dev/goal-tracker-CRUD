// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore/lite";

// Enter your firebase details here!
// const firebaseConfig = {
//   apiKey: [apiKey here],
//   authDomain: [authDomain here],
//   projectId: [projectId here],
//   storageBucket: [storageBucket here],
//   messagingSenderId: [messagingSenderId here],
//   appId: [appId here],
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const goalCollection = collection(db, "goals");

class FirestoreProvider {
  getAll = () => {
    return getDocs(goalCollection);
  };

  get = (id) => {
    const goalDoc = doc(db, "goals", id);
    return getDoc(goalDoc);
  };

  store = (item) => {
    return addDoc(goalCollection, item);
  };

  del = (id) => {
    const goalDoc = doc(db, "goals", id);
    return deleteDoc(goalDoc);
  };

  update = (id, data) => {
    const goalDoc = doc(db, "goals", id);
    return updateDoc(goalDoc, data);
  };
}

export default new FirestoreProvider();
