/* 
1 - Colocando todos os elementos em uma array
2 - Para cada elemento(MAP), haverá uma ação de click(addEventListener)
3 - Nessa ação de click, vai adicionar uma classe chamada importante. Utilizando junto ao Toggle
4 - O botão de copiar, terá um outro addEventListener
5 - Ao clicar, ele irá selecionar somente as div com class importante e coloca-las em uma array
6 - Para cada elemento, terá um appendChild na section da direita. 
*/


const todosElementos = [...document.querySelectorAll('div.cursos')]
const btnCopiar = document.querySelector('.copiar')
const btnVoltar = document.querySelector('.voltar')
const right = document.querySelector('.right')
const left = document.querySelector('.left')
//const txtVazio = document.getElementsByTagName('span')[0]
//console.log(txtVazio)

todosElementos.map(el=>{
    el.addEventListener('click', ()=>{
        el.classList.toggle('importante')
    })
})

btnCopiar.addEventListener('click', ()=>{
    const importante = [...document.querySelectorAll('div.importante')]
    if(importante.length==0){
        window.alert('Selecione um curso para prosseguir')
    }else{
    importante.map(el=>{
        right.appendChild(el)
    })
    }
})

btnVoltar.addEventListener('click', ()=>{
    if(right.children.length==0){
        window.alert('A caixa da direita está vazia, portanto não é possível prosseguir.')
    }else{
    const importante = [...document.querySelectorAll('div.importante')]
    
    importante.map(el=>{
        left.appendChild(el)
    })
}})
