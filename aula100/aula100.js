const btnEsquerda = document.querySelector("#esquerda")
const btnDireita = document.querySelector("#direita")
const carro = document.querySelector("#quadrado1")

btnDireita.addEventListener("click", (evt) => {
    const localAtual = parseInt(carro.style.right) || 0
    const novoLocal = localAtual - 10
    carro.style.right = novoLocal + "px"
})
btnEsquerda.addEventListener("click", (evt) => {
    const localAtual = parseInt(carro.style.right) || 0
    const novoLocal = localAtual + 10
    carro.style.right = novoLocal + "px"
})