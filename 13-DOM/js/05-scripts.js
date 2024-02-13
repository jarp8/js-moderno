// No puedes usar # cuando son dos o más, solo se puede con 1
// No es buena pratica lo de arriba

const cards = document.querySelectorAll('.card');
console.log(cards);

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// Si un elemento no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);