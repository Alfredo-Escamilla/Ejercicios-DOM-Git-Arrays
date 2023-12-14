// Ejercicio 1. Añade un evento al botón para que cuando se haga clic en él, muestre una alerta que diga "Has hecho clic"

// let miBoton = document.getElementById("miBoton");
// miBoton.addEventListener("click", function(){
//     alert("Has hecho click en el botón");
// })

// Sugerencia de Chat-gpt:
//document.addEventListener("DOMContentLoaded", function() {
//     let miBoton = document.getElementById("miBoton");

//     if (miBoton) {
//         miBoton.addEventListener("click", function(){
//             alert("Has hecho clic");
//         });
//     } else {
//         console.error("El botón no se encontró en el documento");
//     }
// });




// Ejercicio 2. Cambia el color de fondo del cuerpo del documento a otro color cuando se haga clic en el botón.
// function generarColor(){
//     let rojo = Math.floor(Math.random() * 256);
//     let verde = Math.floor(Math.random() * 256);
//     let azul = Math.floor(Math.random() * 256);
//     let nuevoColor = `rgb(${rojo},${verde},${azul})`;
//     return nuevoColor; 
// }
// let miBoton = document.getElementById("miBoton");
// miBoton.addEventListener("click", function(){
//     let color = generarColor();
//     let fondo = document.querySelector("body");
// //  Sugerencia IA: let fondo = document.body;
//     fondo.style.backgroundColor = color;
// })



// Ejercicio 3. Cambia el texto del botón a "Haz clic en mí de nuevo" cuando se haga click en él.

// let miBoton = document.getElementById("miBoton");
// miBoton.addEventListener("click", function () {
//     if (miBoton.innerText === "Haz click en mí") {
//         miBoton.innerText = "Cambio de texto";
//     } else {
//         miBoton.innerText = "Haz click en mí";
//     }
// })


// Sugerencia IA: Uso del operador Ternario:
// let miBoton = document.getElementById("miBoton");

// miBoton.addEventListener("click", function () {
//     miBoton.innerText = (miBoton.innerText === "Haz click en mí") ? "Haz clic en mí de nuevo" : "Haz click en mí";
// });





// Ejercicio 4. Añade un contador que aumente cada vez que se haga clic en el botón y muestra el valor del contador en el botón.

// let miBoton = document.getElementById("miBoton");
// let i = 0;
// miBoton.addEventListener("click", function(){
//     // i++;
//     miBoton.innerText = `Has hecho ${++i} veces click. Vas a desgastar el ratón`;

// })





// Ejercicio 5 Desactiva el botón depués de quese haya hecho click en él diez veces.
// Ejercicio 6. Añade otro botón que, cuando se haga clic en él, reactive el primer botón.



// Seleccionar el botón ya creado.
// let miBoton = document.querySelector("#miBoton");


// Creación del segundo botón.
// let nuevoBoton = document.createElement("button");
// document.body.appendChild(nuevoBoton);
// nuevoBoton.style.width = "150px";
// nuevoBoton.style.height = "50px";
// nuevoBoton.style.color = "white";
// nuevoBoton.style.backgroundColor = "black";
// nuevoBoton.innerText = " Activar el botón ";

// Iniciar contardor de clicks
// let i = 0;

// Eventos para el primer botón
// miBoton.addEventListener("click", function () {
//     i++
//     if (i === 10) {
//         miBoton.disabled = true;
//         miBoton.style.color = "gray";
//         miBoton.style.backgroundColor = "white";
//         miBoton.innerText = "Desactivado";
//     }
// })


// Eventos para el segundo botón
// nuevoBoton.addEventListener("click", function () {
// console.log(miBoton.disabled);
//     if (miBoton.disabled === true) { // if (miBoton.disabled){
//         i = 0;
//         miBoton.disabled = false;
//         miBoton.style.color = "white";
//         miBoton.style.backgroundColor = "navy";
//         miBoton.innerText = "Haz click en mí";
//     }
// })


// Ejercicio 7. Añade un evento al botón para que cuando el mouse pase sobre él, cambie de color.
// Ejercicio 8. Añade un evento al botón para que cuando salga de él, restaure el color.
// Ejercicio 9. Añade un evento al botón para que cuando se haga doble click sobre él, se duplique.
// Ejercicio 10. Añade un evento al botón para que cuando se haga click derecho, se elimine.

let miBoton = document.querySelector("#miBoton");
let colorOriginal;
let clonado;
let i = 0;
let idBoton;
let botonBorrar;
let identificativo;
let idAnterior;
let botonAnterior;

miBoton.addEventListener("mouseenter", function () {
    colorOriginal = miBoton.style.backgroundColor
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    miBoton.style.backgroundColor = `rgb(${r},${g},${b})`;

})

miBoton.addEventListener("mouseleave", function () {
    miBoton.style.backgroundColor = `${colorOriginal}`;
})


miBoton.addEventListener("dblclick", function () {
    clonado = miBoton.cloneNode(true);
    // Anade al final del body
    //clonado = document.body.appendChild(clonado);  
    // Añade después del botón original   
    miBoton.nextSibling = miBoton.parentNode.insertBefore(clonado, miBoton.nextSibling) 
    miBoton.nextSibling.id =`miBoton${++i}`;
    identificativo = `miBoton${i}`
    botonBorrar = document.getElementById(identificativo);
})

miBoton.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    let buttonToRemove = e.target.parentNode.childNodes[2];
    e.target.parentNode.removeChild(buttonToRemove);
    
    // clonado.focus();
    
    // idAnterior = `miBoton${identificativo - 1}`;
    // botonAnterior = document.getElementById(idAnterior);
   
    // if (document.activeElement !== miBoton) {
    //     document.activeElement.parentNode.removeChild(botonBorrar);
    //     i--;
    // }

    // if (botonAnterior) {
    //     botonAnterior.focus()
    // }
    
});



