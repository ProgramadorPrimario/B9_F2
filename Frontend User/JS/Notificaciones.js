const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('mySidebar');

// Abrir el panel
openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// Cerrar el panel
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Opcional: Cerrar si se hace clic fuera del panel (en el body)
window.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== openBtn) {
        sidebar.classList.remove('active');
    }
});