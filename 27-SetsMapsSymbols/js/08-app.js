const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

const ordendes = new Set([123, 231, 131, 102]);

const datos = new Map();
datos.set('nombre', 'Alberto');
datos.set('profesion', 'Desarrollador Web');

// Default
for(let ciudad of ciudades) {
    console.log(ciudad);
}

for(let orden of ordendes) {
    console.log(orden);
}

for(let dato of datos) {
    console.log(dato);
}

// !Entries iterator
// retorna tanto llave y valor
for(let entry of ciudades.entries()) {
    console.log(entry);
}

for(let entry of ordendes.entries()) {
    console.log(entry);
}

for(let entry of datos.entries()) {
    console.log(entry);
}

// !Values iterator
for(let value of ciudades.values()) {
    console.log(value);
}

for(let value of ordendes.values()) {
    console.log(value);
}

for(let value of datos.values()) {
    console.log(value);
}

// !Keys iterator
for(let keys of ciudades.keys()) {
    console.log(keys);
}

for(let keys of ordendes.keys()) {
    console.log(keys);
}

for(let keys of datos.keys()) {
    console.log(keys);
}
