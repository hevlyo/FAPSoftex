## Instruções

Desenvolva, utilizando o Google Blockly, um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:
 
- Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

No sistema, todos os valores devem estar armazenados em variáveis.

# Resolução
## Algoritmo

![PT-BR](https://i.imgur.com/hd0gUOH.png)

- link de acesso: https://blockly-demo.appspot.com/static/demos/code/index.html?lang=pt-br#q3pmms


## Código em javascript:
```javascript
var nome, nota_01, nota_02, faltas, notaFinal;


nome = window.prompt('Insira seu nome: ');
nota_01 = Number(window.prompt('Insira sua primeira nota: '));
nota_02 = Number(window.prompt('Insira sua segunda nota: '));
faltas = Number(window.prompt('Insira a quantidade total de faltas: '));
notaFinal = (nota_01 + nota_02) / 2;
if (notaFinal < 7) {
  window.alert(nome);
  window.alert('VOCÊ FOI REPROVADO!');
} else if (faltas >= 3) {
  window.alert(nome);
  window.alert('VOCÊ FOI REPROVADO!');
} else {
  window.alert(nome);
  window.alert('VOCÊ FOI APROVADO!');
}
```
