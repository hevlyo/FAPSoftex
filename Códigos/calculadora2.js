const readline = require('readline-sync');

function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            const resultado =
            {divisao: num1 / num2,
            sobra: num1 % num2};
            return resultado;
        default:
            return 0;
    }
}

const num1 = readline.questionFloat('Insira o primeiro número: ');
const num2 = readline.questionFloat('Insira o segundo número: ');
const operacao = readline.question('Escolha um operador (+, -, *, /): ');

console.log(`O resultado da operação é: `);
console.log(calculadora(num1, num2, operacao));
