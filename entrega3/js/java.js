const valorKm = parseInt(160);
let cantKm = 0             

alert("Bienvenido, por favor escoja un punto de partida para calcular su costo de viaje al hotel Alvear");

let puntoPartida = prompt("1 - Ezeiza, 2 - Aeroparque");

//agrego el ciclo
switch(puntoPartida) {
    
    case "1":
        cantKm = 40;
        break;
   
    case "2":
        cantKm = 20;
        break;

    default:
        cantKm = 0
        alert("Debe ingresar un número válido.");
        break

}

//agrego función
function calculoPrecio (num1, num2) {
    return num1 * num2
}

if(cantKm != 0){


alert("El costo de su viaje es ARS" + calculoPrecio(cantKm, valorKm));

}

else {
    alert("No podemos calcular el costo del viaje.")
}

//agrego array
const aeropuertos = ["aeroparque", "ezeiza"]

console.log(cantKm)


if (cantKm == 40) {
    alert("Lo esperamos en " + aeropuertos[1])
}
else if (cantKm == 20) {
    alert("Lo esperamos en " + aeropuertos[0])
}
else {
    alert("Por favor recargue la página e intente nuevamente1")
}

alert("Le gustaría que agregaramos algún punto más de pick up para sus viajes?");
let respuestaAgregado = prompt("Si quiere agregar un destino coloque 1, caso contrario coloque 0")

let nuevoDestino = 0;

//hago un push con nuevo destino
switch(respuestaAgregado){
    case "1":
    nuevoDestino = prompt("Indique el origen que le gustaría agregar")
    aeropuertos.push(nuevoDestino)
    break

    default :
    alert("Muchas gracias por su ayuda") 
}

console.log(aeropuertos)



