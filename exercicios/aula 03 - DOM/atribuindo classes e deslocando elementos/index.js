/* 
1 - Colocando todos os elementos em uma array
2 - Para cada elemento(MAP), haverá uma ação de click(addEventListener)
3 - Nessa ação de click, vai adicionar uma classe chamada importante. Utilizando junto ao Toggle
4 - O botão de copiar, terá um outro addEventListener
5 - Ao clicar, ele irá selecionar somente as div com class importante e coloca-las em uma array
6 - Para cada elemento, terá um appendChild na section da direita
*/


const todosElementos = [...document.querySelectorAll('div.cursos')]
const btnCopiar = document.querySelector('.copiar')
const btnVoltar = document.querySelector('.voltar')
const right = document.querySelector('.right')
const left = document.querySelector('.left')

todosElementos.map(el=>{ //Para as div's : Adicionando classe
    el.addEventListener('click', ()=>{
        el.classList.toggle('importante')
    })
})

const retirarSelecao=()=>{ // Para as div's: Removendo classe
    const importante = [...document.querySelectorAll('div.importante')]
    importante.map(el=>{
        el.classList.remove('importante')
    })
}

//Para o botão copiar
btnCopiar.addEventListener('click', ()=>{ 
    if(left.children.length==0){ // Se a section da esquerda não tiver filhos(div)
        window.alert('A caixa da esquerda está vazia, portanto não é possível prosseguir.')
    }else{
        const importante = [...document.querySelectorAll('div.importante')]
    
        if(importante.length==0){ //Se a section da esquerda não tiver div's selecionadas
            window.alert('Selecione um curso da coluna "esquerda" para prosseguir')
    
        }else{        
            importante.map(el=>{
            right.appendChild(el)
            })
        retirarSelecao() //Faço a chamada da ação de retirar a seleção, somente no final.
        }
    }
})


//Para o botão de voltar
btnVoltar.addEventListener('click', ()=>{
    if(right.children.length==0){
        window.alert('A caixa da direita está vazia, portanto não é possível prosseguir.')

    }else{
        const importante = [...document.querySelectorAll('div.importante')]

        if(importante.length==0){
            window.alert('Selecione um curso da coluna "direita" para prosseguir')

        }else{    
            importante.map(el=>{
            left.appendChild(el)
        })
        retirarSelecao()
        }
    }
})
