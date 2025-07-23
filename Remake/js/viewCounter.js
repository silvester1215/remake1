// viewCounter.js（模組格式）
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, runTransaction, onValue } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyDuIcIVG24Qdglr9fzFjKbPQdo7bCCdkNQ",
  authDomain: "timescount-a6205.firebaseapp.com",
  databaseURL: "https://timescount-a6205-default-rtdb.firebaseio.com",
  projectId: "timescount-a6205",
  storageBucket: "timescount-a6205.appspot.com",
  messagingSenderId: "683380901163",
  appId: "1:683380901163:web:7d4e483446b2d0d035f16e",
  measurementId: "G-CC4S2JQDP7"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 頁面 ID
const pageId = "home";
const viewRef = ref(db, "views/" + pageId);

// 更新瀏覽次數
runTransaction(viewRef, current => {
  return (current || 0) + 1;
});

// 顯示瀏覽次數
onValue(viewRef, snapshot => {
  document.getElementById("viewCount").textContent = "本頁瀏覽次數：" + snapshot.val();
});
, ref, onValue, runTransaction } from "https://
