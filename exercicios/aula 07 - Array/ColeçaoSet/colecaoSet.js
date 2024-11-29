//Não é uma array, mas é parecido. Não permite valores duplicados em uma coleção!

/* let times = new Set(['santos','são paulo', 'palmeiras', 'corinthians'])
times.add('flamengo')
console.log(times)

let buscarTime = 'fluminense'
if(times.has(buscarTime)){
    console.log(`O time "${buscarTime}" existe nessa coleção!`)
}else{
    console.log(`O time "${buscarTime}" não existe nessa coleção!`)
}

times.clear()

times.forEach(el=>console.log(el)) */


//exercício 2
/* const colecaoSet = new Set([1,2,3,4,5])

colecaoSet.add(6)
colecaoSet.add(3)
colecaoSet.delete(2)
console.log(colecaoSet.has(3)?'Tem':'Não tem')

colecaoSet.forEach(el=>console.log(el))
 */

//Exercício 3 - Criando um novo array, porém sem duplicidades

/* 
const arr = [1,2,2,3,4,4,5]
const novoArr = [...new Set(arr)]   
                                    
console.log(novoArr)               

/* 
    Somente new Set(arr) => {objeto da array} 
    Com [] fica => [Uma array {com um objeto}]
    Com ... fica => [Uma array, somente de números], ou seja, retira do obj 
*/


/* //Exercício 4 - Crie uma novo objeto Set, com base nos elementos repetidos das outras 2 coleções
const setA = new Set([1,2,3,4])
const setB = new Set([3,4,5,6])
const setC = new Set([...setA].filter(el=>setB.has(el)))

console.log(setC)

/* 
tranforma a coleção A de obj para array usando [...]
Coloco cada elemento da array A sobre um filtro
Comparo estes elementos, com o objB, através de has. 
Se a condição has for true, então o filter vai armazenar o elemento para a nova array 

*/


