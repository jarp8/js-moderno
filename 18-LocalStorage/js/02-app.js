// Obtener datos de localStorage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const producto = localStorage.getItem('producto');
const productoJSON = JSON.parse(producto);

console.log(productoJSON);

const meses = localStorage.getItem('meses');
const mesesJSON = JSON.parse(meses);

console.log(mesesJSON);