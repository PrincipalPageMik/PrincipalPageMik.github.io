document.addEventListener('DOMContentLoaded', function () {
    const album = document.getElementById('album');
    const obtenerFiguritaBtn = document.getElementById('obtenerFigurita');
    const popup = document.getElementById('popup');
    const cerrarPopupBtn = document.querySelector('.cerrarPopup');
    const figuritaActual = document.getElementById('figuritaActual');
    const pegarFiguritaBtn = document.getElementById('pegarFigurita');

    // Lista de URLs de las figuritas
    const figuritas = [
        'album2.jpg',
        // Agrega más URLs según sea necesario
    ];

    let figuritaIndex = 0;

    // Función para cargar una figurita aleatoria
    function cargarFigurita() {
        const figuritaUrl = figuritas[figuritaIndex];
        const imagen = document.createElement('img');
        imagen.src = figuritaUrl;
        figuritaActual.innerHTML = '';
        figuritaActual.appendChild(imagen);
        popup.style.display = 'block';
    }

    // Evento para abrir el popup y cargar una figurita
    obtenerFiguritaBtn.addEventListener('click', function () {
        cargarFigurita();
    });

    // Evento para cerrar el popup
    cerrarPopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

// Evento para abrir el sobre de figuritas
obtenerFiguritaBtn.addEventListener('click', function () {
    if (puedeAbrirSobre()) {
        cargarFigurita();
    } else {
        alert('Solo puedes obtener de figurita por día.');
    }
});

// Función para verificar si se puede abrir un nuevo sobre de figuritas
function puedeAbrirSobre() {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [nombre, valor] = cookie.split('=');
        if (nombre === 'ultimaApertura') {
            const ultimaApertura = new Date(valor);
            const hoy = new Date();
            return hoy > ultimaApertura;
        }
    }
    return true; // Si no hay cookie de la última apertura, se puede abrir un sobre
}

// Evento para pegar la figurita en el álbum
pegarFiguritaBtn.addEventListener('click', function () {
    const hoy = new Date();
    const cookies = document.cookie.split('; ');
    let puedeAbrirSobre = true;

    for (let cookie of cookies) {
        const [nombre, valor] = cookie.split('=');
        if (nombre === 'ultimaApertura') {
            const ultimaApertura = new Date(valor);
            const diferencia = hoy.getTime() - ultimaApertura.getTime();
            const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
            if (diferencia < unDia) {
                puedeAbrirSobre = false;
                break;
            }
        }
    }

    if (!puedeAbrirSobre) {
        alert('Solo puedes obtener una figurita por día.');
        return; // No se permite pegar figurita si no se puede abrir un sobre
    }

    const figuritaUrl = figuritas[figuritaIndex];
    const figuritaContenedor = document.createElement('div');
    const imagen = document.createElement('img');
    imagen.src = figuritaUrl;
    imagen.classList.add('figurita');
    const mensaje = document.createElement('div');
    mensaje.textContent = 'Esto es una prueba jhds'; // Puedes cambiar esto por una descripción real
    mensaje.classList.add('descripcion');
    figuritaContenedor.appendChild(imagen);
    figuritaContenedor.appendChild(mensaje);
    album.appendChild(figuritaContenedor);
    popup.style.display = 'none';
    figuritaIndex = (figuritaIndex + 1) % figuritas.length; // Incrementa el índice para la próxima figurita

    // Guardar la fecha de apertura del sobre en una cookie
    const fechaHoy = new Date();
    const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
    fechaHoy.setTime(fechaHoy.getTime() + unDia);
    document.cookie = `ultimaApertura=${fechaHoy.toUTCString()}; expires=${fechaHoy.toUTCString()}; path=/`;
});



    
});



