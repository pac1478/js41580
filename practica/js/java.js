
//ejercicio 1
/*for (let i = 10; i <= 50; i++) {
    console.log(i)
    }



//ejercicio 2

let numero = parseInt(prompt("Ingrese un número hasta el 100"));

console.log(numero);



for (let i = 0; i < numero; i++) {
    if(i % 2 == 0)
    console.log(i)
};




let carrito = {
    efectivo: 5000,
    productos: "limpieza",
    saldo: 3000,
    tarjeta: true,
    resta: function (a,b) {
        return a-b
    }
    

}

console.log(carrito.resta(carrito.efectivo,carrito.saldo))


const number = prompt("Ingrese cantidad de usuarios que desea cargar")

function Consola(name, surname, dni) {
    this.name = name
    this.surname = surname
    this.dni = dni
}

for(i = 1; i <=number; i++) {
    let nombre = prompt("ingrese nombre")
    let apellido = prompt("ingrese apellido")
    let dni = prompt("ingrese DNI")

    if(nombre && apellido && dni && number) {
        let users = new Consola(nombre,apellido,dni,number)

        console.log(users)
    }
    else {
        alert("falta un dato")
    }
}

alert("usuario agregado a la consola");

*/

class Usuario {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido; 
        this.edad = edad;
    }
}

let usuarios = [];

agregarUsuario(usuarios)
vertTodosLosUsuarios(usuarios)

function agregarUsuario(usuarios){

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = Number(prompt("Ingrese su edad"));
let newUser = new Usuario(nombre, apellido, edad);

usuarios.push(newUser);

}

function vertTodosLosUsuarios(usuarios) {
console.log(usuarios);
}

