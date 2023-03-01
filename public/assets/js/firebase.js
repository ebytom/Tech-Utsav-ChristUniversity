// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA4qRVhHlm5dRUENu-vywgsTBnRIp0mH8",
  authDomain: "foobar-analytics.firebaseapp.com",
  projectId: "foobar-analytics",
  storageBucket: "foobar-analytics.appspot.com",
  messagingSenderId: "479667898600",
  appId: "1:479667898600:web:64744194442d8a8b4f615d",
  measurementId: "G-EWPJCH9BFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);