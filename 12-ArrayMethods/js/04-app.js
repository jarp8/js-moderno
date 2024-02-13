const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado;

// filter
// Crea un nuevo arreglo con la condición que estas revisando en el momento
resultado = carrito.filter((producto) => producto.precio == 100);
console.log(resultado);

resultado = carrito.filter((producto) => producto.precio < 600);
console.log(resultado);

// Filter también puedes quitar un elemento el el carrito de compras
resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');
console.log(resultado);

