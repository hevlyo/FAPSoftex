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
            const divisao = num1 / num2;
            const sobra = num1 % num2;
            return {
                divisao: divisao.toFixed(2),
                sobra: sobra.toFixed(2)
            };
        default:
            return 0;
    }
}

const num1 = readline.questionFloat('Insira o primeiro número: ');
const num2 = readline.questionFloat('Insira o segundo número: ');
const operacao = readline.question('Escolha um operador (+, -, *, /): ');

console.log(`O resultado da operação é: `);
console.log(calculadora(num1, num2, operacao));
