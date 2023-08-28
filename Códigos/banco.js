const readline = require('readline-sync');

class Banco {
    constructor(conta, saldo, tipo, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipo = tipo;
        this.agencia = agencia;
    }

    buscarConta() {
        console.log(`O número da conta é: ${this.conta}\n`);
    }

    buscarSaldo() {
        console.log(`Seu saldo: ${this.saldo}\n`);
    }

    deposito(deposito) {
        this.saldo += deposito;
    }

    saque(saque) {
        if (saque > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= saque;
        }
    }
}

console.log("Iniciando aplicação do Banco.");
const conta = readline.questionFloat("Insira a conta: ");
const saldo = readline.questionFloat("Insira o saldo: ");
const tipo = readline.question("Insira o tipo da conta: ");
const agencia = readline.questionFloat("Insira a agência: ");

const banco = new Banco(conta, saldo, tipo, agencia);
let sair = false;

do {
    const operacao = readline.questionInt("Digite o número da operação desejada:\n1 - Verificar o número da conta\n2 - Verificar o Saldo\n3 - Depósito\n4 - Saque\n5 - Para sair da aplicação\n");
    switch (operacao) {
        case 1:
            banco.buscarConta();
            break;
        case 2:
            banco.buscarSaldo();
            break;
        case 3:
            const valorDeposito = readline.questionFloat("Insira o valor que deseja depositar: ");
            banco.deposito(valorDeposito);
            break;
        case 4:
            const valorSaque = readline.questionFloat("Insira o valor que deseja sacar: ");
            banco.saque(valorSaque);
            break;
        case 5:
            console.log("Tchau.");
            sair = true;
            break;
        default:
            console.log("Opção inválida.");
    }
} while (!sair);
