//Definicion de variables.
//Variables para registro
const inputName = document.getElementById("inputName");
const inputUserName = document.getElementById("inputUserName");
const inputPassword = document.getElementById("inputPassword");
const inputPasswordConfirm = document.getElementById("inputPasswordConfirm")
const btnSend = document.getElementById("btn");

//Eventos a utilizar.
//eventos para registro
inputName.addEventListener("keyup", nameValid);
inputUserName.addEventListener("keyup", userNameValid);
inputPassword.addEventListener("keyup", passwordValid);
inputPasswordConfirm.addEventListener("keyup", passwordValid);
btnSend.addEventListener("click", saveData);
btnSend.addEventListener("click", showData);

const regExp = {
  user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Valida acentos y va de 1,40
  password: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

let users = [];

function save(){
  return users(nameuser,password)
}


function showData(){
  let name = JSON.parse(localStorage.getItem(storageData.userName));
  
  console.log(name);
}

function saveData(){
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

  users.unshift(storageData.password,storageData.userName);
  localStorage.setItem(storageData.userName, JSON.stringify(storageData))

}

function nameValid(event){
  const keyboardEvent = event.target.value; 

  if(regExp.name.test(keyboardEvent)){
    console.log("Caracter Valido name");

  }else{
    console.log("Caracter invalido Name");
  }
} 

function userNameValid(event){
  const keyboardEvent = event.target.value; 

  if(regExp.user.test(keyboardEvent)){
    console.log("Caracter Valido User name");

  }else{
    console.log("Caracter invalido User name");
  } 
}

function passwordValid(event){
  const keyboardEvent = event.target.value; 
  let incriptation;

  for(let i=0; i < event.target.value.length; i++){
    incriptation = incriptation + "*";
    if(inputPassword.type == "text"){
      inputPassword.value == incriptation;
    }
  }

    if(inputPasswordConfirm.value == inputPassword.value){
      console.log("Las constraseñas coinciden");
    }else{
      console.log("no coinciden");
    }

    if(regExp.password.test(keyboardEvent)){
      console.log("Caracter Valido password");

    }else{
      console.log("Caracter invalido password");
    } 
}


