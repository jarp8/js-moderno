// TRAVERSING the DOM
// Ir navegando por los elementos

const navegacion = document.querySelector('.navegacion');

// Obtener el primer enlace
console.log(navegacion.firstElementChild);

// Obtener el último enlace
console.log(navegacion.lastElementChild);

console.log(navegacion);
console.log(navegacion.childNodes); // Los (espacios en blanco / Saltos de linea) son considerados elementos
console.log(navegacion.children); // Acceder a los hijos

console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType);

const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo Heading desde traversing the dom'

card.children[0].src = 'img/hacer2.jpg';

console.log(card.children[0]);

// Traversing the dom hacia el padre parentElement
console.log(card.parentNode);
console.log(card.parentElement.parentElement);

// Escoger el siguiente hermano nextElementSibling
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

// Escoge un elemento antes previousElementSibling
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);