// Object literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const { nombre } = producto;

console.log(nombre);

// Destructuring con arreglos
const numeros = [10,20,30,40,50];

const [,, tercero] = numeros;

console.log(tercero);