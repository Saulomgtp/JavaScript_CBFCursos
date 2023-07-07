const numero = document.querySelector("#numero")

let promise = new Promise((ok, nok) => {
    let resultado = true
    let tempo = 3000

    setTimeout(() => {
        if(resultado) {
            ok("Deu tudo certo")
        } else {
            nok("Deu tudo errado")
        }
    },tempo)

})

promise.then((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
})
promise.catch((retorno) => {
    numero.innerHTML = retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
})


numero.innerHTML = "Processando..."
