
// Seleccionar los elementos del modal
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

const nombre = document.getElementById("modal-nombre");
const cargo = document.getElementById("modal-cargo");
const descripcion = document.getElementById("modal-descripcion");

// Seleccionar todos los botones
const botones = document.querySelectorAll(".ver-mas");

// Abrir el modal con la información correspondiente
botones.forEach(boton => {

    boton.addEventListener("click", () => {

        nombre.textContent = boton.dataset.nombre;
        cargo.textContent = boton.dataset.cargo;
        descripcion.textContent = boton.dataset.descripcion;

        modal.classList.add("mostrar");

    });

});

// Cerrar el modal con la X
cerrar.addEventListener("click", () => {
    modal.classList.remove("mostrar");
});

// Cerrar al hacer clic fuera de la ventana
modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        modal.classList.remove("mostrar");
    }

});

// Cerrar con la tecla Escape
document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {
        modal.classList.remove("mostrar");
    }

});
