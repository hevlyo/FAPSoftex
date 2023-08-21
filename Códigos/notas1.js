const readline = require('readline-sync');

const nota1 = readline.questionFloat('Digite a primeira nota: ');
const nota2 = readline.questionFloat('Digite a segunda nota: ');
const nota3 = readline.questionFloat('Digite a terceira nota: ');

const media = (nota1 + nota2 + nota3) / 3;

const situacao = media >= 7 ? 'Aprovado' : 'Reprovado';

console.log(`Situação do aluno: ${situacao}`);
