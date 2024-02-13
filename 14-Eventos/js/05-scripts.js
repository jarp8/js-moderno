window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // Te dirá en que lugar se encuentra el elemento

    if(ubicacion.top < 784) {
        console.log('Elemento es visible');
    }
});