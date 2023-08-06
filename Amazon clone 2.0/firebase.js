var firebaseConfig = {
  apiKey: "AIzaSyAxe2w1LlwSh-21vHRmdhHtXRbs0rKLwJM",
  authDomain: "clone-two-52ff1.firebaseapp.com",
  projectId: "clone-two-52ff1",
  storageBucket: "clone-two-52ff1.appspot.com",
  messagingSenderId: "761626137257",
  appId: "1:761626137257:web:2ecaa0e4154b3166570fb8",
  measurementId: "G-DQ55PS5M45"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

var db= firebase.firestore();