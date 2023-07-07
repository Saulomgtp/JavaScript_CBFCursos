const btn7 = document.querySelector("#b7")
const btn4 = document.querySelector("#b4")
const btn1 = document.querySelector("#b1")
const btn8 = document.querySelector("#b8")
const btn5 = document.querySelector("#b5")
const btn2 = document.querySelector("#b2")
const btn9 = document.querySelector("#b9")
const btn6 = document.querySelector("#b6")
const btn3 = document.querySelector("#b3")
const btn0 = document.querySelector("#b0")

const btna = document.querySelector("#ba")

const br = document.querySelector("#br")

const bC = document.querySelector("#bC")
const bD = document.querySelector("#bD")
const bM = document.querySelector("#bM")
const bS = document.querySelector("#bS")
const bMenos = document.querySelector("#bMenos")
const bIgual = document.querySelector("#bI")

const input = document.querySelector("#entrada")


btn7.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 7
})

btn4.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 4
})
btn1.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 1
})
btn8.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 8
})
btn5.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 5
})
btn2.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 2
})
btn9.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 9
})
btn6.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 6
})
btn3.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 3
})
btn0.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + 0
})
btna.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + "."
})
bD.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + " / "
})
bM.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + " * "
})
bS.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + " + "
})
bMenos.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML + " - "
})
bIgual.addEventListener("click", (evt) => {
    const expressao = input.innerHTML
    const resultado = eval(expressao)
    input.innerHTML = "Resultado final: " + resultado
})
br.addEventListener("click", (evt) => {
    input.innerHTML = input.innerHTML.slice(0, -1);
})
bC.addEventListener("click", (evt) => {
    input.innerHTML = null
})

const aba = document.querySelector("#aba")
const caixaGeral = document.querySelector("#caixageral")

aba.addEventListener("click", (evt) => {
    caixaGeral.classList.toggle("exibir")
})

