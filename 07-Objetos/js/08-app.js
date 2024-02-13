'use strict';

// Object literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

// freeze: Congelas al objeto para no ser modificable, agregar o eliminar
Object.freeze(producto);

// producto.imagen = 'imagen.jpg';

console.log(producto);

// Saber si el objeto esta congelado
console.log(Object.isFrozen(producto));

