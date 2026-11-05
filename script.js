
// 1. ALTERAR TEXTO

const botaoTexto = document.getElementById("botaoTexto");
const mensagem = document.getElementById("mensagem");

botaoTexto.addEventListener("click", function() {

    mensagem.innerText =
        "Parabéns! Você acabou de manipular o DOM!";

});


// 2. RECEBER O NOME DO VISITANTE

const botaoNome = document.getElementById("botaoNome");
const nome = document.getElementById("nome");
const resultado = document.getElementById("resultado");

botaoNome.addEventListener("click", function() {

    if (nome.value.trim() === "") {
        resultado.innerText = "Digite seu nome primeiro!";
    } else {
        resultado.innerText =
            "Olá, " + nome.value + "! Seja bem-vindo(a)!";
    }

});


// 3. CONTADOR DE CURTIDAS

const botaoCurtir = document.getElementById("botaoCurtir");
const contador = document.getElementById("contador");

let curtidas = 0;

botaoCurtir.addEventListener("click", function() {

    curtidas++;

    contador.innerText = curtidas + " curtidas";

});


// 4. MUDAR A APARÊNCIA DA PÁGINA

const botaoCor = document.getElementById("botaoCor");

botaoCor.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});