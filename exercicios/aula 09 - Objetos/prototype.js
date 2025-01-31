/* 
- Uma forma de adicionar propriedades e métodos em um objeto construtor, herança. 
- Toda vez que você faz uma instância, pode escolher se irá utilizar esse método
- O método é criado uma única vez no protoype. As instâncias compartilham desse mesmo método. 
- Principal função: Ajudar no espaço da memória e facilitar na escalabilidade.
- As heranças de classes utilizam o prototype por de baixo dos panos, com um sistema menos flexível. Similar ao "for" e "iterador".
- Pode ser utilizado de maneira dinâmica(durante a execução do programa). 
*/



/* 
Exercício 01

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
p3.apresentar() */

/* Exercício 02 ---- HERANÇA */

function Veiculo(marca,modelo,ano){ //Construtor Pai ---> para propriedades
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

Veiculo.prototype.descricao = function(){ //1° protótipo do pai ---> para métodos 
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}.`)
}

Veiculo.prototype.velocidadeInicial = function(){ //2° protótipo do pai
    console.log(`A velocidade inicial é de 0 km/h`)
}

function Carro(marca,modelo,ano){ //Cronstrutor filho ---> para herdar propriedades do pai
    Veiculo.call(this,marca,modelo,ano)
    this.velocidade = 0  //Somente no filho, tem a propriedade de velocidade
}

Carro.prototype = Object.create(Veiculo.prototype) //Copiando os protótipos do pai, que são os métodos
Carro.prototype.constructor = Carro //Estou apontando que o protótipo de Carro é do próprio carro. Sem isso, o sistema pode apontar que o protótipo de carro, é o veículo(pai). Isso pode gerar alguns problemas de organização e depuração. 

//Quando você cria um objeto com "new", ele aponta para o local que o gerou (construtor). Se a instância aponta para Carro, então o local que o gerou também deve ser Carro. 

Carro.prototype.acelerar = function(){ //Criei um método exclusivo para o filho
    this.velocidade+=10
    console.log(`A velocidade atual é de ${this.velocidade} km/h`)
}

const c1 = new Carro('Fiat','Uno',2015)
c1.descricao()
c1.velocidadeInicial()
c1.acelerar()
c1.acelerar()