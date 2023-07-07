const numero = document.querySelector("#numero")
const btnPromessa = document.querySelector("#btn_promessa")

btnPromessa.addEventListener("click", (evt) => {
    numero.innerHTML = "Processando...."
    promessa()
        
    .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    .catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
})

const promessa =() => {
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
    return promise
}



 numero.innerHTML = "Esperando"
