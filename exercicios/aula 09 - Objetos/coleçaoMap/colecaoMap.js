//Tipo de objeto específico para cenários onde exija flexibilidade de chave e desempenho de buscas. 

let colecaoMap = new Map()

colecaoMap.set('chave','valor')
colecaoMap.set(1,100)
colecaoMap.set(2,'cursos')
colecaoMap.set('string', 50)
console.log(`Essa coleção tem ${colecaoMap.size} elementos.`)

colecaoMap.delete(2)

let chave = 2
if(colecaoMap.has(chave)){
    console.log(`A chave "${chave}" existe na coleção e o seu valor é ${colecaoMap.get(chave)}`)
}else{
    console.log(`A chave ${chave} não existe na coleção`)
}

colecaoMap.forEach((el,ch)=>{
    console.log(`${ch} => ${el}`)
    
})

colecaoMap.clear()
console.log(colecaoMap)
