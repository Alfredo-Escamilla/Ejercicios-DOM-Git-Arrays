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

//     let nuevoColor = "rgb(" + rojo +  "," + verde + "," + azul +")";
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

let miBoton = document.getElementById("miBoton");
let i = 0;
miBoton.addEventListener("click", function(){
    i++;
    miBoton.innerText = `Has hecho ${i} veces click. Vas a desgastar el ratón`;
    
})



