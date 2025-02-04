/* 
Existe 3 conceitor de polimofismo: override(sobreescrita), overloading(sobrecarga), duck Typing(Interface)

Override -> Para herança de classes ou herança de prototypes. Classe filho utiliza o mesmo método da classe pai, porém com ações/comportamentos diferentes, ou seja, ela sobreescreve o método do pai.

Overloading --> Javascript não possui nativamente a possibilidade de sobrecarga, porém podemos simular com parâmetros opcionais. Basicamente é o uso de uma mesma função, mas com quantidade e tipos de propriedades diferentes.

Duck Typing --> Funções/objetos diferentes, mas que compartilham o mesmo nome de método.

 */

/* Override (sobreescrita) */

/* class Animal{
    falar(){
        console.log('Não há som definido!')
    }
}

class Cachorro extends Animal{
    
    falar(){
        console.log('au au au')
    }
    
}

class Gato extends Animal{

    falar(){
        console.log('Miau!')
    }
}

const cachorro = new Cachorro()
cachorro.falar()

const gato = new Gato()
gato.falar() */


/* class Produto{
    constructor(preço){
        this.preço = preço
    }
    CalcularPreçoFinal(){
        return console.log(`Preço do produto: R$ ${this.preço},00.`)
    }
}

class Eletronico extends Produto{
   
    CalcularPreçoFinal(){
        console.log(`Preço do produto: R$ ${this.preço*0.9},00.`)
    }

}

const notebook = new Eletronico(1000)
notebook.CalcularPreçoFinal() */