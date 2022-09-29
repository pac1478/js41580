//Elijo LUXON porque voy a trabajar con fechas de reservas.

const precioKm = 160
let kms = 0
const DateTime = luxon.DateTime
const dt = DateTime.now();

fetch("./json/datos.json")
.then((posts) => posts.json()
.then((data) => {
    const ap1 = data[0].aeropuerto;
    console.log(ap1);
    const ap2 = data[1].aeropuerto;
    console.log(ap2)

}))

console.log(ap1)


console.log(dt)

function login(event) {
    event.preventDefault();
    console.log(event);
    let formulario = document.querySelector("#login");
    console.dir(formulario);
    let valueUsername = formulario[0].value;
    let valuePassword = formulario[1].value;
    console.log(valueUsername);
    console.log(valuePassword)
    const token = generateToken(valueUsername, valuePassword)
    localStorage.setItem("token", token)
    const autenticado = tokenExiste()
    if(autenticado){
    const ocultarLogin = document.querySelector("#divlogin")
    ocultarLogin.className = "loginhide";
    const mostrarAep = document.querySelector("#selectaeropuerto")
    mostrarAep.className = "selectaeropuerto__show"

}

    }

function generateToken(username, password){
    const usuario = {
        username,
        password,
    }

return JSON.stringify(usuario)

}


function tokenExiste() {
    
    if(localStorage.getItem("token")){
        return true;
    } else{
        return false
    }
    }

function ezeiza(event){
    event.preventDefault(); 
    console.log(event)
    let choicer = document.querySelector("#aep")
    console.log(choicer)
    let valueAepChoice = choicer[0].value;
    console.log(valueAepChoice);


}

fetch("./json/datos.json")
.then((posts) => posts.json()
.then((data) => {
    const ap1 = data[0].aeropuerto;
    console.log(ap1);
    const ap2 = data[1].aeropuerto;
    console.log(ap2);
    console.log(valueAepChoice)
    if(valueAepChoice = 1){
        kms = 42
        let inn = document.getElementById("innertxt")
        console.log(inn)
        inn.innerText = "El costo de su viaje es de " + calculoViaje(precioKm, kms) + ". lo pasaremos a buscar el " + dt.toLocaleString(DateTime.DATE_FULL) + " por " + ap1;
        
     }
    else if(valueAepChoice = 2){
        kms = 25
        let inn = document.getElementById("innertxt")
        console.log(inn)
        console.log(kms)
        inn.innerText = "El costo de su viaje es de " + calculoViaje(precioKm, kms)  + ". lo pasaremos a buscar el " + dt.toLocaleString(DateTime.DATE_FULL) + " por " + ap2; 
    }
    else{
        let inn = document.getElementById("innertxt")
        console.log(inn)
        inn.innerText = "debe ingresar un número correcto"
    }
    
    
}))

    


function calculoViaje(precioKm, kms){
return precioKm * kms
}









