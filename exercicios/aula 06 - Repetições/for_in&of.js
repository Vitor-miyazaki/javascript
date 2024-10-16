//repetição for - tradicional
let num = [23,31,4,53]
for (let i=0; i<num.length;i++){
    console.log(i)
}

//repetição "for in"
for (c in num){
    console.log(c) //c é o mesmo que contador 'i', simbolizando o índice de cada elemento
}

//repetição "for of"
for(v of num){
    console.log(v)  //v neste caso, são os valores de cada elemento
}