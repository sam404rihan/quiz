import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDJdKOldUx1TihbSRI-UQi7-xbjptiqN1U",

    authDomain: "quiz-9f85c.firebaseapp.com",

    databaseURL: "https://quiz-9f85c-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "quiz-9f85c",

    storageBucket: "quiz-9f85c.appspot.com",

    messagingSenderId: "507518845625",

    appId: "1:507518845625:web:d05ca2d626fb4bc4df5168",

    measurementId: "G-RWBEND3334"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);