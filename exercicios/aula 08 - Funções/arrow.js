/* 
Arrow function 

serve para otimizar o código

Estrutura de uma função: 

function ação(paramentros){
    bloco de operações
    return respost
}
ação(valor inicial)
*/


//EXEMPLO 1:

const açao = (v1,v2) =>{ 
    
    let res = v1 + v2
    return res
}
console.log(açao(2,4))
//Ou seja, Criamos uma variável e o seu iD é o nome da ação. Removemos a palavra "function" e adicionamos =>. 

//EXEMPLO 2:
const nome = n => n 
console.log(nome('Vitor'))
//Como o parâmetro é apenas 1 valor, não a necesside de (). E como a resposta é muito simples, não há necessidade de {"return"}

//EXEMPLO 3:
const calc = x => 10*x
console.log(calc(5))
