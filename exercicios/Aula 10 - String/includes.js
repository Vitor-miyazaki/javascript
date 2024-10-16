//includes(), serve para detectar se determinada palavra está na frase

let txt = 'Eu sou um bixo do mato!'
let ex = 'animal'

console.log(txt.includes('mato') ? 'Existe mato':'Não existe mato')

console.log(`A palavra "${ex}" ${txt.includes(ex) ? 'está presente no texto' : 'não está presente no texto'}!`)

console.log(txt.includes(''))