const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");

const btn = document.querySelector("#btn_copiar");

const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((e) => {
    e.addEventListener("click", (evt) => {
        e.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", () => {
    const selecionados = [...document.querySelectorAll(".selecionado")]
    selecionados.map((e) => {
        caixa2.appendChild(e);
    })
    const naoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    naoSelecionados.map((e) => {
        caixa1.appendChild(e)
    })
})