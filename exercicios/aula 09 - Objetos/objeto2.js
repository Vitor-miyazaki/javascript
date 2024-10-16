let v1 = {nome: 'Vitor'}
let v2 = {nome: 'Vitor'}

console.log(v1 == v2)
console.log(v1 === v2)

//São 2 objetos diferentes, mas que possuem as mesmas propriedades. São diferentes, pois ocupam espaços diferentes na memória.

let n1 = {str: 'morango'}
let n2 = n1

console.log(n1 === n2)

//Neste caso, ambas as declarações, apontam para o mesmo objeto, isto é, mesmo espaço. Por esse motivo são iguais em todos os aspectos.  