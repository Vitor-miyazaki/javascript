function clicar(){
    var anonasci = document.getElementById('data').value
    var agora = new Date();
    var anoatual = agora.getFullYear()    
    var txt = document.getElementById('res')

    if(anonasci < 1900 || anonasci >= anoatual ){
        txt.innerText = `[ERRO] Data de nascimento inválida. Revise os dados e tente novamente!`
    } else{
        var idade = anoatual - anonasci
        var img = document.createElement('img')
        //img.setAttribute ('id', 'foto')
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        if (sexo[0].checked){
            genero = 'masculino'
            if (idade < 10){
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/garoto.png')
            } else if (idade < 60){
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (sexo[1].checked){
            genero = 'feminino'
            if (idade < 10){
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/garota.png')
            } else if (idade < 60){
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        txt.style.textAlign = 'center'
        txt.innerHTML = `Detectamos que o seu sexo é ${genero} com ${idade} anos!`
        txt.appendChild(img)  
        
    }
    
}