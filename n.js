var firebaseConfig = {
    apiKey: "AIzaSyCc48_9FeDdzUvE4yEWxDFoFIAzuDNEeQ4",
    authDomain: "sdgegre-b8407.firebaseapp.com",
    databaseURL: "https://sdgegre-b8407-default-rtdb.firebaseio.com",
    projectId: "sdgegre-b8407",
    storageBucket: "sdgegre-b8407.appspot.com",
    messagingSenderId: "757463657433",
    appId: "1:757463657433:web:843606b129b80b6ebc87c8",
    measurementId: "G-YZGD9GK52S",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="🎅Bienvenido "+user_name+"🎅";
  function addRoom(){
room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({ purpose: "Agregar nombre de sala" });
localStorage.setItem("room_name", room_name);
window.location="ola.html"

  }
  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Inicio del código
        console.log("Nombres de salas -" + Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
  
        //Final del código
        }); }); }
    getData();

    function redirectToRoomName(name)
    {console.log(name)
    localStorage.setItem("room_name", name);
    window.location="ola.html";
  
    }
    function logOut()
    {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }