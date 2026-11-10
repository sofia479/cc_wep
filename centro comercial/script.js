
// FORMULARIO DE CONTACTO

const formulario = document.getElementById("formulario");

const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(event) {

    // Evitar que la pagina se recargue
    event.preventDefault();

    // Obtener los datos
    let nombre = document.getElementById("nombre").value;

    let correo = document.getElementById("correo").value;

    let mensaje = document.getElementById("mensaje").value;

    // Mostrar respuesta
    respuesta.textContent = "¡Gracias " + nombre +
    "! Tu mensaje ha sido recibido.";

    // Limpiar formulario
    formulario.reset();

});
