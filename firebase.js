import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB6gA__CC4CsvNGKepjBrwofGkM1N-PHIc",
    authDomain: "touristguide-3d608.firebaseapp.com",
    databaseURL: "https://touristguide-3d608-default-rtdb.firebaseio.com/",
    projectId: "touristguide-3d608",
    storageBucket: "touristguide-3d608.appspot.com",
    messagingSenderId: "793438750718",
    appId: "1:793438750718:web:05524f9a9b6954b34662af"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);