const timer = document.querySelector("#timer")
const iniciar = document.querySelector("#iniciar")
const parar = document.querySelector("#parar")
const zerar = document.querySelector("#zerar")




const converter = (cont) => {
    const hora = Math.floor(cont/3600)
    const resto = cont%3600
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const form =  (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo)

    return form
}

let intervalID
iniciar.addEventListener("click", (evt) => {
    const init = Date.now()

    const contador = () => {
    const atual = Date.now()
    let cont = (atual - init)/1000
    timer.innerHTML = converter(cont)
}
    
    intervalID = setInterval(contador, 1000);
})

parar.addEventListener("click", (evt) => {
        clearInterval(intervalID)
})

zerar.addEventListener("click", (evt) => {
    timer.innerHTML = "00:00:00"
    clearInterval(intervalID)
})


