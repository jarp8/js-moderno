// Los Sets no agregaron valores repetidos

const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
// carrito.add('Camisa'); // No agregará este elemento

console.log(carrito.delete('Camisa')); // Regresa true si elimino el valor y false si no encontró un valor

console.log(carrito.has('Camisa')); // Revisa si hay un valor en el Set

console.log(carrito.size); // Regresa el tamaño del Set

console.log(carrito);

// Los Sets son iterables
// pertenece = a que set pertenece el valor
carrito.forEach((producto, index, pertenece) => {
    console.log(pertenece);
});

carrito.clear() // Eliminar todos los elementos del Set

// Eliminar los duplicados
const numeros = [10,20,30,40,50,10,10,20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);