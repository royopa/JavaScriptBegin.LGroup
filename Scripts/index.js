

var objectCidade = [
    { texto:'São Paulo', valor: 'SP' },
    { texto:'Rio de Janeiro', valor: 'RJ' },
    { texto:'Minas Gerais', valor: 'MG' }
];

// Função anônima
(function () {
    // onLoad é um evento do navegador
    // que é executado assim que o HTML for carregado
    window.onload = executeJsAfterLoadPage;
})();

function atribuirAno() {
    // Palavra reservada do JS para debuggar o código
    //debugger;

    // Manipulando o DOM da página
    var lblTimeYear = document.getElementById('lblTimeYear');
    lblTimeYear.textContent = new Date().getFullYear();
}

function onCadastrarClienteClick() {
    if (validarCadastroCliente()) {
        alert('Cadastrado');
    }
    alert('Ocorreu um erro ao cadastrar o cliente, tente novamente.');
}

function validarCadastroCliente() {
    var isValido = true;
    
    var nome     = document.getElementById('txtNome');
    var cidade   = document.getElementById('ddlCidade');
    var ckbAtivo = document.getElementById('ckbAtivo');

    var msgErro  = '';


    if (nome.value.trim() === "") {
        msgErro += 'Por favor, informe o nome.' + '\n';
        isValido = false;
    }

    if (cidade.value === "0") {
        msgErro += 'Por favor, informe a cidade.' + '\n';
        isValido = false;
    }

    if (isValido === false) {
        alert(msgErro);
    }

    return isValido;
}

function preencheCidade() {
    
    var ddlCidade  = document.getElementById('ddlCidade');
    var htmlOption = '<option value="0">--- Selecione ---</option>';

    for (var i = 0; i < objectCidade.length; i++) {
        htmlOption += '<option value="' + objectCidade[i].valor + '">'
        htmlOption += objectCidade[i].texto
        htmlOption += '</option>'
    }

    ddlCidade.innerHTML = htmlOption;
}

function executeJsAfterLoadPage() {
    atribuirAno();
    preencheCidade();
}
