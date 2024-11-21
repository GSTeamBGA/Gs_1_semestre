document.addEventListener("DOMContentLoaded", () => {
    const trocaButton = document.getElementById("troca");

    if (trocaButton) {
        trocaButton.addEventListener("click", (event) => {
            event.preventDefault(); // Previne o comportamento padrão do botão
            window.location.href = "./html/dashbord.html"; // Ajuste o caminho
        });
    }
});