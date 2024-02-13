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

// Herencia
// Para heredar se utiliza super
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Override
    static bienvenida() {
        return 'Welcome! a empresas';
    }
}


const alberto = new Cliente('Aberto', 400);
const empresa = new Empresa('Retro', 5000, 89912312, 'Empresa');
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());