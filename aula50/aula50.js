const array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")


const elementosArray = [1, 2, 3, 4, 5]
let ant = []
let atu = []
let dobro = []

array.innerHTML = "[" + elementosArray + "]"


// reduce é método para trabalhar com todos os elementos do array fazendo uma função com o array atual e o array anterior, nesse exemplo estava somando todos os elementos do array
btnReduzir.addEventListener("click", (evt) => {
    resultado.innerHTML = elementosArray.reduce( (anterior, atual, pos) => {
       ant.push(anterior)
       atu.push(atual)
       dobro.push(atual*2)
       return atual+anterior
    })
    resultado.innerHTML += "<br/>V.anterior: " + ant + "<br/>V.atual: " + atu + "<br/>Dobro: " + dobro
})

