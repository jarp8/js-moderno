const nav = document.querySelector('.navegacion');

// Registrar un evento
// click, mouseenter, mouseout, mousedown, mouseup, dblclick
nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegación');

    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseout', () => {
    console.log('Saliendo a la navegación');

    nav.style.backgroundColor = 'white';
});