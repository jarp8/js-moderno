// Switch case

const metodoPago = 'efectivo';


const pagar = () => {
    console.log('Entrando a la función de pagar');
} 

switch(metodoPago) {
    case 'efectivo':
        pagar();
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
        break;
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    default:
        console.log('Aún no has seleccionado un método de pago');
        break;
}
