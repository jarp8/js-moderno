const busqueda = document.querySelector('.busqueda');

// keydown, keyup, blur, copy, paste, cut, input

busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('Fallo la validación');
    }
});