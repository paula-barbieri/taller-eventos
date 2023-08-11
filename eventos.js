function mostrarAlertaDiv() {
    alert("Hola! Soy el div");
}

document.addEventListener("DOMContentLoaded", function() {
    const divElement = document.querySelector(".boton-container");
    divElement.addEventListener("click", mostrarAlertaDiv);
});
