/* É como uma fábrica de objetos. Por meio dela, você define propriedades ou comportamentos dos objetos, que possuem características em comum. Isso faz um código mais limpo, organizado, com menos linha de códigos e mais facilidade em manusear em escala.

Estrutura (básica): 

Classe NomeClasse{
    - propriedades
    - métodos/funções/comportamentos
    
} 

const nomeObj = new NomeClasse ----> Instância ou novo objeto

Acesso: 
    - ambos podem ser acessados/operados pela instância/novo objetos ---> let novoObj = new NomeClasse()
    - Se for um método ou propriedade "estático", ou seja, da própria classe, não há necessidade da instância. 

*/

//Exemplo 1: 

class Carro{
    modelo = 'Sedan'

    imprimir(){
        console.log(`O modelo de carro escolhido para este objeto é ${this.modelo}`)
    }

}

const carro1 = new Carro();
//carro1.imprimir()

//Exemplo 2: 

class Matematica{
    static pi = 3.14159

    static operacao(a,b){
        return a+b
    }
}

//console.log(Matematica.pi)
//console.log(Matematica.operacao(2,3))

//Exemplo 3:

class Animal{
    animal ='cachorro'
    
    sons(){
        if(this.animal==='cachorro'){
            console.log('au au au!')
        }else if(this.animal==='gato'){
            console.log('miau!')
        }
    }
}

const animal_1 = new Animal()
animal_1.animal = 'gato'
animal_1.sons()

//Exemplo 4:

class Retangulo{
    altura = 4
    largura = 8 
    
    area(){
        return console.log(this.altura * this.largura)
    }
}

const obj1 = new Retangulo()
//obj1.area()