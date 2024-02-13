const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    // Evitar que el navegador haga lo que tenga que hacer
    e.preventDefault();

    console.log('Buscando...');

    console.log(e.target.method);
}