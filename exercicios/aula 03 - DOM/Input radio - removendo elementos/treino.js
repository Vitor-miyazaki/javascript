const lixeira = [...document.querySelectorAll('#lixeira')]
//console.log(lixeira)

lixeira.map(el=>{
    el.addEventListener('click', ()=>{
        if(el.previousElementSibling.children[0].checked == true){
            el.parentElement.remove()
        }else{
            window.alert('Este elemento não foi selecionado, portanto não pode ser removido!')
        }
    })
})

/*
Considerações:

1 - Para cada elemento da lixeira, é necessário o evento de click, portanto necessário um MAP para percorrer

2 - A ação tomada para cada click é de remover toda a div da caixa externa (parentElement)

3 - Mas ele só poderá remover, desde que o input do seu irmão, esteja com o checked == true

*/