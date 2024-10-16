
function clickHTML(){
let html = document.querySelector('.html')
html.setAttribute('class', 'importante')
}

function clickCSS(){
    let css = document.querySelector('.css')
    css.setAttribute('class', 'importante')
}

function clickJS(){
    let js = document.querySelector('.javascript')
    js.setAttribute('class', 'importante')
}

function clickPHP(){
    let php = document.querySelector('.php')
    php.setAttribute('class', 'importante')
}

function clickReact(){
    let react = document.querySelector('.react')
    react.setAttribute('class', 'importante')
}

function clickMysql(){
    let mysql = document.querySelector('.mysql')
    mysql.setAttribute('class', 'importante')
}

function clickCopiar(){
    let selecionados = [document.querySelectorAll('div.importante')]
    console.log(selecionados)
    let sectionRight = document.querySelector('.right')
    let txt = document.createElement('p')
    txt.innerText = 'oooo'
    let teste = selecionados.map(el=>el)
    let criaçao = document.createElement(teste)
    sectionRight.appendChild(criaçao)
}
/* 

1 - Quando clicar o que vai acontecer? 
a - mudar a cor --- como adicionar uma classe? var.setAttribute('classe','importante')
b - ficar selecionado 

2 - Como copiar e enviar para o outro lado? 
3 - Como fazer isso para os demais de um forma otimizada? 

*/
