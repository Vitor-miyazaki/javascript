"use strict"
/* 
let amigo = {
nome: 'José', //precisa ter virgulas
peso: 85.4,  // Precisa ter ponto
engordar (p = 0){ // é uma função, porém não podemos utilizar 'function' na frente
    console.log('engordou')
    this.peso += p 
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`) */


const Pessoa = {
    nome: 'Vitor',
    idade: 29,
         
    getNome: function(){
        return this.nome
    },

    setNome: function(nome){
        this.nome = nome
    }
}

const p2 = Pessoa //Aponta para o mesmo obj
const p3 = Pessoa //Aponta para o mesmo obj


//3 formas de alterar as propriedades do obj
p3.nome = 'Yuri'
p2['nome'] = 'Miyazaki'
Pessoa.setNome('Rossarolla')

//3 formas de chamar a propriedade do obj
console.log(Pessoa.nome) //Rossarolla
console.log(p2.getNome()) //Rossarolla
console.log(p3.nome) //Rossarolla


