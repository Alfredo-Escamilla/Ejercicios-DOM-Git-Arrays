// Ejercicio 1. Cambia el color de cuerpo del documento a otro color
// let body = document.querySelector("body");
// body.style.backgroundColor = "pink";

// Sugerencia de copilot:
// En cuanto a mejoras, tu código ya es bastante eficiente para lo que estás tratando de lograr. 
// Sin embargo, si planeas cambiar los estilos del cuerpo en varias partes de tu código, podrías 
// considerar almacenar el estilo del cuerpo en una variable en lugar del cuerpo mismo. De esta manera, 
// no tendrás que escribir .style cada vez que quieras cambiar un estilo. Aquí te dejo un ejemplo:
// Código generado por IA. Revisar y usar cuidadosamente.

// let bodyStyle = document.body.style;
// bodyStyle.backgroundColor = "pink";




// Ejercicio 2. Cambia el texto del título <h1> a "Practicando DOM y JavaScript"

// let h1 = document.querySelector("h1");
// h1.innerText = "Practicando DOM y JavaScript";

// Sugerencia de copilot:
// En cuanto a mejoras, tu código ya es bastante eficiente para lo que estás tratando de lograr. 
// Sin embargo, si planeas cambiar el texto de varios elementos en tu código, podrías considerar 
// crear una función para hacerlo. Aquí te dejo un ejemplo:

// function cambiarTexto(selector, nuevoTexto) {
//     let elemento = document.querySelector(selector);
//     elemento.innerText = nuevoTexto;
// }
// cambiarTexto("h1", "Practicando DOM y JavaScript");




// Ejercicio 3. Añade un evento al botoón para que cuando se haga clic en él, muestre una alerta que diga
// "!Has hecho clic en el botón"

// let boton = document.getElementById("miBoton");
// boton.addEventListener("click", function() {
//     alert("Has hecho clic en el boton, !BRAVO¡");
// })

// Sugerencia de copilot
// En cuanto a mejoras, tu código ya es bastante eficiente para lo que estás tratando de lograr. 
// Sin embargo, si planeas añadir manejadores de eventos a varios elementos en tu código, podrías considerar 
// crear una función para hacerlo. Aquí te dejo un ejemplo:

// function añadirManejadorDeClic(id, mensaje) {
//     let elemento = document.getElementById(id);
//     elemento.addEventListener("click", function() {
//         alert(mensaje);
//     });
// }

// añadirManejadorDeClic("miBoton", "Has hecho clic en el boton, !BRAVO¡");




// Ejercicio 4. Crea un nuevo párrafo y anádelo al final del cuerpo del documento

// let parrafo = document.createElement("p");
// parrafo.innerText = "Nuevo párrafo creado";
// document.body.appendChild(parrafo);

// Al añadir el párrafo al final del body, la línea <script src ="copilot.js"></script> 
// ya no es la última línea antes del body, y eso puede plantear un problema.
// Copilot dice: Tienes razón. Si añades un nuevo elemento al final del cuerpo del documento después de que el script se haya cargado, 
// el script no podrá acceder a ese nuevo elemento porque aún no existía cuando el script se ejecutó.
// Buscando una solución, pregunto a chat-gpt las diferencias entre cargar .js al final de body o desde dentro de <head>
// y me propone como solución cargar el archivo .js desde el head pero con el parámeto "defer":
// <script defer src="miScript.js"></script> de esta manera, el script no se ejecutará hasta que no este cargado completamente el html.



// Ejercicio 5. Elimina el primer párrafo del cuerpo del documento.

// let eliminar = document.querySelector("p");
// document.body.removeChild(eliminar);

// En cuanto a mejoras, tu código ya es bastante eficiente para lo que estás tratando de lograr. Sin embargo, si planeas eliminar 
// varios elementos en tu código, podrías considerar crear una función para hacerlo. Aquí te dejo un ejemplo:

// function eliminarElemento(selector) {
//     let elemento = document.querySelector(selector);
//     elemento.parentNode.removeChild(elemento);
// }

// eliminarElemento("p");




// Ejercicio 6. Cambia el color del texto de todos los párrafos a rojo.


// let cambioColor = document.querySelectorAll("p");
// console.log(cambioColor);
// for (let elemento of cambioColor){
//     elemento.style.color = "red";
// }

// En cuanto a mejoras, tu código ya es bastante eficiente para lo que estás tratando de lograr. Sin embargo, 
// si planeas cambiar el color de texto de varios tipos de elementos en tu código, podrías considerar crear 
// una función para hacerlo. Aquí te dejo un ejemplo:

// function cambiarColorTexto(selector, color) {
//     let elementos = document.querySelectorAll(selector);
//     for (let elemento of elementos){
//         elemento.style.color = color;
//     }
// }

// cambiarColorTexto("p", "red");





// Ejercicio 7. Crea una función que se ejecute cuando se haga clic en el botón, que cambie el color de fondo del cuerpo del
//              documento a un color aleatorio.

// let miBoton = document.getElementById("miBoton");
// miBoton.addEventListener("click", function () {
//     let color = document.querySelector("body");
//     let r = Math.floor(Math.random() * 255); // math.floor == 0<>1 * 255
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     color.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     // alternativa a la línea superior:
//     // color.style.backgroundColor = `rgb(" + r + ", " + g + "," + b + ")`;

// });




// Ejercicio 8. Crea una lista ordenada con 5 elementos y añádela al cuerpo del documento.

// let lista = document.createElement("ol");
// let i = 0;
// document.body.appendChild(lista);
// while (i < 5){
//     let elementos = document.createElement("li");
//     lista.appendChild(elementos);
//     elementos.innerText = "Elemento " + (i + 1);
//      i++;
// }



// Ejercicio 9.Cra una tabla con 2 filas y 3 columnas y anádela al cuerpo del documento
// let tabla = document.createElement("table");

// for (let i = 0; i < 2; i++) {
//     let fila = document.createElement("tr");

//     for (let j = 0; j < 2; j++) {
//         let celda = document.createElement(i === 0 && j === 0 ? "th" : "td"); // Usar "th" para la celda de encabezado
//         celda.textContent = "Fila " + (i + 1) + ", Columna " + (j + 1);
//         fila.appendChild(celda);
//     }

//     tabla.appendChild(fila);
// }

// document.body.appendChild(tabla);


// Este ejercicio no sabía como hacerlo, desconocía mucho, sobre todo la línea 161. Aquí una explicación:
// i === 0 && j === 0: Esta parte verifica si estamos en la primera fila (i === 0) y la primera columna (j === 0). 
// Si ambas condiciones son verdaderas, significa que estamos en la esquina superior izquierda de la tabla, 
// que es típicamente utilizada para el encabezado de la tabla.
//? "th" : "td": Esto es el operador ternario. Si la condición anterior es verdadera, crea un elemento <th> (celda de encabezado); 
//de lo contrario, crea un elemento <td> (celda normal).



// Ejercicio 10. Crea un formulario con un campo de entrada y un botón, que al hacer clic en el botón, muestre en una alerta
// el texto introducido en el campo entrada.

// let formulario = document.createElement("form");
// let cajaTexto = document.createElement("input");
// let boton = document.createElement("button");
// document.body.appendChild(formulario);
// formulario.appendChild(cajaTexto);
// formulario.appendChild(boton);
// boton.style.width = "100px";
// boton.style.height = "30px";
// boton.innerText = "Haz clic aquí";
// console.log(cajaTexto);
// boton.addEventListener("click", function(){
//     let texto = cajaTexto.value;
//     cajaTexto.value = texto;
//     alert(texto);

// })

