import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Конфигурация вашего проекта
const firebaseConfig = {
  apiKey: "AIzaSyBeDVmRsPo8UGgpIpo6s2QqxAP8E7q-6Hs",
  authDomain: "openko-62d24.firebaseapp.comm",
  projectId: "openko-62d24",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function exportFirestoreData() {
  // Получаем ссылку на нужную коллекцию (например, "users")
  const querySnapshot = await getDocs(collection(db, "users"));
  
  // Преобразуем документы в массив JS-объектов
  const data = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  console.log("Выгруженные данные:", data);
  return data;
}

exportFirestoreData();
