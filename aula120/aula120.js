const fTexto = document.querySelector("#texto")
const pTexto = document.querySelector("#textoP")
const btnTexto = document.querySelector("#btnTexto")

btnTexto.addEventListener("click", (evt) => {


})

let num = 10

let curso = "Engenharia de Produção"

localStorage.setItem("numero", num)
localStorage.setItem("nome", "Saulo")
localStorage.setItem("empresa", "YouX")
localStorage.setItem("curso", curso)

localStorage.clear()

//SessionStorage   O sessionStorage é semelhante ao localStorage, mas os dados armazenados nele são válidos apenas para a sessão atual do navegador. Quando o navegador é fechado, os dados do sessionStorage são excluídos.

