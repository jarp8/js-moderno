// WeakSet
// !No son iterables

// Le puedes pasar únicamente objetos
const weakSet = new WeakSet();

const cliente = {
    nombre: 'Alberto',
    saldo: 100,
};

weakSet.add(cliente); // Se agrega objeto al WeakSet

console.log(weakSet.has(cliente)); // Verifica si contiene el objeto

weakSet.delete(cliente); // Eliminar objeto

// console.log(weakSet.size); // No tiene .size


console.log(weakSet);