/* Utilizando Replacer */

/* Converta o objeto abaixo para string JSON, mas excluindo a propriedade de senha */

const pessoa = {
    nome: 'Carlos',
    idade: 35,
    senha: '123456',
    email: 'carlos@email.com'
}

const stringPessoa = JSON.stringify(pessoa, (chave,valor)=>{
    if(chave==="senha"){
        return undefined
    }else{
        return valor
    }
},2)

console.log(stringPessoa)