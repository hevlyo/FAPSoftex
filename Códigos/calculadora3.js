const readline = require('readline-sync');

function saudacao() {
    console.log("Programa calculadora iniciado!");
}

function calcularOperacao(operador, num1, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Não é possível dividir por zero.';
            }
            return num1 / num2;
        default:
            return 'Operador inválido. Execute o programa novamente!';
    }
}

const exibirResultado = (resultado) => {
    console.log(`O resultado da operação é: ${resultado.toFixed(2)}`);
}

saudacao();

const num1 = readline.questionFloat('Insira o primeiro número: ');
const num2 = readline.questionFloat('Insira o segundo número: ');
const operador = readline.question('Escolha um operador (+, -, *, /): ');

exibirResultado(calcularOperacao(operador, num1, num2));
