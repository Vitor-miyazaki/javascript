//O método map() serve para percorrer os valores individuais de cada elemento da array

//exemplo 1: Utilizando 2 parâmetros de map()

const str = ['gato','cachorro','rato','macaco','coruja']
let exemplo = str.map((valor,indice,repeticao)=>repeticao)
console.log(exemplo)

/* Ou seja, map pode mostrar 3 tipos de informações! Essas informações dependem da ordem:
1° - valor
2° indice
3° repetição da array de acordo com a quantidade de elementos
 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/

let arr = [3,6,4,8,1,9,0]

/*  let doubleNumbers = arr.map(function anonima(valores){
    return valores*2
})

console.log(doubleNumbers) 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


//Reduzindo linhas do código anterior 1

/* let doubleNumbers = arr.map(function (valores){
    return valores*2
})
console.log(doubleNumbers) 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


//Reduzindo linhas do código anterior 2

/* let doubleNumbers = arr.map(valores => valores*2)

console.log(doubleNumbers) 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


//exemplo 3: converção de celsius para fahren....

/* let celsius = [0,32,45,50,75,80,120,10]

let tf = celsius.map(c=>(c*1.8)+32)

console.log(tf) 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


