
console.log('Vai começar...')
for (var c = 1; c <= 5; c++){
    console.log(c)
}
console.log('FIM!')


let contadorPar = 0
let contadorImp = 0
for(let c=1; c<=20;c++){
    if(c%2 != 0){   //tem resto? Se sim, então o contadorPar++ será pulado e a ação começará novamente
        contadorImp++
    }else{
        contadorPar++
    }
   
}

console.log(contadorPar)
console.log(contadorImp)
