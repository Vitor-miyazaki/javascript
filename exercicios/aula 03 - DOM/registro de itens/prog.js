const texto = document.querySelector('input#texto')
const btn_salvar = document.querySelector('input#salvar') 
const cx_conteudo = document.querySelector('.conteudo')
let arr = []
let ex = 'texto'


btn_salvar.addEventListener('click', ()=>{
    if(texto.value==''){
        window.alert('[ERRO] Valor não encontrado. Por favor, digite o item que deseja salvar!')
    }else{
    //window.alert(texto.value)
    arr.push(texto.value)
    texto.value = ''
    
    arr.map(el=>{
        //O elemento é o conteúdo da array
        //Cade elemento precisa gerar uma div por meio do createElement
        //Adicionar atributo classe
        //Fazer com que apareça na section
        const novoItem = document.createElement('div')
        novoItem.setAttribute('class','itens')
        novoItem.innerText = el
        cx_conteudo.appendChild(novoItem)
    })

    
}
})





