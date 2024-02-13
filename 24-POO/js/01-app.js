// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, saldo: ${this.saldo}`;
    }

    static bienvenida() {
        return 'Welcome!';
    }
}
const alberto = new Cliente('Aberto', 400);
console.log(alberto);  
console.log(alberto.mostrarInformacion());

// Pertenece a la clase
console.log(Cliente.bienvenida());

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    
    mostrarInformacion2() {
        return `Cliente: ${this.nombre}, saldo: ${this.saldo}`;
    }
}
const alberto2 = new Cliente2('Aberto2', 402);
console.log(alberto2);
console.log(alberto2.mostrarInformacion2());