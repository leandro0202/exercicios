let res = document.getElementById("res")

let m = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
let semana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']

let d = new Date()
let dia = d.getDate()
let mes = d.getMonth()
let ano = d.getFullYear()
let diaSemana = d.getDay()
let hora = d.getHours()
let minuto = d.getMinutes()
let segundo = d.getSeconds()

function clique(){
    

        res.innerHTML = `</br>dia: <mark>${dia}</mark></br></br>`
        res.innerHTML += `mes: <mark>${m[mes]}</mark></br></br>`
        res.innerHTML += `ano: <mark>${ano}</mark></br></br>`
        res.innerHTML += `dia da semana: <mark>${semana[diaSemana]}</mark></br></br>`
        res.innerHTML += `hora: <mark>${hora}</mark></br></br>`
        res.innerHTML += `minutos: <mark>${minuto}</mark></br></br>`
        res.innerHTML += `segundos: <mark>${segundo}</mark></br></br>`
        
}