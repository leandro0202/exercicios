let res = document.querySelector("p#res")
let num = Math.round(Math.random() * 10)
let pontos = document.getElementById("contador")
var cliques = 0
function clique(){
    cliques = cliques + 1 
    pontos.innerHTML = cliques


    let usuario = prompt("digite o seu palpite")
    let resultado = ''
    if (num != usuario){
        if (num > usuario){

             resultado = 'maior'

        }else{
            resultado = 'menor'
        }
        
        res.innerHTML += `voce digitou ${usuario}, o numero que eu joguei é <strong>${resultado}</strong></br></br?`
        tentativa = tentativa + 1
        

        
    }else{
        
        document.getElementById("botao").classList.add('sumir')
        pontos.style.display ='none'
        res.innerHTML += `<strong>PARABÈNS</strong> você acertou!, eu tinha sorteado ${num}</br></br>`
        
        
    
    }
    
    res.innerHTML += `você acertou em ${cliques} tentativas`



    
}
