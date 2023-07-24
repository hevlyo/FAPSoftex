const prompt = require('prompt-sync')();

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

const num1 = parseFloat(prompt('Insira o primeiro número: '));
const num2 = parseFloat(prompt('Insira o segundo número: '));
const operacao = parseInt(prompt('Insira o número da operacao: '));

console.log(calculadora(num1, num2, operacao));
