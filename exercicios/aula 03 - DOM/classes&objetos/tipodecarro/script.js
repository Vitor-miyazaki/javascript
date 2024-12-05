const militar = document.querySelector('#militar')
const normal = document.querySelector('#normal')
const nomeF = document.querySelector('#nome')
const portasF = document.querySelector('#portas')
const corF = document.querySelector('#cor')
const blindagemF = document.querySelector('#blindagem')
const municaoF = document.querySelector('#municao')
const btn_adicionar = document.querySelector('#btn-adicionar')
const divResultados = document.querySelector('#resultados')

//Habilitando formulários de acordo com o tipo
militar.addEventListener('click',()=>{
    if(militar.checked){
        corF.value = 'Verde'

        nomeF.disabled = false
        portasF.disabled = false
        corF.disabled = true
        blindagemF.disabled = false
        municaoF.disabled = false  
    }
})

normal.addEventListener('click',()=>{
    if(normal.checked){
        municaoF.value=0

        nomeF.disabled = false
        portasF.disabled = false
        corF.disabled = false
        blindagemF.disabled = true
        municaoF.disabled = true  
    }

})

//Casses pai e filhas e seus métodos para adição de div's
class Carros {
    constructor(pnome,pportas){
        this.nome = pnome,
        this.portas = pportas
    }

    novaDiv(){
        this.divCarro = document.createElement('div')
        this.divCarro.innerHTML =  `<strong>Nome do carro:</strong> ${this.nome}<br>
                                    <strong>Portas:</strong> ${this.portas}<br>`
        divResultados.appendChild(this.divCarro)
    }
}

class Militar extends Carros {
    constructor(pnome,pportas, pblindagem, pmunicao){
        super(pnome,pportas),
        this.blindagem = pblindagem,
        this.municao = pmunicao
    }

    novoMilitar(){
    super.novaDiv()
    this.divCarro.innerHTML += `<strong>Tipo:</strong> Militar<br> 
                                <strong>Cor:</strong> Verde <br>
                                <strong>Blindagem:</strong> ${this.blindagem} <br>
                                <strong>Munição:</strong> ${this.municao} `
    }
}
class Normal extends Carros {
    constructor(pnome,pportas, pcor){
        super(pnome,pportas)
        this.cor = pcor          
    }
    novoNormal(){
        super.novaDiv()
        this.divCarro.innerHTML += `<strong>Tipo:</strong> Normal<br>  
                                    <strong>Cor:</strong> ${this.cor} <br>
                                    <strong>Blindagem:</strong> Não há <br> 
                                    <strong>Munição:</strong> Não há`
    }
}


//Criando as instâncias através do Dom
btn_adicionar.addEventListener('click', ()=>{

    const nomeValor = nomeF.value
    const nome = nomeValor.toUpperCase()

    const portasValor = portasF.value
    const portas = parseInt(portasValor)

    const corValor = corF.value
    const cor = corValor.toLowerCase()

    const blindagem = blindagemF.value

    const municaoValor = municaoF.value
    const municao = parseInt(municaoValor) 

    if(militar.checked){
        if(nome.length==0){
            alert('digite um nome')
        }else{
            const novoCarroMilitar = new Militar(nome,portas,blindagem,municao)
            novoCarroMilitar.novoMilitar()
        }
    }
        

    if(normal.checked){
        if(nome.length==0||cor.length==0){
            alert('Defina o nome e a cor do seu veículo')
        }else{
        const novoCarroNormal = new Normal(nome,portas,cor)
        novoCarroNormal.novoNormal()
        }
    } 

    nomeF.value=''
    corF.value=''
    nomeF.focus()
})



/* 
1 - Criar as váriaveis principais
2 - Determinar os campos de preenchimento de acordo com o tipo do carro selecionado
3 - Definir o que cada classe deve produzir
4 - Propriedades e métodos repetidos, serão enviadas para uma classe pai
5 - Definindo os dados dos formulários, que passarão as ser parâmetros das instâncias conforme o btn de adicionar
6 - Detalhar: alertas, apagar dados depois do clique.... 
*/
