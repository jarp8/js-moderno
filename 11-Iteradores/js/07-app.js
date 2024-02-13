const pendientes = ['Tarea', 'Comer', 'Trabajar', 'Estudiar JS'];

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Monitor de 32 pulgadas', precio: 100},
    {nombre: 'Monitor de 12 pulgadas', precio: 10},
];

// for of
for(let pendiente of pendientes) {
    console.log(pendiente);
}

for(let producto of carrito) {
    console.log(producto.nombre);
}