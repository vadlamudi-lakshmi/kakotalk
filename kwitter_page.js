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
 
var room_name=localStorage.getItem("nameroom");
name_user=localStorage.getItem("username");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }


getData();

function send()
{
      msg =document.getElementById("send").value;
      firebase.database().ref(room_name).push({
            name:name_user,
            message:msg,
            like:0
      });

      document.getElementById("send").value="";
}


