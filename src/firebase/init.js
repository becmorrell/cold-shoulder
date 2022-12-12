// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7eDoiok9lBHXt72j82zqsLZgWa6e-KPc",
  authDomain: "becca-test-bed5b.firebaseapp.com",
  databaseURL: "https://becca-test-bed5b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "becca-test-bed5b",
  storageBucket: "becca-test-bed5b.appspot.com",
  messagingSenderId: "250200355791",
  appId: "1:250200355791:web:27ef2705eda4708f5d98ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db