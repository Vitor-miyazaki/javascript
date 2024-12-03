const militar = document.querySelector('#militar')
const normal = document.querySelector('#normal')
const nomeF = document.querySelector('#nome')
const portasF = document.querySelector('#portas')
const corF = document.querySelector('#cor')
const blindagem = document.querySelector('#blindagem')
const municaoF = document.querySelector('#municao')


militar.addEventListener('click',()=>{
    if(militar.checked){
        nomeF.disabled = false
        portasF.disabled = false
        corF.disabled = true
        blindagem.disabled = false
        municaoF.disabled = false  
    }
})

normal.addEventListener('click',()=>{
    if(normal.checked){
        nomeF.disabled = false
        portasF.disabled = false
        corF.disabled = false
        blindagem.disabled = true
        municaoF.disabled = true  
    }
})












const btn_adicionar = document.querySelector('#btn-adicionar')

btn_adicionar.addEventListener('click', ()=>{

    const nomeF = document.querySelector('#nome').value
    const nome = nomeF.toLowerCase()

    const portasF = document.querySelector('#portas').value
    const portas = parseInt(portasF)

    const corF = document.querySelector('#cor').value
    const cor = corF.toLowerCase()

    const blindagem = document.querySelector('#blindagem').value

    const municaoF = document.querySelector('#municao').value
    const municao = parseInt(municaoF)

    

    
    
    class Carros {
        constructor(pnome,pportas){
            this.nome = pnome,
            this.portas = pportas
        }
    }
    
    class Militar extends Carros {
        constructor(pnome,pportas, pblindagem, pmunicao){
            super(pnome,pportas),
            this.blindagem = pblindagem,
            this.municao = pmunicao
        }
    }
    class Normal extends Carros {
        constructor(pnome,pportas, pcor){
            super(pnome,pportas)
            this.cor = pcor          
            
        }
    }
    
})