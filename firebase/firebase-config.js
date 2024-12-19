import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyArmF-zODfXS5xXeGAHXxK_Q4rB2B95_GU",
    authDomain: "achi-de196.firebaseapp.com",
    projectId: "achi-de196",
    storageBucket: "achi-de196.firebasestorage.app",
    messagingSenderId: "256400611325",
    appId: "1:256400611325:web:e3a86c00a7372d20fa2b94",
    measurementId: "G-PS4MNNP93K"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
