
const btn_registrar = document.querySelector('#botao')
const resultado = document.querySelector('.resultado')

class Alimentos{
    constructor(nome,categoria,preço){
        this.nome = nome
        this.categoria = categoria
        this.preço = preço  
    }

    InserindoItens(){
        const novoItem = document.createElement('p')
        novoItem.innerHTML += `<strong>Nome:</strong> ${this.nome} <strong>Categoria:</strong> ${this.categoria} <strong>Preço:</strong> R$ ${this.preço}`
        resultado.appendChild(novoItem)
    }
}

btn_registrar.addEventListener('click', ()=>{
    const nomeForm = document.querySelector('#nome')
    const categoriaForm = document.querySelector('#categoria') 
    const preçoForm = document.querySelector('#preço')

    const nome = nomeForm.value.toUpperCase()
    const categoria = categoriaForm.value
    const preço = parseFloat(preçoForm.value).toFixed(2) 
    

    if(nomeForm.value.length==0||categoriaForm.value.length==0||preçoForm.value.length==0){
        alert('Preencha todos os campos abaixo!')
    }else{
        const novo = new Alimentos(nome,categoria,preço)
        novo.InserindoItens()
    }
})