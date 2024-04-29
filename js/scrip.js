function toggleRoutes() {
  const additionalRoutes = document.querySelectorAll('.route-box-3, .route-box-4, .route-box-5');
  const moreButton = document.querySelector('.more-button');

  const areAdditionalRoutesDisplayed = additionalRoutes[0].style.display === 'flex';

  // Cambia el estado de las cajas adicionales y el texto del botón
  if (areAdditionalRoutesDisplayed) {
    // Oculta las cajas adicionales
    additionalRoutes.forEach(function(box) {
      box.style.display = 'none';
    });
    // Cambia el texto del botón a "Ver más"
    moreButton.textContent = 'Ver más';
    // Restablece la altura del sidebar
    document.querySelector('.sidebar').style.height = '788px';
  } else {
    // Muestra las cajas adicionales
    additionalRoutes.forEach(function(box) {
      box.style.display = 'flex';
    });
    // Cambia el texto del botón a "Ocultar"
    moreButton.textContent = 'Ocultar';
    // Expande la altura del sidebar para ajustarse al nuevo contenido
    document.querySelector('.sidebar').style.height = 'auto';
  }
}