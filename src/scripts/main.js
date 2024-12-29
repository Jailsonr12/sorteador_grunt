document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("form-sorteador")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            let numeroMaximo = document.getElementById("numero-maximo").value;
            numeroMaximo = parseInt(numeroMaximo);

            let numeroAleatorio = Math.random(1) * numeroMaximo;
            numeroAleatorio = Math.floor(numeroAleatorio + 1);

            document.getElementById("resultado-valor").innerText =
                numeroAleatorio;

            document.querySelector(".resultado").style.display = "block";
        });
});
