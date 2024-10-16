//Protótipo endsWith(). Verifica qual a última palavra de uma frase. 

const str = 'Estou estudando bastante!'
console.log(str.endsWith('bastante')) //false. Faltou "!"
console.log(str.endsWith('bastante!')) // verdadeiro
console.log(str.endsWith('estudando', 15)) //Até o caractere "15", estudando é a última palavra. True