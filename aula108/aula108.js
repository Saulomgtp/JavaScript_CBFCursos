const btnEsquerda = document.querySelector("#esquerda")
const btnDireita = document.querySelector("#direita")
const carro = document.querySelector("#quadrado1")
const parar = document.querySelector("#parar")
const cima = document.querySelector("#cima")
const baixo = document.querySelector("#baixo")
intervalo = setInterval(() => {})

btnDireita.addEventListener("click", (evt) => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
    const localAtual = parseInt(carro.style.right) || 0
    const novoLocal = localAtual - 1
    carro.style.right = novoLocal + "px"
    }, 2)
})
btnEsquerda.addEventListener("click", (evt) => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
        const localAtual = parseInt(carro.style.right) || 0
        const novoLocal = localAtual + 1
        carro.style.right = novoLocal + "px"
        }, 2)
})

cima.addEventListener("click", (evt) => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
        const localAtual = parseInt(carro.style.top) || 0
        const novoLocal = localAtual - 1
        carro.style.top = novoLocal + "px"
        }, 2)
})

baixo.addEventListener("click", (evt) => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
        const localAtual = parseInt(carro.style.top) || 0
        const novoLocal = localAtual + 1
        carro.style.top = novoLocal + "px"
        }, 2)
})
    

parar.addEventListener("click", (evt) => {
    clearInterval(intervalo)
})
    
