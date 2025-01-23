/* Convertendo Json para objeto */

const exJson = `[
                    {"nome": "João", "idade": 25},
                    {"nome": "Maria", "idade": 30},
                    {"nome": "Pedro", "idade": 20}
                ]`

const arr = JSON.parse(exJson)

arr.forEach(el => {
    console.log(`Meu nome é ${el.nome} e tenho ${el.idade} anos!`)
});





