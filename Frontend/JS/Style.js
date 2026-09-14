
const paginaActual = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-bar a").forEach(enlace => {
    const paginaEnlace = enlace.getAttribute("href").split("/").pop();

    if (paginaEnlace === paginaActual) {
        enlace.classList.add("pagina-actual");
    }
});
