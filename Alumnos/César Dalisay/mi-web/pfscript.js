// Tiempo de carga de la página sin subirla a un dominio de 2 segundos.
window.onload = function() {
    setTimeout(function() {
        // Oculta el loader
        document.getElementById('loader').style.display = 'none';
        // Muestra el contenido principal
        document.getElementById('content').classList.remove('hidden');
    }, 2000);
};
