const num = [1,2,3,4]

const op = [
    (val)=>{
        let res = 0
        for(v of val){
            res+=v
        }
        return res
    },
    (val)=>val.reduce((acum, el)=>acum * el, 1),

    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
]

console.log(op[1](num))

/* 
Estrutura desse exercício:

const op = [
    ()=>{},
    ()=>,
    ()=>{} 
]

*/