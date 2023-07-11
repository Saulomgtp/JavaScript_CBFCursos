const q1 = document.querySelector("#q1")
const q2 = document.querySelector("#q2")
const posx = document.querySelector("#posx")
const posy = document.querySelector("#posy")
const largura = document.querySelector("#largura")
const altura = document.querySelector("#altura")


const info = (el) => {
    let domRect = el.getBoundingClientRect()

    posx.innerHTML = "posx: " + domRect.x
    posy.innerHTML = "posx: " + domRect.y
    largura.innerHTML = "posx: " + domRect.width
    altura.innerHTML = "posx: " + domRect.height
}

q1.addEventListener("click", (evt) => {
    info (q1)
})
q2.addEventListener("click", (evt) => {
    info (q2)
})