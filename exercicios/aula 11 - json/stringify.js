/* Convertendo objeto em JSON */

const obj = {
    produto: 'notebook', preço: 3000, quantidade: 2
}

const objString = JSON.stringify(obj,null,2)
console.log(objString)

/* 

Replacer: Função ou array que filtra valores ou transforma, antes da conversão. 

space: Identação(espaço ou tabs no inicio das linhas de código) para melhorar a leitura. Normalmente é utilizado 2 e 4. 

*/