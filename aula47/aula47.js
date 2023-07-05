const array = document.querySelector("#array")
const inputDados = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")


const elementosArray = [10, 5, 8, 2, 9, 15, 20]
// const elementosArray = ["HTML", "CSS", "JAVASCRIPT"] também pode usar com string

array.innerHTML = "[" + elementosArray + "]"

btnPesquisar.addEventListener("click", (evt) => {
    elementosArray.find((e, i) => {
        if (e == inputDados.value) {
            resultado.innerHTML = "O valor " + e + " está presente no array e está na posição " + i
            return true
        } else {
            resultado.innerHTML = "O valor " + inputDados.value + " não está presente no array"
        }
    })
})

