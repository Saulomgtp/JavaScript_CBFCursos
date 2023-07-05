const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = [document.getElementById("c5")]
const cursoEspecial1 = [document.getElementsByClassName("curso")[0]]
console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)

cursoEspecial.map((e) => {
    e.classList.add("destaque")
})
cursoEspecial1.map((e) => {
    e.classList.add("destaque")
})