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

// Eliminar ultimo elemento de un arreglo
// resultado.pop();
// console.table(resultado);

// Eliminar del inicio del arreglo
// resultado.shift();
// console.table(resultado);

// Eliminar elementos con la posición y cuantos después de ese en
// el segundo parametro
resultado.splice(1, 1);

console.table(resultado);
