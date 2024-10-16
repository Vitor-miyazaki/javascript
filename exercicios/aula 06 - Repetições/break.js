/* 
estrutura de repetição
- var contador = 0
- teste lógico para que limite até onde será a contagem
- incremento (quanto será somado, após cada contagem)
- bloco (o que irá acontecer em cada contagem?)

*/

let c = 0 //c de contador
let max = 10


while(c < max){ //teste lógico
    console.log(`contador ${c}`) //bloco
    
    if (c == 6){
        break // Ou seja, estabeleci que quando o contador "c", alcance o valor c, ele deve parar com a operação de loop
    }
    
    c++ //incremento
}

