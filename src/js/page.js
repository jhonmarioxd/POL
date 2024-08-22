// Función para cargar el contenido de una página en el contenedor
function loadContent(url) {
    const contentDiv = document.getElementById('content');
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
        if (request.status === 200) {
            contentDiv.innerHTML = request.responseText;
        } else {
            console.error('Error al cargar la página:', request.statusText);
        }
    };
    request.send();
}

// Escuchamos los clics en los enlaces
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        loadContent(link.href);
    });
});