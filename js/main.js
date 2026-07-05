// Contador de visitas

let visitas = localStorage.getItem("visitas");

if (visitas === null) {
    visitas = 1;
} else {
    visitas = Number(visitas) + 1;
}

localStorage.setItem("visitas", visitas);

let contador = document.getElementById("contadorVisitas");

if (contador) {
    contador.textContent = "Cantidad de visitas: " + visitas;
}


// Validación del formulario

const formulario = document.getElementById("formularioContacto");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        let texto = document.getElementById("mensajeFormulario");

        if (nombre === "" || correo === "" || mensaje === "") {

            texto.style.color = "red";
            texto.textContent = "Complete todos los campos obligatorios.";

        } else {

            texto.style.color = "green";
            texto.textContent = "Formulario enviado correctamente.";

            formulario.reset();
        }

    });

}