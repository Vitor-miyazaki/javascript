class Pessoas{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}!`)
        console.log(`Tenho ${this.idade} anos.`)
    }
}

class Aluno extends Pessoas{
    constructor(nome,idade,nota){
    /*  this.nome = nome        Retirado, pois ambas as subclasses, possuem as mesmas propriedades, portanto é 
        this.idade = idade      adicionado na classe pai  */
        super(nome,idade)  /* Super só será usado, "quando o filho precisa utilizar o construtor" para adicionar sua própria propriedade. */
        this.nota = nota
    }
    apresentarAluno(){
        super.apresentar()
        console.log(`Tirei ${this.nota} pontos na prova.`)
    }

}

class Professor extends Pessoas{
    constructor(nome,idade,materia){
    /*  this.nome = nome        Retirado, pois ambas as subclasses, possuem as mesmas propriedades, portanto é 
        this.idade = idade      adicionado na classe pai  */
        super(nome,idade)
        this.materia = materia
    }

    apresentarProfessor(){
        super.apresentar()
        console.log(`Dou aula de ${this.materia}.`)

    }

}

const aluno1 = new Aluno('Vitor', 29, 6)
const professor1 = new Professor('Bruno', 45, 'programação')

/* console.log(aluno1.nome)
console.log(aluno1.idade)
console.log(aluno1.nota)

console.log(professor1.nome)
console.log(professor1.idade)
console.log(professor1.materia) 

Isso está repetindo muito e poluindo o código, portanto podemos colocar como método e personalizar as informações. O que é repetido, será da classe pai. 
*/

aluno1.apresentarAluno()
console.log('-------')
professor1.apresentarProfessor()