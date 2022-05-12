import app.js;

const user = document.getElementById("UserName");
const passwor = document.getElementById("Password");

user.addEventListener("keyup", userName);

function userName(event) {
  console.log(event.keyCode);
  if(event.keyCode === 13){
    const user = localStorage.getItem();
    console.log(user);
  }
}
