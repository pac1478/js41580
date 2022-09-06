
//funciones sin parámetros
function saludar () {
    console.log("hola mundo!")
}

saludar ()


function solicitarNombre () {
    let nombre = prompt("ingresa tu nombre");
    alert ("Hola " + nombre)
    if (nombre !== "Pablo") {
        alert ("tenés un feo nombre")
    }
}

solicitarNombre ();

//función con parámetros
function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero
    return resultado;

}

let primerNumero = parseInt(prompt("ingresar número"));
let segundoNumero = parseInt(prompt("ingresar número"));


console.log(sumar(primerNumero, segundoNumero));


