const array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")


const elementosArray = [20, 18, 18, 20, 19, 14, 20]
// const elementosArray = ["HTML", "CSS", "JAVASCRIPT"] também pode usar com string

array.innerHTML = "[" + elementosArray + "]"

btnVerificar.addEventListener("click", (evt) => {
    const retur = elementosArray.some((e, i) => {
        if(e < 21) {
        resultado.innerHTML = "Array não conforme na posição " + i
        } 
        return e >= 21
    })
    if(retur) {
        resultado.innerHTML = "Array conforme"
    }

})

