const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// Existe 3 formas de obtener el texto
console.log(encabezado.innerText); // Si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // Si lo va a encontrar
console.log(encabezado.innerHTML); // Se trae el html

// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);