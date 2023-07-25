const prompt = require('prompt-sync')();

const nome = prompt('Insira seu nome completo: ');
let anoNascimento = parseInt(prompt('Insira seu ano de nascimento: '));

while (anoNascimento < 1922 || anoNascimento > 2021) {
    anoNascimento = parseInt(prompt('Insira seu ano de nascimento: '));
}

const idadeProxAno = -(anoNascimento - 2022);

console.log(`Seu nome é ${nome} e você completará ${idadeProxAno} anos em 2022.`);