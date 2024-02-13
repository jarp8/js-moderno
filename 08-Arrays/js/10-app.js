const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Monitor de 32 pulgadas', precio: 100},
    {nombre: 'Monitor de 12 pulgadas', precio: 10},
]

// Map crea un nuevo arreglo
const nuevoArreglo = carrito.map(function(producto) {
    return `${producto.nombre}, ${producto.precio}`;
});

console.log(nuevoArreglo);

// ForEach solo recorre el arreglo
carrito.forEach(function(producto) {
    console.log(`${producto.nombre}, ${producto.precio}`);
});