const texto = document.querySelector('input#texto')
const btn_salvar = document.querySelector('input#salvar') 
const btn_remover = document.querySelector('div.remover')
const cx_conteudo = document.querySelector('.conteudo')
const vazio = document.querySelector('.vazio')
const todosItens = []

btn_salvar.addEventListener('click', ()=>{  

    if(texto.value==''){
        window.alert('Valor não encontrado!')
    }else{

    /* todosItens.push(texto.value)
    Colocar filtro para valor repetido.     
    */
       
    vazio.style.display = 'none'
           
    const novoItem = document.createElement('div')
    novoItem.setAttribute('class','itens')
    novoItem.innerText = texto.value
    
    cx_conteudo.insertBefore(novoItem, btn_remover )
    texto.value = '' 

    novoItem.addEventListener('click',()=>{
        novoItem.classList.toggle('importante')
    })

    }
})

btn_remover.addEventListener('click',()=>{
    const importante = [...document.querySelectorAll('div.importante')]
    
    if(importante.length == 0){
        window.alert('Não há nenhum item selecionado!')
    }else{
    const msg_confirmacao = window.confirm('Clique em "OK" para remover o item!')
    if(msg_confirmacao == true){
    importante.map(el=>{
        el.remove()
    })}
    }
    
    const novoItem = document.querySelectorAll('div.itens')
    if(novoItem.length==0){
    vazio.style.display='block'
    } 
})




