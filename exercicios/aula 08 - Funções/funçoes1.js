/* 

Funções

function NomeDaAção(parâmetro formal){
    Ação
    return (resposta dessa ação)
}

console.log(NomeDaAção(parâmetro real)) --- chamada

*/

function parimpar(n){
    if(n%2 == 0){
        return 'Par'
    } else{
        return 'Ímpar'
    }
}
console.log(parimpar(5))