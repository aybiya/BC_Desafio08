// 1: Leer title e imprimrloo en consola
/* let title = document.querySelector("title");
console.log(title.innerHTML); */

console.log(document.title);

// 3: Mostrar el nombre completo de cada integrante en consola:


//-- Primer integrante
const Nombre1 = document.getElementById("js-primerNombre").textContent;
const Nombre2 = document.getElementById('js-segundoNombre').textContent;
const Apellido1 = document.getElementById('js-primerApellido').textContent;
let apellido1 = Apellido1.toUpperCase();
const Apellido2 = document.getElementById('js-segundoApellido').textContent;
let apellido2 = Apellido2.toUpperCase();


let integrante1 = [" " + Nombre1 + " " + Nombre2 + ", " + apellido1 + apellido2];



//-- Segundo integrante
const Nombre1B = document.getElementById("js-primerNombre2").textContent;
const Nombre2B = document.getElementById('js-segundoNombre2').textContent;
const Apellido1B = document.getElementById('js-primerApellido2').textContent;
let apellido1B = Apellido1B.toUpperCase();
const Apellido2B = document.getElementById('js-segundoApellido2').textContent;
let apellido2B = Apellido2B.toUpperCase();


let integrante2 = [ " " + Nombre1B + " " + Nombre2B + ", " + apellido1B + " " + apellido2B];


console.log(`
-------
Integrante 1:${integrante1}
Integrante 2:${integrante2}
-------
`);

// Comparar


if(confirm("Desea comparar los nombres?")){
  if(Nombre1 == Nombre1B){
    console.log("Hubo Coincidencias en los nombres");
    var color = prompt("Ingrese un color para resaltar los nombres que coinciden:");
    document.getElementById('js-primerNombre').style.color=color; 
    document.getElementById('js-primerNombre2').style.color=color;
  }else if(Nombre1 == Nombre2B){
    console.log("Hubo Coincidencias en los nombres");
    var color = prompt("Ingrese un color para resaltar los nombres que coinciden:");
    document.getElementById('js-primerNombre').style.color=color; 
    document.getElementById('js-segundoNombre2').style.color=color;
  }else if(Nombre2 == Nombre1B){
    console.log("Hubo Coincidencias en los nombres");
    var color = prompt("Ingrese un color para resaltar los nombres que coinciden:");
    document.getElementById('js-segundoNombre').style.color=color; 
    document.getElementById('js-primerNombre2').style.color=color;
  }else if(Nombre2 == Nombre2B){
    console.log("Hubo Coincidencias en los nombres");
    var color = prompt("Ingrese un color para resaltar los nombres que coinciden:");
    document.getElementById('js-segundoNombre').style.color=color; 
    document.getElementById('js-segundoNombre2').style.color=color;
  }else{
    console.log('No hubo coincidencias en los nombres')
  }
}

if(confirm("¿Desea comparar los apellidos?")){
  if(Apellido1 == Apellido1B){
    console.log("Hubo Coincidencias en los apellidos");
    var color = prompt("Ingrese un color para resaltar los apellidos que coinciden:");
    document.getElementById('js-primerApellido').style.color=color; 
    document.getElementById('js-primerApellido2').style.color=color;
  }else if(Apellido1 == Apellido2B){
    console.log("Hubo Coincidencias en los apellidos");
    var color = prompt("Ingrese un color para resaltar los apellidos que coinciden:");
    document.getElementById('js-primerApellido').style.color=color; 
    document.getElementById('js-segundoApellido2').style.color=color;
  }else if(Apellido2 == Apellido1B){
    console.log("Hubo Coincidencias en los apellidos");
    var color = prompt("Ingrese un color para resaltar los apellidos que coinciden:");
    document.getElementById('js-segundoApellido').style.color=color; 
    document.getElementById('js-primerApellido2').style.color=color;
  }else if(Apellido2 == Apellido2B){
    console.log("Hubo Coincidencias en los apellidos");
    var color = prompt("Ingrese un color para resaltar los apellidos que coinciden:");
    document.getElementById('js-segundoApellido').style.color=color; 
    document.getElementById('js-segundoApellido2').style.color=color;
  }else{
    console.log('No hubo coincidencias en los apellidos')
  }
}


