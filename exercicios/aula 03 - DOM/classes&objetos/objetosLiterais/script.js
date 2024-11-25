const btn = document.querySelector('#btn')

let Pessoa={
    nome,
    idade,

    setNome(nome){
        this.nome = nome
    },
    setIdade(idade){
        this.idade = idade
    }

}

const adicionandoElementos=()=>{
    const novaDiv = document.createElement('div')
    novaDiv.setAttribute('id','dados')
    novaDiv.innerHTML = `Nome: ${Pessoa.nome}</br> Idade: ${Pessoa.idade}`
    res.appendChild(novaDiv)
}


btn.addEventListener('click',()=>{
    const nome = document.querySelector('#nome')
    const idadeStr = document.querySelector('#idade')
    const idade = parseInt(idadeStr.value)
    const res = document.querySelector('#res')

    Pessoa.setNome(nome.value)
    Pessoa.setIdade(idade) 

    adicionandoElementos()

    nome.value= ''
    nome.focus()
    idadeStr.value= ''

})
