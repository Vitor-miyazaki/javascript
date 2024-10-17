const caixa = document.querySelector('#left')
const cursos = ['HTML', 'CSS', 'PHP', 'React', 'MySql', 'olá', 'tudo bem']


cursos.map((valor, indice) => { // 1 - Criando div's para cada valor
    const novoElemento = document.createElement('div')
    novoElemento.innerHTML = valor
    novoElemento.setAttribute('class', 'cursos')
    novoElemento.setAttribute('id', `c${indice + 1}`)
    caixa.appendChild(novoElemento)

    novoElemento.addEventListener('click', () => { //2 - para cada valor, há um botão de click
        novoElemento.classList.toggle('importante') // 3 - A cada click, será adicionado uma classe
    })

})

const botao = document.createElement('input') //4 - Criando o botão para remover
botao.setAttribute('type', 'button')
botao.setAttribute('value', 'Remover')
caixa.appendChild(botao)

botao.addEventListener('click', ()=>{ //5 - Adicionar o click no botão

    const selecionado = [...document.querySelectorAll('div.importante')] //6 - Criar uma array contendo todos os elementos da classe a ser removida
    
    selecionado.map(el=>{ //7 - colocar no Map, pois o sistema só aceita remover valor por valor
        el.remove()
    })
    
})


