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

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const pageId = "home";
const viewRef = db.ref("views/" + pageId);

// 更新瀏覽次數
viewRef.transaction(current => (current || 0) + 1);

// 顯示瀏覽次數
viewRef.on("value", snapshot => {
  document.getElementById("viewCount").textContent = "本頁瀏覽次數：" + snapshot.val();
});
