var firebaseConfig = {
      apiKey: "AIzaSyDUBeY2qtDSBn-TnBnaQpHjCOSugCnVmHY",
      authDomain: "kakaotalk-a714f.firebaseapp.com",
      databaseURL: "https://kakaotalk-a714f-default-rtdb.firebaseio.com",
      projectId: "kakaotalk-a714f",
      storageBucket: "kakaotalk-a714f.appspot.com",
      messagingSenderId: "533221906534",
      appId: "1:533221906534:web:a9c3ddd079d6492cc5f5a7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
 name_user=localStorage.getItem("username");
 function add_room()
 {
       roomname=document.getElementById("room_name").value;
      localStorage.setItem("nameroom",roomname);
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding_room_name"
      });
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div onclick='go_into_room(this.id)' class='room_name'  id='"+Room_names+"'>"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

//End code
      });});}

getData();
function go_into_room(name)
{
console.log(name);
window.location="kwitter_page.html";
localStorage.setItem("nameroom",roomname);
}
