// Object literal
const cliente = {
    nombre: 'Alberto',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

// POO ANTERIOR
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const alberto = new Cliente('Alberto', 200);

console.log(alberto);