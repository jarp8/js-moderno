// querySelector = Solo te retornara el primero que encuentre (1)
// Tiene una sintaxis similar a la css
const card = document.querySelector('.card');
console.log(card);

const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar el formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos html
const navegacion = document.querySelector('nav');