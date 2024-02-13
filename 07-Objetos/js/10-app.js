// Object literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

// Unir dos objetos
const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas};

console.log(resultado);
console.log(resultado2);