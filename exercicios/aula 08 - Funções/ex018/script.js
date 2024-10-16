/* 
O que precisa ter nesse exercício

(Adicionar)
   - Precisa ter um valor
   - Esse valor não pode ser diferente de 0 e 100
   - Não pode haver números repetidos 
   - tudo o que cair em select será adicionado para a Array

(Finalizar)
Quantidade de números cadastrados
O maior valor 
O menor valor
Somando todos
A média

*/

var num = document.getElementById('num')
var n = Number(num.value)
var lista = document.querySelector('select#dados')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n){//Por qual motivo não é aceito num.value?
   if (Number(n) >=1 && Number(n) <=100){
      return true 
   }else{
      return false
   }
}

function inLista(n, valores){
   if(valores.indexOf(Number(n)) != -1){
      return true
   }else{
      return false
   }
}

function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){ //Dentro da função adicionar, por que é isNumero(num.value) e não é isNumero(n)?
   valores.push(Number(num.value)) //não pode ser var n (não sei o motivo)
   let itens = document.createElement('option')
   itens.text = `Valor ${num.value} adicionado.`
   lista.appendChild(itens)
   res.innerHTML = ''
  } else{
   window.alert(`Não é um número válido ou está repetido!`)
  }
  num.value = ''
  num.focus()
} 

function finalizar(){
   if(valores.length == 0){
      window.alert('Necessário que adicione valores!')
   }else{
      let tot = valores.length
      let maior = valores[0] //O primeiro número da matriz, pode ser maior ou menor, mas ele será o referencial
      let menor = valores[0]
      let soma = 0
      let media = 0

      for(let indice in valores){

         soma = soma + valores[indice]

         if (valores[indice] > maior){
            maior = valores[indice]
         }
         if (valores[indice] < menor){
            menor = valores[indice]
         }
      }

      media = soma/tot

      res.innerHTML = ''
      res.innerHTML += `<p>Ao todo, temos ${tot} elementos cadastrados;</p>`
      res.innerHTML += `<p>O maior valor é ${maior}</p>`
      res.innerHTML += `<p>E o menor valor é ${menor}</p>`
      res.innerHTML += `<p>A soma destes elementos é ${soma}</p>`
      res.innerHTML += `<p>A média é ${media}</p>`
   }
}


