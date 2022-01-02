function addUser(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("username" , username);
    window.location="kwitter_room.html";
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    if(keyPressed == 13){
    username = document.getElementById("user_name").value;
    localStorage.setItem("username" , username);
    window.location="kwitter_room.html";
    }
}