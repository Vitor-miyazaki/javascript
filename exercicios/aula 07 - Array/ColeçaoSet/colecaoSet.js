//Não é uma array, mas é parecido. Não permite valores duplicados em uma coleção!

let times = new Set(['santos','são paulo', 'palmeiras', 'corinthians'])
times.add('flamengo')
console.log(times)

let buscarTime = 'fluminense'
if(times.has(buscarTime)){
    console.log(`O time "${buscarTime}" existe nessa coleção!`)
}else{
    console.log(`O time "${buscarTime}" não existe nessa coleção!`)
}

times.clear()

times.forEach(el=>console.log(el))