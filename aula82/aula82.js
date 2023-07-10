const caixaBola = document.querySelector("#caixaBolas")
const qntBolas = document.querySelector("#quantidadeBolas")
const btnAdicionar = document.querySelector("#btnAdicionar")
const inputSoma = document.querySelector("#inputSoma")
const btnRemover = document.querySelector("#btnRemover")


qntBolas.innerHTML = caixaBola.querySelectorAll("div").length

function gerarNumeroAleatorio() {
    var min = 20;
    var max = 50;
    var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
  }

  function gerarCorAleatoria() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    var cor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  
    return cor;
  }
  function gerarDirecaoAleatoria() {
    var direcoes = [-1, 1];
    var indiceAleatorio = Math.floor(Math.random() * direcoes.length);
    return direcoes[indiceAleatorio];
  }


class Bola {
    constructor () {
        this.width = gerarNumeroAleatorio() + "px";
        this.height = gerarNumeroAleatorio() + "px";
        this.cor = gerarCorAleatoria()
        this.direcaoX = gerarDirecaoAleatoria()
        this.direcaoY = gerarDirecaoAleatoria()
        this.velocidade = Math.floor(Math.random() * 5) + 1
    }
    

    criarBola() {
        const novoElemento = document.createElement("div")
        novoElemento.setAttribute("class", "bola")
        novoElemento.style.backgroundColor = gerarCorAleatoria()
        novoElemento.style.width = this.width
        novoElemento.style.height = this.width
        novoElemento.style.position = "absolute"

        const caixaWidth = caixaBola.offsetWidth
        const caixaHeight = caixaBola.offsetHeight
        const bolaWidth = parseInt(this.width, 10)
        const bolaHeight = parseInt(this.height, 10)

        novoElemento.style.left = Math.floor(Math.random() * (caixaWidth - bolaWidth)) + "px"
        novoElemento.style.top = Math.floor(Math.random() * (caixaHeight - bolaHeight)) + "px"

        
        const atualizarPosicao = () => {
            const currentLeft = parseInt(novoElemento.style.left, 10)
            const currentTop = parseInt(novoElemento.style.top, 10)

            const newLeft = currentLeft + this.direcaoX * this.velocidade
            const newTop = currentTop + this.direcaoY * this.velocidade

            const caixaWidth = caixaBola.offsetWidth
            const caixaHeight = caixaBola.offsetHeight
            const bolaWidth = novoElemento.offsetWidth
            const bolaHeight = novoElemento.offsetHeight

            if (newLeft < 0 || newLeft + bolaWidth > caixaWidth) {
                this.direcaoX *= -1
            }
    
            if (newTop < 0 || newTop + bolaHeight > caixaHeight) {
                this.direcaoY *= -1
            }

            novoElemento.style.left = newLeft + 'px'
            novoElemento.style.top = newTop + 'px'

            requestAnimationFrame(atualizarPosicao)
        };

        atualizarPosicao()

        return novoElemento
    }
}

const adicionarBola = () => {
    const bola = new Bola ()
    caixaBola.appendChild(bola.criarBola())
    qntBolas.innerHTML = caixaBola.querySelectorAll("div").length
} 
btnAdicionar.addEventListener("click", (evt) => {
    for (let i = 0; i < inputSoma.value; i++) {
        adicionarBola()
    }
})

btnRemover.addEventListener("click", (evt) => {
    const bolas = [...caixaBola.querySelectorAll(".bola")]
    bolas.map((e) =>{
        caixaBola.removeChild(e)
    })
    qntBolas.innerHTML = caixaBola.querySelectorAll("div").length
    inputSoma.value = ""
})







