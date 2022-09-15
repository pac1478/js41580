let contador = 0;
let h2Contador = document.querySelector("#contador");
h2Contador.innerHTML = contador;
let inputReset = document.querySelector("#reset");
inputReset.addEventListener(`input`, resetToNumber)

function incrementar(){
    contador +=1;
    actualizarContador()
}

function decrementar(){
    contador -=1;
    actualizarContador()
}

function actualizarContador(){
    h2Contador.innerHTML = contador;
}

function reset(){
    contador = 0;
    actualizarContador()
}

function resetToNumber(event) {
    console.log(event);
    const valueToReset = inputReset.value;
    contador = parseInt(valueToReset);
    actualizarContador();

}