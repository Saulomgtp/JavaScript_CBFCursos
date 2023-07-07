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
}
setInterval(relogio, 1000);



