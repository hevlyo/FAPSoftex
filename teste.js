const readline = require('readline-sync');

function calculadora() {
    const operacao = (readline.questionInt('Escolha uma operação:\n 1 - Soma (+);\n 2 - Subtração (-);\n 3 - Multiplicação (*);\n 4 - Divisão Real (/);\n 5 - Divisão Inteira (%);\n 6 - Potenciação (**).\n'));

    if (!operacao || operacao >= 7 || operacao <= 0) {
        console.log('Erro - Operação inválida!\n');
        calculadora();
    } else {
        let n1 = (readline.questionFloat('Insira o primeiro número: \n'));
        let n2 = (readline.questionFloat('Insira o segundo número: \n'));
        let resultado;

        if (!n1 || !n2) {
            console.log('Erro - Parâmetros inválidos!\n');
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                console.log(`${n1} + ${n2} = ${resultado}.\n`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                console.log(`${n1} - ${n2} = ${resultado}.\n`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                console.log(`${n1} * ${n2} = ${resultado}.\n`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                console.log(`${n1} / ${n2} = ${resultado}.\n`);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                console.log(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}.\n`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                console.log(`${n1} elevado à ${n2} é igual à ${resultado}.\n`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = readline.questionInt('Deseja fazer outra operação?\n 1 - Sim;\n 2 - Não.\n');

                if (opcao === 1) {
                    calculadora();
                } else if (opcao === 2) {
                    console.log('Até mais!\n')
                } else {
                    console.log('Digite uma opção válida!\n')
                    novaOperacao();
                }
            }
        }

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}

calculadora();