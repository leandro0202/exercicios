let res = document.getElementById("res")

let data  = new Date()
let ano = data.getUTCFullYear()

function clique(){

    let anoNascimento = parseFloat(prompt('em que ano vc nasceu?'))

    let idade = ano - anoNascimento

    res.innerHTML = `quem nasceu em ${anoNascimento} vai completar ${idade} anos de idade em ${ano}`


}