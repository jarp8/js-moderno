// Class declaration
class Cliente {
    #nombre; // Propiedades privadas

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, saldo: ${this.saldo}`;
    }

    static bienvenida() {
        return 'Welcome!';
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const alberto = new Cliente('Aberto', 400);
console.log(alberto.getNombre());