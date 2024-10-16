function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat = fat * c
    }
    return fat
}
console.log(fatorial(5))

/* 

Ou seja, calculo de 5! (fatorial) = 5x4x3x2x1

*/