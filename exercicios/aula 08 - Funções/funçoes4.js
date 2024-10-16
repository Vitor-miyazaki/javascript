function soma(n1=0,n2=0){
    return n1 + n2
}
console.log(soma(3))

/* 

Igual ao exercício anterior(funçoes3.js), na chamada só houve um único número, sendo que eram necessários 2.

Porém, diferente do que aconteceu anteriormente, houve uma resposta númerica. 

Ao definir em parâmetro formal que n1=0 e n2=0, estamos dizendo que: Se não houver um valor na chamada, então automáticamente, n1 ou n2 passarão a ser o número zero. 

Logo, a soma ficou: 3(n1) + 0(n2) = 3

*/