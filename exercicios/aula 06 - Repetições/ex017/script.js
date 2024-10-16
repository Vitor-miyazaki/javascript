function clicar(){
    let num = document.getElementById('num').value
    let select = document.getElementById('tabuada')
    

    if(num.length == 0)
        window.alert('ERRO: Você precisa digítar um número!')

    else{
        let n = Number(num)
        //window.alert(`${n}`)
        select.innerText = ''
        for(c = 1; c <= 10; c++){
            let itens = document.createElement('option')
            itens.text = `${n} X ${c} = ${n*c}`
            select.appendChild(itens)
        }
    }
}