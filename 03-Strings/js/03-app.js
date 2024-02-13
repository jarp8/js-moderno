const producto = 'Monitor de 20 pulgadas ';
const precio = '30 USD ';

// Función para concatenar strings
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

// Usar el operador + para concatenar string
console.log(producto + 'Con un precio de:' + precio);
console.log('El producto ' + producto + 'Tiene un precio de ' + precio);

// Concatenar con template strings
console.log(`El producto ${producto} tiene un precio de ${precio}`);