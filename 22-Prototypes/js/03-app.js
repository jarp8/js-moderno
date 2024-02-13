// POO ANTERIOR
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Function =  hace referencia al objecto actual
// () => {} = hace referencia a la ventana global
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platino';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre ${this.nombre}, saldo: ${this.saldo}, Tipo cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function(retirar) {
    return this.saldo -= retirar;
}

// Instanciarlo
const alberto = new Cliente('Alberto', 200);
console.log(alberto.tipoCliente());
console.log(alberto.nombreClienteSaldo());

console.log(alberto);