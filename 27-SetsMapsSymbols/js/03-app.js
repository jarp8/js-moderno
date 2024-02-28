// Maps son listas con llave y valor
// Los maps tienen mejor performance que un objeto
// ! Los maps son iterables

const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);
cliente.set([0], true);

console.log(cliente.size); // Extensión del map

console.log(cliente.has('nombre')); // Si contiene la llave del nombre

console.log(cliente.get('nombre')); // Obtener el valor de lo que se encuentre en la llave nombre

cliente.delete('saldo') // Eliminar un elemento del map

console.log(cliente);

cliente.clear(); // Eliminar todos los elementos

console.log(cliente);

// Asignar valores desde la inicialización del map
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('dr', 'Dr asignado');
paciente.set('nombre', 'Antonio'); // Reescribir un valor

// Los mapas son iterables
paciente.forEach((dato, index) => {
    console.log(dato);
    console.log(index);
});

console.log(paciente);
