// Como crear elementos html

const enlace = document.createElement('A');

// Agregando texto
enlace.textContent = 'Nuevo enlace';

// Agregando href
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';

console.log(enlace);

enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion;

function miFuncion() {
    alert('Diste click');
}

// Seleccionar navegación
const navegacion = document.querySelector('.navegacion');

// Agregar el elemento al html
// navegacion.appendChild(enlace); // Lo agrega al final
navegacion.insertBefore(enlace, navegacion.children[1]); // Agregarlo en cualquier parte del html

// Crear un CARD de forma dinámica
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

console.log(parrafo1);

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

console.log(parrafo2);

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

console.log(parrafo3);

// Crear div con la clase de info
const info = document.createElement('DIV');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

console.log(info);

// Crear la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto alternativo';

console.log(imagen);

// Crear el card
const card = document.createElement('DIV');
card.classList.add('card');

console.log(card);

// Asignar la imagen
card.appendChild(imagen)

// Asignar la info
card.appendChild(info)

console.log(card);

// Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
contenedor.insertBefore(card, contenedor.children[0]);




