document.addEventListener("DOMContentLoaded", function() {
    // Animación de fade-in en los logos de clientes
    let logos = document.querySelectorAll(".logos img");
    let index = 0;

    function mostrarLogos() {
        logos.forEach((logo, i) => {
            logo.style.opacity = i === index ? "1" : "0";
        });
        index = (index + 1) % logos.length;
        setTimeout(mostrarLogos, 3000);
    }

    mostrarLogos();

    // Formulario de contacto
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;

        if (nombre && email && mensaje) {
            document.getElementById("responseMessage").innerText = "Mensaje enviado con éxito.";
            this.reset();
        } else {
            document.getElementById("responseMessage").innerText = "Por favor, completa todos los campos.";
        }
    });
});
