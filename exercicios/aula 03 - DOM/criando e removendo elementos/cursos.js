const caixa = document.querySelector('#left')
const cursos = ['HTML', 'CSS', 'PHP', 'React', 'MySql','olá','tudo bem'] 


cursos.map((valor,indice)=>{
    const novoElemento = document.createElement('div')
    novoElemento.innerHTML = valor
    novoElemento.setAttribute('class', 'cursos')
    novoElemento.setAttribute('id',`c${indice + 1}`)
    caixa.appendChild(novoElemento)

    novoElemento.addEventListener
    
})

const botao = document.createElement('input')
    botao.setAttribute('type','button')
    botao.setAttribute('value','Remover')
    caixa.appendChild(botao)




/* 
- Criando vários elementos
- criando botão de lixeira
- removendo elementos
- Filtrando elementos
*/
    

 