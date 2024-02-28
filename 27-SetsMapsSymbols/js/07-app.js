// Generador es una función que retorna un iterador

function *crearGenerador() {
    yield 1;
    yield 'Alberto';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

// Cada que escribes .next se irá al siguiente elemento del yield
// console.log(iterador);
// console.log(iterador.next().value); // Acceder al valor
// console.log(iterador.next().done);
// console.log(iterador.next().value);
// console.log(iterador.next().done);
// console.log(iterador.next().done);
// console.log(iterador);

// Generador para carrito de compras
function *generadorCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 2'];

const iteradorC = generadorCarrito(carrito);

console.log(iteradorC.next());
console.log(iteradorC.next());
console.log(iteradorC.next());

