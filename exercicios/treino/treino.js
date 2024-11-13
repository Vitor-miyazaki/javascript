"use strict"

const inicio = document.querySelector('#inicio')
const fim = document.querySelector('#fim')
const passo = document.querySelector('#passo')
const btn_contar = document.querySelector('#btn_contar')
const txt = document.querySelector('.txt')

btn_contar.addEventListener('click', ()=>{
    

    if(inicio.value==''||fim.value==''|| passo.value==''){
        alert('Digite em todos os campos!')
    }else{
        const i = Number(inicio.value)
        const f = Number(fim.value)
        const p = Number(passo.value)

        txt.innerHTML = 'Resultado: '

        if(i<=f){
            for(let c=i; c<=f; c+=p){
                txt.innerHTML += `${c} \u{1F449}`
            }

        }else{
            for(let c=i; c>=f; c-=p){
                txt.innerHTML += `${c} \u{1F449}`
            }
            
        }
        
        txt.innerHTML += `FIM!`
    }
})
