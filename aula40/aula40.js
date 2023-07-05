const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","React"]
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverSelecionado = document.querySelector("#btnRemoverSelecionado")
const btnAdicionarAntes = document.querySelector("#btnAdicionarAntes")
const btnAdicionarDepois = document.querySelector("#btnAdicionarDepois")
const nomeCurso = document.getElementById("nomeCurso")


let posicao = 1;

const adicionarCursos = (nome) => {

    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = nome
    novoElemento.setAttribute("id", "c" + posicao)
    novoElemento.setAttribute("class", "curso c1")
    caixaCursos.appendChild(novoElemento)
    posicao += 1;

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)
    return novoElemento
}

cursos.map((e) => {
    adicionarCursos(e)
})


const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((e) => e.checked)

    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {

    const rs = radioSelecionado()
    if (rs) {
        const cursoSelecionado = rs.parentNode.parentNode.textContent;
        alert("Curso selecionado: " + cursoSelecionado);
    } else {
        console.log("Nenhum item foi selecionado")
        alert("Selecione um curso")
    }

})

btnRemoverSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if (rs) {
        const cursoSelecionado = rs.parentNode.parentNode

        caixaCursos.removeChild(cursoSelecionado)

    } else {
        console.log("Nenhum item foi selecionado");
        alert("Selecione um curso")
    }
})

btnAdicionarAntes.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    
    if (rs && nomeCurso.value != null) {
        const cursoSelecionado = rs.parentNode.parentNode
        
        const novoCurso = adicionarCursos(nomeCurso.value)
        
        caixaCursos.insertBefore(novoCurso, cursoSelecionado)

        nomeCurso.value = null
    } else {
        console.log("Nenhum item foi selecionado ou não foi escrito um curso");
        alert("Selecione um curso ou digite o nome do curso que deseja adicionar")
    }
    
});

btnAdicionarDepois.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    
    if (rs && nomeCurso.value != null) {
        const cursoSelecionado = rs.parentNode.parentNode
        
        const novoCurso = adicionarCursos(nomeCurso.value)
        
        caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)

        nomeCurso.value = null
    } else {
        console.log("Nenhum item foi selecionado ou não foi escrito um curso");
        alert("Selecione um curso ou digite o nome do curso que deseja adicionar")
    }
});

































// btnAdicionar.addEventListener("click", (evt) => {
//     const input = document.querySelector("#nomeCurso")
//     console.log(input.value)
//     const inputNovoElemento = document.createElement("div")
//     inputNovoElemento.innerHTML = input.value
//     inputNovoElemento.setAttribute("id", "c")
//     inputNovoElemento.setAttribute("class", "curso c1")

//     const comandos = document.createElement("div")
//     comandos.setAttribute("class", "comandos")

//     const rb = document.createElement("input")
//     rb.setAttribute("type", "radio");
//     rb.setAttribute("name", "rb_curso")

//     comandos.appendChild(rb)

//     inputNovoElemento.appendChild(comandos)

//     caixaCursos.appendChild(inputNovoElemento)
// })
