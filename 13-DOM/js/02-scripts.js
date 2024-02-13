// getElementsByClassName = es menos común pero se sigue utilizando

// Seleccionar elemenos por su clase
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existe más de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

