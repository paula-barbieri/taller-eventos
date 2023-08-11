function mostrarAlertaDiv() {
    alert("Hola! Soy el div");
}

document.addEventListener("DOMContentLoaded", function() {
    const botonElement = document.getElementById("saludarBtn");
    const divElement = document.getElementsByClassName(".boton-container");

    botonElement.addEventListener("click", function(event) {
        alert("¡Hola!");
        event.stopPropagation(); // Evitar la propagación del evento al div
    });

    divElement.addEventListener("click", mostrarAlertaDiv);
});

