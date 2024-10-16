function carregar(){
var txt = document.getElementById('texto');
var img = document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
//var hora = 10;
txt.innerText = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'manha2.png'
    txt.innerText += ' Bom dia!'
} else if(hora >=12 && hora < 18){
    //boa tarde
    img.src = 'tarde2.png'
    txt.innerText += ' Boa tarde!'
} else {
    //Boa noite
    img.src = 'noite2.png'
    txt.innerText += ' Boa noite!'
}
}
