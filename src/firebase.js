import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Функция для получения случайного вопроса
export const getRandomQuestion = async () => {
  const querySnapshot = await getDocs(collection(db, "questions"));
  const questions = querySnapshot.docs.map(doc => doc.data());
  return questions[Math.floor(Math.random() * questions.length)];
};
