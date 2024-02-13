const producto = '                         Monitor de 20 pulgadas ';

console.log(producto);
console.log(producto.length);

// Eliminar espacios del inicio
console.log(producto.trimStart());
console.log(producto.trimEnd());

// Encadenar las funciones
console.log(producto.trimStart().trimEnd());

// Eliminar espacios en blanco en ambas direcciones
console.log(producto.trim());