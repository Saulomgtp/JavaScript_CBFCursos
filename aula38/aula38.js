const caixa1 = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]
const cursoss = ["HTML","CSS","Javascript","PHP","React","MySQL","Saulinshow"]

let posicao = 1;

cursoss.map((e) => {
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = e
    novoElemento.setAttribute("id", "c"+ posicao)
    novoElemento.setAttribute("class", "curso c1")
    caixa1.appendChild(novoElemento)

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "lixeira.png")
    btn_lixeira.setAttribute("class", "foto")
    btn_lixeira.addEventListener("click", (evt) => {
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(btn_lixeira)

    posicao += 1;
})




// const novoElemento = document.createElement("div")
// novoElemento.innerHTML = "Saulinshow"
// novoElemento.setAttribute("id", "c7")
// novoElemento.setAttribute("class", "curso c1")
// caixa1.appendChild(novoElemento)

