/* 
5! = 5x4x3x2x1
5 x 4! 

n x (n-1)!
1! = 1

*/

//Recursividade

function fatorial(n){
    if(n == 1){
        return 1  //Só vai funcionar, se estiver com essa estrutura!
    }else{
        return n*fatorial(n-1)
    }
}
console.log(fatorial(5))