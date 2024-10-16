/* 
O que é? Para que serve uma função anônima? 

-É uma função que sem nome
-Para ações simples(único uso). Exemplo: situações do botão onclick
-Pode ser utilizado com addEventListener
-Ajuda na otimização do código = menos memória
*/

'use strict'

//EXEMPLO 1

const f = function(v1,v2){
    return v1+v2
}
console.log(f(5,2)) //Ou seja, utilizou-se o id da declaração, para chamar a função

//EXEMPLO 2

/* const botao = document.getElementById('botao')//não existe.Exemplo...

botao.addEventListener('click', function{}{
    alert('texto')
}) */