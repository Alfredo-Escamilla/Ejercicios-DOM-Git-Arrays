// Ejercicio 1. Selecciona el elemento con el ID "miTitulo" y cambia su texto a "¡Hola, Mundo!".

// let miTitulo = document.getElementById("miTitulo");
// console.log(miTitulo);
// miTitulo.innerHTML = "¡Hola, Mundo!"



// Ejercicio 2. Toma el primer elemento de la clase "miClase" y cambia su color de fondo a verde y el texto a blanco.

// let miClase = document.querySelector(".miClase");
// console.log(miClase);
// miClase.style.backgroundColor = "green";
// miClase.style.color = "white";



// Ejercicio 3.  Crea un nuevo elemento del tipo <p>, agregar el texto "Nuevo párrafo" dentro de él y luego añádelo al final del cuerpo(<body).

//Creas una variable para crear el elemento párrafo
// let parrafo = document.createElement("p");
// insertas dentro del párrafo el texto nuevo párrafo
// parrafo.innerText = "Nuevo párrafo";
// insertas dentro del body del documento lo que se acaba de crear.
// document.body.appendChild(parrafo);




// Ejercicio 4 Asocia un evento de clic al botón con ID "miBoton" que alerte "¡Has hecho clic!" cuando se presione.

// let miBoton = document.getElementById("miBoton");
// console.log(miBoton);

// miBoton.addEventListener("click", function() {
// console.log("¡Has hecho click en el boton!");
// })


// Ejercicio 5 Itera sobre todos los elementos con la clase "miClase" y muestra sus textos en la consola.

// let i = 0;
// let miClase = document.querySelectorAll(".miClase");
// while (i < miClase.length) {
// 	console.log(miClase[i].innerHTML);
// 	i++;
// }

// Mejora de código según chat-gpt.

// let miClase = document.querySelectorAll(".miClase");
// console.log(miClase);

// for (let elemento of miClase) {
//     console.log(elemento.innerHTML);
// }



// Ejercicio 6. Cambia el atributo src de la imagen con el ID "miImagen" a "nueva-imagen-jpg"cunado se cargue la página.

// let miImagen = document.getElementById("miImagen");
// console.log(miImagen);
// miImagen.src = "http://127.0.0.1:5500/img/nueva-imagen.jpg"

// Mejora de código propuesta por chat-gpt
// let miImagen = document.getElementById("miImagen");

// if (miImagen) {
//     console.log(miImagen);
//     miImagen.src = "http://127.0.0.1:5500/img/nueva-imagen.jpg";
// } else {
//     console.log("La imagen con ID 'miImagen' no fue encontrada.");
// }

// Ejercicio 7. Crea una función en el archivo app.js que sea llamada al enviar el formulario y que valide que el campo de texto no esté 
//				vacío. Muestra un mensaje de alerta si está vacío.

// let miFormulario = document.getElementById("miFormulario");
// console.log(miCampoTexto.value);
// let submit = document.getElementById("submit");
// console.log(submit);
// submit.addEventListener("click", function() {
// 	if(miCampoTexto.value != null){
// 		alert("El campo no puede estar vacío");
// 	}
// 	else{
// 		alert("El campo tiene texto");
// 	}
// })


//Codigo propuesto por chat-gpt
// let miFormulario = document.getElementById("miFormulario");
// let miCampoTexto = document.getElementById("miCampoTexto");
// let submit = document.getElementById("submit");

// console.log(miCampoTexto.value);

// submit.addEventListener("click", function() {
//     // Usamos trim() para eliminar espacios en blanco al principio y al final del texto
//     let textoIngresado = miCampoTexto.value.trim();

//     if (textoIngresado === "") {
//         alert("El campo no puede estar vacío");
//     } else {
//         alert("El campo tiene texto: " + textoIngresado);
//     }
// });


// Ejercicio 8. Agrega un nuevo elemento a la lista con el ID "miLista" con el texto "Nuevo elemento" 
// y elmina el tercer elemento de la lista.

// let miClase = document.querySelectorAll(".miClase");
// let nuevoElemento = document.createElement("li");
// let miLista = document.getElementById("miLista");
// nuevoElemento.classList.add("miClase");
// nuevoElemento.innerHTML = "Nuevo elemento";
// miLista.appendChild(nuevoElemento);
// miLista.removeChild(miLista.children[2]);




// Ejercicio 9. Aplica una animación simple a la imagen con el ID "miImagen" cuando se cargue la página.
// document.addEventListener("DOMContentLoaded", function() {

//     let miImagen = document.querySelector("#miImagen");

//     alert("Vamos a modificar la imagen.");
//     // Aplica una transición de ancho para una animación suave - ChatGpt
//     miImagen.style.transition = "width 4s ease";
//     miImagen.style.width = "40%";

// });



// Ejercicio 10. Guarda un valor en el localStorage desde el archivo js y recupéralo, luego muéstralo por consola.
// localStorage.setItem("miDato", "Hola, Mundo!");
// let miDato = localStorage.getItem("miDato");
// console.log(miDato);

// Sugerencia de Chat-Gpt
// Guarda un valor en el localStorage
// const clave = "miDato";
// const valor = "Hola, Mundo!";
// localStorage.setItem(clave, valor);

// Recupera el valor del localStorage
// const miDatoRecuperado = localStorage.getItem(clave);

// Muestra el valor en la consola
// console.log(miDatoRecuperado);


// let a = "123";
// let b = 123;

// if(a) {
//     console.log("A y B son iguales");
// }
// else {
//     console.log("A y B no son iguales");
// }