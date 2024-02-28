// Symbols fueron nuevos en ECMA6
// !Ningún symbol es igual
const sym = Symbol();
const sym2 = Symbol();

// if(sym === sym2) {
//     console.log('Son iguales');
// } else {}


const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Alberto';
persona[apellido] = 'Ramírez';
persona.tipoCliente = 'Premium',
persona.saldo = 400;

console.log(persona);
// console.log(persona[nombre]); // Forma de acceder a un symbol

// Las propieadades que utilizan un symbol no son iterables
for(let i in persona) {
    console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';
console.log(cliente);