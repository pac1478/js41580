const valorKm = parseInt(160);
let cantKm = 0             

alert("Bienvenido, por favor escoja un punto de partida para calcular su costo de viaje al hotel Alvear");

let puntoPartida = prompt("1 - Ezeiza, 2 - Aeroparque");

if (puntoPartida !== "1" && puntoPartida !== "2") {
    alert("Debe elegir 1 o 2, no podremos calcular tu costo")

}
else if(puntoPartida == 1){
    cantKm = 40
}

else {
    cantKm = 20
}

console.log(cantKm);

function calculoPrecio (num1, num2) {
    return num1 * num2
}


alert("El costo de su viaje es ARS" + calculoPrecio(cantKm, valorKm));






