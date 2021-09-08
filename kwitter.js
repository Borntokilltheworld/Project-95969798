const firebaseConfig = {
    apiKey: "AIzaSyAYy44Iuh5H0WD3b0MJgyxtknt_e5yuMe4",
    authDomain: "project94-fb292.firebaseapp.com",
    databaseURL: "https://project94-fb292-default-rtdb.firebaseio.com",
    projectId: "project94-fb292",
    storageBucket: "project94-fb292.appspot.com",
    messagingSenderId: "307550345219",
    appId: "1:307550345219:web:78e4971c2ac3e026371636"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
