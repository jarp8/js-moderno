'use strict';

// Object literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

// seal: Sellar No se pueden agregar o eliminar propiedades pero si modificar
Object.seal(producto);

producto.nombre = 'Monitor de 24 pulgadas';
// producto.imagen = 'imagen.jpg';
console.log(producto);

// Saber si el objeto esta sellado
console.log(Object.isSealed(producto));