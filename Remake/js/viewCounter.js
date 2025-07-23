<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDuIcIVG24Qdglr9fzFjKbPQdo7bCCdkNQ",
    authDomain: "timescount-a6205.firebaseapp.com",
    projectId: "timescount-a6205",
    storageBucket: "timescount-a6205.firebasestorage.app",
    messagingSenderId: "683380901163",
    appId: "1:683380901163:web:7d4e483446b2d0d035f16e",
    measurementId: "G-CC4S2JQDP7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
