/*localStorage.setItem("token", "1234")
sessionStorage.setItem("token", "12345")

console.log(localStorage.getItem("token"))

let token = localStorage.getItem("token")
console.log(token);

localStorage.setItem("number", 6)*/



let formulario = document.querySelector("#login");

function login(event) {
    event.preventDefault();
  //  console.log(event);
   // console.dir(formulario);
    let valueUsername = formulario.username.value;
    let valuePassword = formulario.password.value;

    const objetoUsuario ={
        username: valueUsername,
        password: valuePassword
    }
    console.log(valueUsername);
    console.log(valuePassword);
    const token = generateToken(objetoUsuario.username, objetoUsuario.password);
    localStorage.setItem("token",token);
    const isAuth = exisToken();
    if (isAuth){
            const divPrivateContent = document.querySelector("#privatecontent");
            divPrivateContent.className = "showcontent";
            formulario.className = "hidecontent"
        }
    
    }

function generateToken(username, password) {
    const usuario = {
        username,
        password
    }
    return JSON.stringify(usuario)
}


function exisToken () {
    if (localStorage.getItem("token") !== null) {
    return true;
} else {
    return false;
}
}

//1:40
    

