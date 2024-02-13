const usuario = true;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('Si eres usuario');
    console.log('Puede pagar');
} else if(!puedePagar && !usuario) {
    console.log('Fondos insuficientes');
} else if(!usuario) {
    console.log('Inicia sesión o saca una cuenta');
}  else if(!puedePagar) {
    console.log('No puedes comprar');
}