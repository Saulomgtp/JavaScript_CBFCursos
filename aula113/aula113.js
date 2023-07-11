const long = document.querySelector("#long")
const lati = document.querySelector("#lati")

function mostrarLocalizacao (pos) {
    long.innerHTML = pos.coords.longitude
    lati.innerHTML = pos.coords.latitude
    console.log(pos)
}
function erroLocalizacao () {
    console.log("Erro ao obter a localização")
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
} else {
    console.log("Geolocalização desativada")
}
