var idade = 25;
console.log(`Você tem ${idade} anos`);
if (idade < 16) {
    console.log('Você não vota');
} else if (idade < 18 || idade >= 65) {
        console.log('Voto é opcional')
    } else {
        console.log('Voto obrigatório')
    }
