import { initializeApp } from "firebase/app";
import{getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4RdwMZUkZc0oM--i7I8TKkd5rlcUqYjg",
    authDomain: "demofireabase-681bf.firebaseapp.com",
    projectId: "demofireabase-681bf",
    storageBucket: "demofireabase-681bf.appspot.com",
    messagingSenderId: "1098034470441",
    appId: "1:1098034470441:web:b11f282da862cadb120638",
    measurementId: "G-4G08CHZWZ8"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore();