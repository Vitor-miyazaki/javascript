/* Diferença entre váriavel simples e composta

simples = contém apenas 1 valor em cada variável
composta = pode conter vários valores

nomenclaturas = variavel composta/array/vetor

composição da variável composta:
identificação(id) = nome da variável composta. Exemplo: let "number"
elementos = é o conjunto de espaço da memória + conteúdo + índice. Exemplo [0,1,2] = Aqui contém 3 elementos
índice/chave = é a ordem de cada valor, a começar por 0
valor = são os conteúdos dentro da variável. Exemplo: valor 0, valor 1 e valor 2. 

estrutura do array: let number = [0,1,2,3,4]

*/

let num = [5,2,7,4,9,1]
console.log(num)
num.sort()
console.log(num)
num.push(8)
console.log(num)
console.log(num[3])
console.log(num.length)
/* for (let pos = 0; pos < num.length ; pos++){
    console.log(`O valor do elemento ${pos} é ${num[pos]}`)
} 
for(let pos in num){
    console.log(`O valor do elemento da posição ${pos} é ${num[pos]}`)
} // leia-se: Para cada índice dentro da variável num, vai aparecer na tela o valor do elemento para cada posição
*/

let pos = num.indexOf(2)
if (pos == -1){
    console.log(`Valor não encontrado`)
}else{
    console.log(`A posição do valor é a de número ${pos}`)
}