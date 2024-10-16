function clicar(){
    var inicio = document.getElementById('inicio').value
    var passo = document.getElementById('passo').value
    var fim = document.getElementById('fim').value
    var txt = document.getElementsByTagName('p')[0]
    txt.innerText = 'Resultado: '
    var c = parseInt(inicio)
    var p = parseInt(passo)
    var f = parseInt(fim)
    
    
    
    if(inicio.length == 0){
        txt.innerHTML += '[ERRO] Digite um número em <strong>"inicio".</strong>'
    } else if (fim.length == 0){
        txt.innerHTML += '[ERRO] Digite um número em <strong>"fim".</strong>'
    }else if (passo.length == 0){
        txt.innerHTML += '[ERRO] Digite um número em <strong>"passo".</strong>'
    }else if(p == 0){
        txt.innerHTML += '[ERRO] É necessário que em <strong>"passo"</strong>, tenha um valor diferente de zero.'
    }else {
            if(c < f){
            for(c; c <= f; c += p){
                txt.innerHTML += `${c} \u{1F449}`}
            
            }else {
            for(c; c > f; c -= p){
                txt.innerHTML += `${c} \u{1F449}`}
            }
            
            txt.innerText += `\u{1F3C1}`
        }
}