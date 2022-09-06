let nombre = prompt("Ingrese su nombre");
if (nombre == "Pablo")
{alert("Hola Pablo")}
else if (nombre == "Roberto") 
{alert("Hola Roberto")}
else 
{alert("Hola Extraño")}

// prueba de if booleano
let verdad = true;
if (verdad) {
    alert("es posta")
}
else {
    alert("es falso")
};

//con condición compuesta

let nombreIngresado = prompt("ingrese nombre");
let apellidoIngresado = prompt("ingrese su apellido");

if(nombreIngresado != "" && apellidoIngresado !="") {
    alert("Hola " + nombreIngresado + " " + apellidoIngresado)
}
else{
    alert("ingrese nombre")
}


