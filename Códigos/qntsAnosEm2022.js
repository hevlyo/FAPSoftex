const prompt = require(`prompt-sync`)();

const nome = prompt(`Insira seu nome completo: `);
let anoNascimento = parseInt(prompt(`Insira seu ano de nascimento: `));

while(true) {
    try {
        if(anoNascimento == ``) throw `Está vazio`;
        if(isNaN(anoNascimento)) throw `Não é um número`;
        if(anoNascimento < 1922 || anoNascimento > 2021) throw `Ano de nascimento inválido`;
        break;
      }
      catch(err) {
        console.log(err);
      }
    anoNascimento = parseInt(prompt(`Insira seu ano de nascimento: `));
}

const idadeProxAno = -(anoNascimento - 2022);
console.log(`Seu nome é ${nome} e você completará ${idadeProxAno} anos em 2022.`);