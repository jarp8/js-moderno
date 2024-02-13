// for(let i = 0; i < 10; i++) {
//     if(i === 5) {
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`Numero: ${i}`);
// }

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Monitor de 32 pulgadas', precio: 100, descuento: true},
    {nombre: 'Monitor de 12 pulgadas', precio: 10},
]

for (let i = 0; i < carrito.length; i++) {
    const element = carrito[i];
    
    if(element.descuento) {
        console.log(`El articulo ${element.nombre} tiene descuento`);
    }
}
