const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
};

const producto2 = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 800
};

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio: 800
};

carrito.unshift(producto3);

console.table(carrito);