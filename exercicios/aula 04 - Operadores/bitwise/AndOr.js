//Operações com binários

/* 
Operadores:

& - e
| - ou
<< - deslocamento esquerdo (aumenta)
>> - deslocamento direito (diminui)

1 & 1 = 1
1 & 0 = 0
0 & 1 = 0
0 & 0 = 0

1 | 1 = 1
1 | 0 = 1
0 | 1 = 1
0 | 0 = 0


*/


let n1 = 10  // 00001010 bits
let n2 = 11 //  00001011 

let resE = n1 & n2
let resOu = n1 | n2 

console.log(resE)
console.log(resOu)

/* 
ResE:

1 & 1 = 1
0 & 0 = 0
1 & 1 = 1
0 & 1 = 0

Resposta: 1010 isso em binário é 10

ResOu: 

1 | 1 = 1
0 | 0 = 0
1 | 1 = 1
0 | 1 = 1

Resposta: 1011 isso em binário é 11


*/
