// Solamente se pueden guardar strings
localStorage.setItem('nombre', 'Alberto');

const producto = {
    nombre: 'Monitor en 24 Pulgadas',
    precio: 300
};

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];

const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);

// sessionStorage.setItem('role', 'admin');