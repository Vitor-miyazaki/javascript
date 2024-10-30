/* Método find percorre os valores dentro de uma array, e vai buscar apenas o primeiro elemento que satisfaça o teste lógico. Caso nenhum elemento satisfaça a condição, então a resposta será undefined. */


const num = [1,2,3,4]
const primRes = num.find((el,i)=>{
    if(el>2){
        console.log(`Elemento ${el} encontrado na posição ${i}`) 
        return true //Se o retorno for verdadeiro, então ele vai imprimir o "primeiro" resultado   
    }
})

const string = ['html', 'CSS', 'javaScript']
const segRes = string.find((el,i)=>{
    if(el.toUpperCase()=='HTML'){ //deixe todas as strings em maiúsculas
        console.log(`Elemento '${el}' encontrado na posição ${i}`) 
        return true    
    }
})