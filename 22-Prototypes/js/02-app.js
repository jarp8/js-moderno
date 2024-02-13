// POO ANTERIOR
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const alberto = new Cliente('Alberto', 200);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;

    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;

    return `El cliente ${nombre} tiene un saldo de ${saldo} y categoria ${categoria}`;
}

console.log(formatearCliente(alberto));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const retro = new Empresa('Retrodev', 2000, 'Cursos en linea');
console.log(formatearEmpresa(retro));
