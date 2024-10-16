//Funções dentro de funções


/* let soma1 = (...valores) => {//com spread, faz com que fiquem em uma array
    
    let soma2 = (valores) => {
        contSoma = 0
        for(v of valores){ //"v" é o valor de cada elemento, por conta do "for of"
            contSoma+=v
        }
        return contSoma
    }
    
    return soma2(valores)
}

console.log(soma1(10,5,15)) */

//Funções separadas, porém utilizando dados entre si

let calculo = (valores)=>{
    soma=0
    for(v of valores){
        soma+=v
    }
    return soma
}

let calculo2 = (...valores)=>{
    return calculo(valores)
}

console.log(calculo2(10,5,15))
