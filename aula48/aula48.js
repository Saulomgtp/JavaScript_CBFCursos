const array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")


const elementosArray = [20, 18, 18, 12, 19, 14, 20]
// const elementosArray = ["HTML", "CSS", "JAVASCRIPT"] também pode usar com string

array.innerHTML = "[" + elementosArray + "]"

btnVerificar.addEventListener("click", (evt) => {
    const retur = elementosArray.every((e, i) => {
        if(e < 18) {
        resultado.innerHTML = "Array não conforme na posição " + i
        } 
        return e >= 18
    })
    if(retur) {
        resultado.innerHTML = "Array conforme"
    }

})

