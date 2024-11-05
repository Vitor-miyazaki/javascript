const btn = [...document.querySelectorAll('input.btn')] //Array de botões

const calculadora = [ //Array de funções
    (a,b)=>a+b,
    (a,b)=>a-b,
    (a,b)=>a*b,
    (a,b)=>a/b    
]

btn.map((el,i)=>{ //Para cada elemento e indice da array de botões, é associada a uma função da outra array
     
    el.addEventListener('click', ()=>{
        const resultado = document.querySelector('p.resultado')
        resultado.innerHTML = '<strong>Resultado: </strong>'

        const primeiroNumero = document.querySelector('input#primeiroNumero').value
        const segundoNumero = document.querySelector('input#segundoNumero').value

        if(primeiroNumero.length==0||segundoNumero.length==0){
            window.alert('Faltam dados para o cálculo!')
        }else{
            const calculo = calculadora[i](parseInt(primeiroNumero),parseInt(segundoNumero))
            resultado.innerHTML += calculo
        
        }
    })
})


/* 
Cada botão tem um click
Cada click, chama uma função
cada função, está dentro de uma array
quando executada, a função vai fazer um innerHTML

*/