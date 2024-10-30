//Reduz os elementos de uma array, em um único valor. Existe uma propriedade adicional de valor acumuldado explicada abaixo. 

const num = [1,2,3,4]

const res = num.reduce((acum,elem,ind)=>{
    return acum + elem
},10) //Este é o valor acumulado inicial, ou seja, antes de somar com os elementos da array, esse é o valor de partida. 

console.log(res)