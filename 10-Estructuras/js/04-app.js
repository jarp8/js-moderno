const dinero = 300;
const totalPagar = 500;
const cheque = false;
const tarjeta = true;

if(dinero >= totalPagar) {
    console.log('Si podemos pagar');
} else if(cheque) {
    console.log('Si puedo pagar porque tengo cheque');
} else if(tarjeta) {
    console.log('Si puedo pagar porque tengo tarjeta');
} else {
    console.log('Fondos insuficientes');
}