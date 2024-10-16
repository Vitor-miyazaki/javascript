// rest é parecido com spread, mas não são iguais

/* const num = [1,2,3,4,5,6,7]
const [first,second,...rest] = num
console.log(first)
console.log(second)
console.log(rest)   */



function animais(first, second, ...otherInfo) { 
    return otherInfo; //otherInfo = rest
  }

let res = animais("cachorro", "gato", "cavalo", "peixe", "rato")
console.log(res);


