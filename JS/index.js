var  nome = "Patricia Dayane";
var cargo = "Cto - Growdev";

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");



function colocarNomenohtml(nome){
    nomehtml.innerHTML = nome;

}

function Colocarcargonohtml(cargo){
    cargohtml.innerHTML = cargo;

}

function logarNome(){
    console.log(nome);
}

function clicknoprojetos (){
    console.log("Clicou no botão Projetos");
    texto2.style.display = "Block";
    texto1.style.display= "none";
}

function ClicknoSobre (){
    console.log("Clicou no botão Sobre");
    texto1.style.display="block";
    texto2.style.display="none";

}

colocarNomenohtml(nome);
Colocarcargonohtml (cargo);