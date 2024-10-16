//Mesclando e clonando objetos


const obj1 = {a:1, b:2}
const obj2 = {b:3, c:4}
const obj3 = {...obj2,...obj1}

console.log(obj3)


//obs: necessário tomar cuidado com a ordem dos objetos. O últimos objeto declarado, terá prioridade ao anterior quando houver parametros iguais. No caso b:2 foi priorizado ao invés de b:3. 