const primerEnlace = document.querySelector('a');
console.log(primerEnlace);

// Forma de eliminar un elemento del document
// primerEnlace.remove();

// Eliminar desde el padre...
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);