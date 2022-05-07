const inputName = document.getElementById("inputName");
const inputUserName = document.getElementById("inputUserName");
const inputPassword = document.getElementById("inputPassword");
const inputPasswordConfirm = document.getElementById("inputPasswordConfirm")
const btnSend = document.getElementById("btn");

btnSend.addEventListener("click", showData);
btnSend.addEventListener("click", saveData);

let users = [];

let nameFull = inputName.value;
let nameUser = inputUserName.value;
let pass = inputPassword.value;
let passConfirm = inputPasswordConfirm.value;

let storageData = {
  fullName: nameFull ,
  userName: nameUser ,
  password: pass ,
  passwordConfirm:passConfirm 
};

function showData(){
  let name = JSON.parse(localStorage.getItem("iku"));
  
  console.log(name);
}

function saveData(){
  users.unshift(storageData);
  localStorage.setItem("iku", JSON.stringify(storageData));

}