let res = document.getElementById("res")

function clique(){
    let numero1 = parseFloat(prompt('digite um numero'))
    let numero2 = parseFloat(prompt('digite outro numero'))
    
    let multipla = prompt(`valoers informados ${numero1} e ${numero2} \n escolha uma opção \n [1]soma \n [2]multiplica \n [3]dividir \n [4]subtrair`)

    if (multipla == 1){
        res.innerHTML = `<strong>${numero1} + ${numero2} = ${numero1 +numero2}</strong>`
    }else if (multipla == 2){
        res.innerHTML = `<strong>${numero1} x ${numero2} = ${numero1 * numero2}</strong>`
    }else if (multipla == 3){
        res.innerHTML = `<strong>${numero1} / ${numero2} = ${numero1 / numero2}</strong>`
    }else if (multipla == 4){
        res.innerHTML = `<strong>${numero1} - ${numero2} = ${numero1 - numero2}</strong>`
    }
}