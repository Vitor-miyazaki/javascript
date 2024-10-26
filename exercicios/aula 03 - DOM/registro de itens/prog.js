const texto = document.querySelector('input#texto')
const btn_salvar = document.querySelector('input#salvar') 
const cx_conteudo = document.querySelector('.conteudo')
const vazio = document.querySelector('.vazio')
let arr = ['aaaa','bbb']


/* 
Para cada elemento adicionado, necesário vincular o onclick
Ao clicar, vou remover o elemento
*/

btn_salvar.addEventListener('click', ()=>{  
    if(texto.value==''){
        window.alert('[ERRO] Valor não encontrado. Por favor, digite o item que deseja salvar!')
    }else{
    //window.alert(texto.value)
    vazio.style.display = 'none'
    arr.push(texto.value)       
    const novoItem = document.createElement('div')
    novoItem.setAttribute('class','itens')
    novoItem.innerText = texto.value
    cx_conteudo.appendChild(novoItem)
    texto.value = '' 
    
    
        /* arr.map(el=>{
            el.addEventListener('click', ()=>{
            console.log('teste')
            })
        }) */
    
    
    }
})





