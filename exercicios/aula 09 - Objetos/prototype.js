/* 
- Uma forma de adicionar propriedades e métodos em um objeto construtor, herança. 
- Toda vez que você faz uma instância, pode escolher se irá utilizar esse método
- O método é criado uma única vez no protoype. As instâncias compartilham desse mesmo método. 
- Principal função: Ajudar no espaço da memória e facilitar na escalabilidade.
- As heranças de classes utilizam o prototype por de baixo dos panos, com um sistema menos flexível. Similar ao "for" e "iterador".
- Pode ser utilizado de maneira dinâmica(durante a execução do programa). 
*/

function Pessoa(nome,idade,cidade){
    this.nome = nome
    this.idade = idade
    this.cidade = cidade   
}

Pessoa.prototype.apresentar = function(){
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou da cidade de ${this.cidade}.`)
}

Pessoa.prototype.aniversario = function(){
    this.idade++
    console.log(`Parabéns ${this.nome}, agora você tem ${this.idade} anos!`)
}

const p1 = new Pessoa('Vitor',29,'Atibaia')
const p2 = new Pessoa('Vitoria',28,'Osasco')
const p3 = new Pessoa('Maria',65,'Mariano Moro')

p1.apresentar()
p1.aniversario()
p1.apresentar()

console.log('----')

p2.apresentar()
p3.apresentar()

