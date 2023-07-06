const caixa = document.querySelector("#caixa1")
const nome = document.querySelector("#texto1")
const idade = document.querySelector("#texto2")
const adicionar = document.querySelector("#botao1")

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    getNome() {
        return this.nome;
    }
    
    getIdade() {
        return this.idade;
    }
}

let pessoas = []

const addPessoa = () => {
    caixa.innerHTML = ""
    pessoas.map((e) => {
        const p = document.createElement("div")
        p.setAttribute("class", "pessoa")
        p.innerHTML = "Nome: " + e.getNome() + "<br/>Idade: " + e.getIdade() + " anos"
        caixa.appendChild(p)
    })
}


adicionar.addEventListener("click", (evt) => {
    const dados = new Pessoa (nome.value, idade.value)
    pessoas.push(dados)
    console.log(pessoas)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})







