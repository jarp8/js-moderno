// forEach

const pendientes = ['Tarea', 'Comer', 'Trabajar', 'Estudiar JS'];

pendientes.forEach((pendiente, index) => {
    console.log(`${pendiente} en la posición ${index}`);
});

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Monitor de 32 pulgadas', precio: 100},
    {nombre: 'Monitor de 12 pulgadas', precio: 10},
]

carrito.forEach((producto) => {
    console.log(producto.nombre);
    console.log(producto.precio);
});

const nuevoCarrito = carrito.map((producto) => {
    return producto.precio;
});

console.log(nuevoCarrito);