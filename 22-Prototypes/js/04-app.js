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

function Persona(nombre, saldo, telefono) {
    // Heredar
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}
// Asignar prototypes entre objetos
Persona.prototype = Object.create(Cliente.prototype);

// Asignar constructor de otro objeto
Persona.prototype.constructor = Cliente;

// Instanciarlo
const jesus = new Persona('Jesus', 1000, 89213123);
console.log(jesus.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
    return `Teléfono: ${this.telefono}`;
}