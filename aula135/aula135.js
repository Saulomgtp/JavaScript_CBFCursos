const config = {
    titulo: "CFB Cursos",
    texto: "Curso de JavaScript, criando caixa de mensagem personalizada",
    cor: "#48f"
}

const cxmsg = new Cxmsg(config)

const btn_mostrar = document.querySelector("#btn_mostrarcxmsg")

btn_mostrar.addEventListener("click", (evt) => {
    cxmsg.mostrar()
})