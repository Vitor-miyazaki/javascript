/* O oposto do método every. Percorre todos os valores de array e confere se "PELO MENOS UM" dos elementos, estão dentro da condição estabelecida por você. Se 'TODOS' não forem atendidos, então a resposta será 'false'. 
  */

const num = [25,10,49,19,16,18,65]

/* const res1 = num.some((el,i)=>{
   if(el<18){
        console.log(`O elemento ${el} foi encontrado na posição ${i}`)
        return true
    }else{
        return false
    }
}) */


const res2 = num.some((el,i)=>{
    if(el>65){
        console.log(`O elemento ${el} foi encontrado na posição ${i}`)
        return true
    }
    else{
        return false
    }
 })

console.log(res2? '':'Valor não encontrado')