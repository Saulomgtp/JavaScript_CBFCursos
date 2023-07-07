// getDate() = Dia do mês
// getDay() = Dia da Semana (número)
// getFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (milisegundos desde 1 de Janeiro de 1970)
// Date.now() = Timestamp (milisegundos desde 1 de Janeiros de 1970)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define Minutos
// setSeconds () = Define Segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data

const divRelogio = document.querySelector("#relogio")
const timer = document.querySelector("#caixaPrincipal")
const ativar = document.querySelector("#ativar")
const parar = document.querySelector("#parar")
const tempoAlarme = document.querySelector("#input")
const horaAlarme = document.querySelector("#horaAlarme")

const som = new Audio("alarme.mp3")
som.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

ativar.addEventListener("click", (evt) => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tempoAlarme.value * 1000) //falando que o tempo de alarme é o instante atual do clique + o tempo predefinido no input
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    horaAlarme.innerHTML = "Hora do Alarme: " + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})
parar.addEventListener("click", (evt) => {
    alarme_ativado = false
    alarme_tocando = false
    horaAlarme.innerHTML = "Hora do Alarme: "
    tempoAlarme.value = 0
    timer.classList.remove("alarme")
    som.pause()
    som.currentTime = 0

})
const relogio =() => {
    const data = new Date()

    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora

    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0" + minuto : minuto

    let segundo = data.getSeconds()
    segundo = segundo < 10 ? "0" + segundo : segundo

    const horaCompleta = hora + ":" + minuto + ":" + segundo
    divRelogio.innerHTML = horaCompleta

    if(alarme_ativado && !alarme_tocando) {
        if(data.getTime() >= ts_alarme) {
            alarme_tocando = true
            som.play()
            timer.classList.add("alarme")
        }
    }
}
setInterval(relogio, 1000);







