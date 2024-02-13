
const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    crearPlaylist: nombre => console.log('Creando la playlist de ' + nombre),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),
}

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = function(id) {
    console.log('Borrando canción... ' + id);
}

reproductor.borrar(30);
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('Rock 2');