
const btn_registrar = document.querySelector('#botao')
const resultado = document.querySelector('.resultado')
const dados = document.querySelector('.dados')
const vazio = document.querySelector('.vazio')
const total = document.querySelector('.total')

const Vazio=()=>{
    if(vazio.parentElement.children.length<=1){
        vazio.style.display = 'table-row';
    }else{
        vazio.style.display = 'none';
    }
}

/* const Total=(preço,unidade)=>{
    const res = unidade*preço
    total.innerHTML = res.toFixed(2)
} */

class Alimentos{
    constructor(nome,categoria,unidade,peso,preço){
        this.nome = nome
        this.categoria = categoria
        this.unidade = unidade
        this.peso = peso
        this.preço = preço  
    }

    InserindoItens(){
        const novaLinha = document.createElement('tr')
        dados.appendChild(novaLinha)

        const thNome = document.createElement('th')
        thNome.innerHTML = this.nome
        novaLinha.appendChild(thNome)

        const tdCategoria = document.createElement('td')
        tdCategoria.innerHTML = this.categoria
        novaLinha.appendChild(tdCategoria)

        const tdUnidade = document.createElement('td')
        tdUnidade.innerHTML = this.unidade
        novaLinha.appendChild(tdUnidade)

        const tdPeso = document.createElement('td')
        tdPeso.innerHTML = this.peso
        novaLinha.appendChild(tdPeso)

        const tdPreço = document.createElement('td')
        tdPreço.innerHTML = this.preço
        novaLinha.appendChild(tdPreço)

        const tdRemove = document.createElement('td')
        tdRemove.classList = 'lixeira'        
        const btn_lixeira = document.createElement('span')
        btn_lixeira.classList ='material-symbols-outlined'
        btn_lixeira.innerHTML = 'delete'
        tdRemove.appendChild(btn_lixeira)
        novaLinha.appendChild(tdRemove)

        btn_lixeira.addEventListener('click',()=>{
            if(confirm('Se continuar, o item será removido!')==true){
                btn_lixeira.parentElement.parentElement.remove()
            }

            Vazio()            
        })
    
    }
}

btn_registrar.addEventListener('click', ()=>{
    const nomeForm = document.querySelector('#nome')
    const categoriaForm = document.querySelector('#categoria') 
    const unidadeForm = document.querySelector('#unidade')
    const pesoForm = document.querySelector('#peso')
    const preçoForm = document.querySelector('#preço')

    const nome = nomeForm.value.toUpperCase()
    const categoria = categoriaForm.value
    const unidade = parseInt(unidadeForm.value)
    const peso = parseFloat(pesoForm.value).toFixed(2)
    const preço = parseFloat(preçoForm.value).toFixed(2) 
    

    if(nomeForm.value.length==0||categoriaForm.value.length==0||preçoForm.value.length==0){
        alert('Preencha todos os campos abaixo!')
    }else{
        const novo = new Alimentos(nome,categoria,unidade,peso,preço)
        novo.InserindoItens()

        Vazio()
        
        nomeForm.value=''
        categoriaForm.value = ''
        unidadeForm.value = 1
        pesoForm.value = 0
        preçoForm.value = ''
    }
})