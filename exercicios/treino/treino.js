class Pai {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}

Pai.prototype.apresentar = function(){
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}

class Aluno extends Pai{
    constructor(nome,idade,nota){
        super(nome,idade)
        this.nota = nota
    }
    
}

Aluno.prototype.resultado = function(){
    this.apresentar()
    console.log(`Fiquei com ${this.nota} pontos na prova!`)
}

class Professor extends Pai{
    constructor(nome,idade,materia){
        super(nome,idade)
        this.materia = materia
    }
}

Professor.prototype.aulas = function(){
    this.apresentar()
    console.log(`Dou aula de ${this.materia}.`)
}

const al1 = new Aluno('Vitor',29,7)
const pf1 = new Professor('Bruno', 45, 'programação')

console.log(al1)
console.log(pf1)





