const btnEsquerda = document.querySelector("#esquerda")
const btnDireita = document.querySelector("#direita")
const carro = document.querySelector("#quadrado1")
const parar = document.querySelector("#parar")
const cima = document.querySelector("#cima")
const baixo = document.querySelector("#baixo")

intervalo = setInterval(() => {}, 2)
let tamMax = window.innerWidth - 120
let giros = 0;

btnDireita.addEventListener("click", (evt) => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
    const localAtual = parseInt(carro.style.right) || 0
    const novoLocal = localAtual - 1
    if (novoLocal >= -tamMax) {
        carro.style.right = novoLocal + "px"
    } else {
        clearInterval(intervalo);
        carro.classList.add("girar");
        setTimeout(() => {
            carro.classList.remove("girar");
        }, 1000);
    }
    }, 2)
})
btnEsquerda.addEventListener("click", (evt) => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
        const localAtual = parseInt(carro.style.right) || 0
        const novoLocal = localAtual + 1
        if (novoLocal <= 0) {
            carro.style.right = novoLocal + "px"
        } else {
            clearInterval(intervalo);
            carro.classList.add("girar");
            setTimeout(() => {
                carro.classList.remove("girar");
            }, 1000);
        }     
    }, 2)
})

cima.addEventListener("click", (evt) => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
        const localAtual = parseInt(carro.style.top) || 0
        const novoLocal = localAtual - 1
        if (novoLocal >= 0) {  
            carro.style.top = novoLocal + "px"
        } else {
            clearInterval(intervalo);
            carro.classList.add("girar");
            setTimeout(() => {
                carro.classList.remove("girar");
            }, 1000);
        }
    }, 2)
})

baixo.addEventListener("click", (evt) => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
        const localAtual = parseInt(carro.style.top) || 0
        const novoLocal = localAtual + 1
        if (novoLocal < tamMax) { 
            carro.style.top = novoLocal + "px"
        } else {
            clearInterval(intervalo);
            carro.classList.add("girar");
            setTimeout(() => {
                carro.classList.remove("girar");
            }, 1000);
        }
        }, 2)
})
    

parar.addEventListener("click", (evt) => {
    clearInterval(intervalo)
})

window.addEventListener("resize", () => {
    tamMax = window.innerWidth - 120
})

function girarCarro() {
    if (giros < 4) {
        carro.style.transform += "rotate(90deg)";
        giros++;
        setTimeout(girarCarro, 30);
    }
}


    
