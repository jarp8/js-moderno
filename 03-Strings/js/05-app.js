const producto = 'Monitor de 20 pulgadas';

// Funciones para reemplazar el texto
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// slice es para cortar una cadena de texto
console.log(producto.slice(0, 10));
console.log(producto.slice(8)); 
// console.log(producto.slice(2, 1));

// Alernativa de slice "substring"
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

// Obtener la inicial de una persona
// se puede usar substring o charAt
const usuario = "Alberto";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));
