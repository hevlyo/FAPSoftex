const readline = require('readline-sync');

function ehParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

numero = readline.questionInt("Digite um número: ");
console.log(`O número ${numero} é ${ehParOuImpar(numero)}`);