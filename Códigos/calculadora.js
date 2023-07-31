const readline = require('readline-sync');

function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case 1:
            return num1 + num2;
        case 2:
            return num1 - num2;
        case 3:
            return num1 * num2;
        case 4:
            return num1 / num2;
        default:
            return 0;
    }
}

const num1 = readline.questionFloat('Insira o primeiro número: ');
const num2 = readline.questionFloat('Insira o segundo número: ');
const operacao = readline.questionInt('Insira o número da operacao: ');

console.log(calculadora(num1, num2, operacao));
