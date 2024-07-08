// Variable para el botón del menú
const menuToggle = document.querySelector('.menu-toggle');
// Variable para la navegación
const nav = document.querySelector('nav');

// Evento para mostrar/ocultar el menú al hacer clic en el botón
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
