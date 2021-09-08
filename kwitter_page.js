var firebaseConfig = {
    apiKey: "AIzaSyCd8naNqKzx-xnRaFGc3HqPemnjDlD7O0c",
    authDomain: "socialwebsite-dae2c.firebaseapp.com",
    databaseURL: "https://socialwebsite-dae2c-default-rtdb.firebaseio.com",
    projectId: "socialwebsite-dae2c",
    storageBucket: "socialwebsite-dae2c.appspot.com",
    messagingSenderId: "1067744375275",
    appId: "1:1067744375275:web:c7c0b3ae52a423fb4ee9ae"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function Send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
