/* Personalização dos parâmetros das propriedades de cada objeto */

//Exemplo 1

class Pessoa{
    constructor(parametroNome){
        this.propriedadeNome = parametroNome
    }

    apresentacao(){
        console.log(`Olá, meu nome é: ${this.propriedadeNome}. Prazer te conhecer!`)
    }
}

const pessoa1 = new Pessoa('Vitor')
const pessoa2 = new Pessoa('Vitoria')
//pessoa1.apresentacao()
//pessoa2.apresentacao()

class Carro{
    constructor(marca, modelo, ano){
        this.pMarca = marca
        this.pModelo = modelo
        this.pAno = ano
    }

    apresentar(){
        console.log(`O carro é: 
            marca:${this.pMarca} 
            modelo:${this.pModelo}
            ano: ${this.pAno}`)
    }
}

let carro1 = new Carro('Toyota', 'Corolla', 2020)/* Toyota(marca), Corolla(modelo) 2020(ano) */
let carro2 = new Carro('Honda', 'Civic','2019')
carro1.apresentar()
carro2.apresentar()