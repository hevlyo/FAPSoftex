const readline = require('readline-sync');

const nota1 = readline.questionFloat('Digite a primeira nota: ');
const nota2 = readline.questionFloat('Digite a segunda nota: ');

const media = (nota1 + nota2) / 2;

const notaMinima = 7 * 2 - nota1 - nota2;

console.log(`Nota mínima necessária na próxima prova: ${notaMinima}`);
