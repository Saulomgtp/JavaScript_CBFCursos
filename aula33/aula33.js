const divTodas = [...document.getElementsByTagName("div[class]")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = [document.getElementById("c5")]
const cursoEspecial1 = [document.getElementsByClassName("curso")[0]]

const queryDiv = [...document.querySelectorAll("div")]
const queryCursos = [...document.querySelectorAll(".curso")]
const queryC1 = [...document.querySelectorAll(".c1")]
const queryC2 = [...document.querySelectorAll(".c2")]

console.log(divTodas)
console.log(queryCursos)
console.log(queryC1)
console.log(queryC2)






// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)
// console.log(divTodas)


// cursoEspecial.map((e) => {
//     e.classList.add("destaque")
// })
// cursoEspecial1.map((e) => {
//     e.classList.add("destaque")
// })