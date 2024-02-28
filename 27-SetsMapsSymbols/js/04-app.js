// WeakMap
// Solamente acepta objetos como llave
// ! No se pueden iterar
const producto = {
    idProducto: 10
};

const weakMap = new WeakMap();

weakMap.set(producto, 'Monitor');

console.log(weakMap.has(producto)); // Comprobar si existe el objeto dentro del weakmap

console.log(weakMap.get(producto)); // Obtención del valor

weakMap.delete(producto);

console.log(weakMap);

