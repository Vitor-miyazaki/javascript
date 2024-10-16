"use strict"

/* 
Matriz: 

let arr = ['texto', 3, true]
console.log(arr)
console.log(arr[0]) 

Não contém funções
Seus índices são fixos em números, não podemos colocar identificadores personalizados
ruim para projetos extensos
*/


//objeto --- {string:'texto, numero: 10, bolean: true, funções}

let amigo = {
nome: 'José', //precisa ter virgulas
peso: 85.4,  // Precisa ter ponto
engordar (p = 0){ // é uma função, porém não podemos utilizar 'function' na frente
    console.log('engordou')
    this.peso += p 
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)