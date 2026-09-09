document.addEventListener('DOMContentLoaded', () => {
    const inputBusqueda = document.getElementById('inputBusqueda');
    const formBuscador = document.getElementById('formBuscador');
    const tarjetasLibros = document.querySelectorAll('.book-card');

    function filtrarLibros() {
        const textoBusqueda = inputBusqueda.value.toLowerCase().trim();

        tarjetasLibros.forEach(tarjeta => {
            const titulo = tarjeta.querySelector('h4').textContent.toLowerCase();
            const autor = tarjeta.querySelector('.author').textContent.toLowerCase();

            if (titulo.includes(textoBusqueda) || autor.includes(textoBusqueda)) {
                tarjeta.style.display = 'block';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    }

    formBuscador.addEventListener('submit', (e) => {
        e.preventDefault(); 
        filtrarLibros();
    });

    inputBusqueda.addEventListener('input', filtrarLibros);
});