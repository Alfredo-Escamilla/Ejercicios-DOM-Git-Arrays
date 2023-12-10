// Ejercicio 1. Crea un array vacío.
let array =[];


// Ejercicio 2. Agrega tres elemtentos al array.
array.push("elemento1", "elemento2", "elemento3");
console.log(array);


// Ejercicio 3. Elimina el último elemento del array.
array.pop();
console.log(array);


// Ejercicio 4. Agrega un elemento al principio del array.
array.unshift("elemento nuevo");
console.log(array);


// Ejercicio 5. Elmina el primer elemento del array.
array.shift();
console.log(array);


// Ejercicio 6. Crea un nuevo array que sea una porción original del original usando "slice"
let nuevoArray = array.slice(0,1);
    console.log("Array: " + array);
    console.log("Nuevo Array: " + nuevoArray);


// Ejercicio 7. Modifica el array original para que solo contenga los elementos de la porción obtenida 
//              en el ejercicio anterior.
    array = nuevoArray.slice();
    console.log("Array: " + array);
    console.log("Nuevo Array: " + nuevoArray);


    // Ejercicio 8. Concatena dos arrays diferentes.
    let concatenacion = array.concat(nuevoArray);
    console.log("Array: " + array);
    console.log("Nuevo Array: " + nuevoArray);
    console.log("Concatenación: " + concatenacion);


// Ejercicio 9. Encuentra el índice de un elemento específico del array.
    let frutas = ["Manzana", "Plátano", "Naranja", "Uva", "Fresa", "Kiwi", "Piña", "Mango", "Sandía", "Melocotón"];
    // let dato = prompt("Escribe el nombre de una de las siguientes frutas para buscar su posición en la tabla " + frutas);
    // console.log(dato);
    // let indice = frutas.indexOf(dato);
    // console.log(indice);


// Ejercicio 10. Encuentra el índice de la última ocurrencia del mismo elemento encontrado en el ejercicio anterior.
    // let ultimoIndice = frutas.lastIndexOf(dato);
    // console.log(ultimoIndice);


// Ejercicio 11. Invierte el orden de los elementos del array.
// Ejercicio 12. Crea una copia superficial del array.
    console.log("array frutas: " + frutas);
    let copiaFrutas = frutas.slice();    
//  let reves = frutas.reverse();
    frutas = frutas.reverse();
    console.log("array frutas después del reverse() : " + frutas);
    // console.log("array reves: " + reves);
    console.log("array copiaFrutas: " + copiaFrutas);


// Ejercicio 13. Filtra los elementos que sean mayores a un valor específico.
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
let mayoresQue
let numero = prompt("Introduce un número entre 0 y 9. Se mostrarán los números mayores a ese dato");
    if (!isNaN(numero) && numero >= 0 && numero <= 9) {
        console.log(numero);
        mayoresQue = numeros.filter(function(valor){
        return valor > numero;
        })
        } else {
            console.log("Error. Introduce un número entre 0 y 9")
        }    

console.log("Array filtrado según la condición introducida: " + mayoresQue);


// Ejercicio 14. Encuentra el primer elemento que cumpla una condición específica.


// Ejercicio 15. Verifica si todos los elementos son mayores que un valor específico.


// Ejercicio 16. Multiplica cada elemento por un factor.


// Ejercicio 17. Suma todos los elementos del array.


// Ejercicio 18. Ordena el array de forma ascendete.


// Ejercicio 19. Elimina los elementos duplicados del array.


// Ejercicio 20. Combina dos arrays eliminando los duplicados.