const btn_adicionar = document.querySelector('#btn-adicionar')
const resultados = document.querySelector('#resultados')
const nome = document.querySelector('#nome')
const cpf = document.querySelector('#cpf')
const inscricao = document.querySelector('#inscricao')
const tipo = document.querySelector('#tipo')
const curso = document.querySelector('#curso')
const valorCorreto = document.querySelector('#valorCorreto')
const valorErrado = document.querySelector('#valorErrado')
const consultor = document.querySelector('#consultor')
const problema = document.querySelector('#problema')


class Crp{
    constructor(pnome,pcpf,pinscricao,ptipo,pcurso,pvalorCorreto,pvalorErrado,pconsultor,pproblema){
        this.nome=pnome
        this.cpf=pcpf
        this.inscricao=pinscricao
        this.tipo=ptipo
        this.curso=pcurso
        this.valorCorreto=pvalorCorreto
        this.valorErrado=pvalorErrado
        this.consultor=pconsultor
        this.problema=pproblema
    }

    texto(){
        this.novaDiv = document.createElement('div')
        this.novaDiv.innerHTML = `${this.nome} - CPF: ${this.cpf} - Inscrição: ${this.inscricao} <br>`
        this.novaDiv.innerHTML += `<br>Prezados, fizemos a inscrição da candidata ${this.nome} - CPF: ${this.cpf} - inscrição n°: ${this.inscricao}. Conforme as condições da Black November, o curso de ${this.curso} deveria ter um valor de ${this.valorCorreto},00, mas a campanha foi fechada antes do prometido, portanto várias inscrições não puderam ser finalizadas devido a isso, já que seus descontos foram retirados. Conforme o consultor Éder da regional de SP, estamos encaminhando este CRP para fins de regularização. `
        resultados.appendChild(this.novaDiv)
    }
}

btn_adicionar.addEventListener('click',()=>{
    const pessoa = new Crp(nome.value,cpf.value,inscricao.value,tipo.value,curso.value,valorCorreto.value,valorErrado.value,consultor.value,problema.value)

    pessoa.texto()
})



