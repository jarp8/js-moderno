// Eliminar elementos de localStorage

localStorage.removeItem('nombre');

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo Mes');
console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));

// Borrar localStorage
localStorage.clear();

// Borrar sessionStorage
sessionStorage.clear();