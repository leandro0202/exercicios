let res = document.querySelector("p#res")

function clique(){

    let num = Math.round(Math.random() * 100)

    res.innerHTML +=`o numero sorteado foi <mark>${num}!</mark></br></br>`
}
function limpar(){
    res.innerHTML = ''
}