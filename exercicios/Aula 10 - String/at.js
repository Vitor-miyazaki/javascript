//Protótipo at(). Seleciona uma único carácter dentro de uma string, incluindo espaços e símbolos

console.log('Método at()')
let str1 = ' hello&'
console.log(str1.at(0))
console.log(str1.at(1))
console.log(str1.at(-1)) 
console.log(str1.at(999))//erro:"undefined"

//Protótipo chatAt(), faz basicamente a mesma coisa, porém não aceita valores negativos. 


console.log('Método charAt()')
let str2 = 'word %'
console.log(str2.charAt(0))
console.log(str2.charAt(1))
console.log(str2.charAt(-1)) //erro: Deixou espaço em branco, sem caracter
console.log(str2.charAt(str2.length - 1)) //corrigindo o problema de cima
console.log(str2.charAt(999))//erro: Deixou espaço em branco, sem caracter
