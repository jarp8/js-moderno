const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Monitor de 32 pulgadas', precio: 100},
    {nombre: 'Monitor de 12 pulgadas', precio: 10},
]

for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre}, ${carrito[i].precio}`);
}

carrito.forEach(function(producto) {
    console.log(`${producto.nombre}, ${producto.precio}`);
});