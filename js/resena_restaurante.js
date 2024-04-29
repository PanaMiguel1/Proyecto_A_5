function toggleStar(element, starNumber) {
    const container = element.parentElement.parentElement; // Encuentra el contenedor .resena
    const stars = container.querySelectorAll('.star');

    // Cambia el estado de la estrella seleccionada
    stars.forEach(function(star, index) {
        if (index < starNumber) {
            star.classList.add('selected'); // Estrella seleccionada
        } else {
            star.classList.remove('selected'); // Estrella no seleccionada
        }
    });


}
