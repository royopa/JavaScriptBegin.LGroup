// Função anônima
(function () {
    // onLoad é um evento do navegador
    // que é executado assim que o HTML for carregado
    window.onload = AtribuirAno;
})();

function AtribuirAno() {
    // Palavra reservada do JS para debuggar o código
    //debugger;

    // Manipulando o DOM da página
    var lblTimeYear = document.getElementById('lblTimeYear');
    lblTimeYear.textContent = new Date().getFullYear();
}
