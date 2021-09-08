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
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!"
function addroom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room names"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room name-"+Room_names);
row = "<div class = 'room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML = row;
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}