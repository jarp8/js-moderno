const pendientes = ['Tarea', 'Comer', 'Trabajar', 'Estudiar JS'];

const automovil = {
    modelo: 'Camaro',
    year: 1966,
    motor: '6.0'
}

// For in itera sobre un objeto
// for(let propiedad in automovil) {
//     console.log(propiedad);
//     console.log(`${automovil[propiedad]}`);
// }

for(let [llave, valor] of Object.entries(automovil)) {
    console.log(llave);
    console.log(valor);
}