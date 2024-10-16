let num = [5, 2, 9, 0, 7]
num.sort()
num.push(1)
console.log(num)
/* console.log(`O vetor tem ${num.length} posições`)
console.log(`O segundo valor do vetor é ${num[1]}`) 

 for(let pos=0; pos < num.length; pos++){
    console.log(`Elemento da posição ${pos} é ${num[pos]}`)
} 

for (let pos in num){
    console.log(`Elemento da posição ${pos} é ${num[pos]}`)
}
*/
let pos = num.indexOf(3)
if(pos == -1){
    console.log(`Valor não encontrado`)
} else{
    console.log(pos)
}
