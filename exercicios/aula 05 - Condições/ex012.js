var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são ${hora}h!`);
if (hora == 24 || hora < 5){
    console.log('Boa madrugada!!')
} else if (hora < 12) {
    console.log('Bom dia!!');
} else if (hora < 18){
    console.log('Boa tarde!!');
} else if (hora < 24) {
    console.log('Boa noite!!');
}