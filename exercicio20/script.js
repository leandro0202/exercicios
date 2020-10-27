let res = document.getElementById("res")

function clique(){
    let estação = ''
    let mes = prompt("digite o mês").toLowerCase()


    if (mes == 'janeiro' | mes == 'fevereiro' | mes == 'março'| mes == 'abril'){

        estação = 'verão'
        
    }else if(mes == 'maio'| mes == 'junho'| mes == 'julho'| mes =='agosto'){
        estação = 'outono'
        
    }else if(mes == 'setembro'| mes == 'outubro'| mes == 'novembro'| mes =='dezembro'){
        estação = 'inverno'

    }else{
        estação = 'digite o mes corretamente'
    }
    res.innerHTML = `no mês de <mark>${mes}</mark> estamos na estação <strong>${estação}</strong>`
}