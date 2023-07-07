const inputNome = document.querySelector("#inputNome")
const inputPortas = document.querySelector("#inputPortas")
const inputBlindagem = document.querySelector("#inputBlindagem")
const inputMunicao = document.querySelector("#inputMunicao")
const radioMilitar = document.querySelector("#radioMilitar")
const radioNormal = document.querySelector("#radioNormal")
const btnAdicionar = document.querySelector("#btnAdicionar")
const caixaCarros = document.querySelector("#caixaCarros")

inputPortas.value = 0;
inputBlindagem.value = 0;
inputMunicao.value = 0;
inputBlindagem.disabled = true;
inputMunicao.disabled = true;
radioNormal.checked = true;

radioMilitar.addEventListener("click", (evt) => {
    inputBlindagem.disabled = false;
    inputMunicao.disabled = false;
})
radioNormal.addEventListener("click", (evt) => {
    inputBlindagem.disabled = true;
    inputMunicao.disabled = true;
})

btnAdicionar.addEventListener("click", (evt) => {

    const botaoRemover = document.createElement("button")
    botaoRemover.innerHTML = "Remover"
    botaoRemover.setAttribute("class", "botao")
    botaoRemover.addEventListener("click", (evt) => {
        const elementoPai = evt.target.parentNode
        caixaCarros.removeChild(elementoPai)
    } )

    if (radioNormal.checked) {
        const carro = new Carro (inputNome.value, inputPortas.value)
        const novoElemento = document.createElement("div")
        novoElemento.innerHTML = "Nome: " + carro.nome + "<br> Portas: " + carro.portas
        novoElemento.setAttribute("class", "carro")
        novoElemento.appendChild(botaoRemover)
        caixaCarros.appendChild(novoElemento)     
        inputNome.value = ""  
        inputPortas.value = "0"  
    } else if (radioMilitar.checked) {
        const carro = new Militar (inputNome.value, inputPortas.value, inputBlindagem.value, inputMunicao.value)
        const novoElemento = document.createElement("div")
        novoElemento.innerHTML = "Nome: " + carro.nome + "<br> Portas: " + carro.portas + "<br> Blindagem: " + carro.blindagem + "<br> Munição: " + carro.municao
        novoElemento.setAttribute("class", "carro")
        novoElemento.appendChild(botaoRemover)
        caixaCarros.appendChild(novoElemento)     
        inputNome.value = ""  
        inputPortas.value = "0"  
        inputBlindagem.value = "0"
        inputMunicao.value = "0"
    }
})

class Carro{  //classe Pai
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = "Não"
        this.vel = 0
        this.cor = undefined
    }
    ligar = function() {
        this.ligado = "Sim"
    }
    desligar = function() {
        this.ligado = "Não"
    }
    setCor = function(cor) {
        this.cor = cor
    }

}
class Militar extends Carro { //Classe Filho
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.cor = "Verde"
    }

    atirar = function() {
        if(this.municao > 0) {
            this.municao--
        }
    }

}

