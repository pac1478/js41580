const valorKm = parseInt(160);
let cantKm = 0             

alert("Bienvenido, por favor escoja un punto de partida para calcular su costo de viaje al hotel Alvear");

let puntoPartida = prompt("1 - Ezeiza, 2 - Aeroparque");


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


function calculoPrecio (num1, num2) {
    return num1 * num2
}

if(cantKm != 0){


alert("El costo de su viaje es ARS" + calculoPrecio(cantKm, valorKm));

}

else {
    alert("No podemos calcular el costo del viaje.")
}




