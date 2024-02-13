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

const producto3 = {
    nombre: 'Teclado',
    precio: 800
};

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);
console.table(carrito);