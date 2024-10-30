//Percorre todos os valores de array e confere se 'TODOS' os elementos, estão dentro da condição estabelecida por você. Se 'UM' não for atendido, então a resposta será 'false'. 

const num = [25,10,49,19,16,18,65]

/* const resultado = num.every((el,i)=>{
    el>18
}) 
    
console.log(resultado)
*/


const resultado = num.every((el,i)=>{
    if(el>18){
        return true
    }else{
        console.log(`O elemento da posição ${i} não está dentro das condições estabelecidas`) // Neste caso, a resposta veio do primeiro valor que não cumpriu a regra. 
        return false
    }
})
