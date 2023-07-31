## Instruções

Construa um algoritmo no Blockly que declare as seguintes variáveis: nome, idade, altura e maior_de_idade.

Depois, atribua valores para essas variáveis, sabendo que a variável nome é uma string, a variável idade é um inteiro, a variável altura é um float e a variável maior_de_idade é um booleano.

No final, imprima os valores das variáveis.

# Resolução
## Algoritmo

![PT-BR](https://i.imgur.com/q11sdvS.png)

- link de acesso: https://blockly-demo.appspot.com/static/demos/code/index.html?lang=pt-br#rds5do


## Código em javascript:
```javascript
var nome, idade, altura, maior_de_idade;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


nome = 'Riquelme';
idade = mathRandomInt(1, 100);
altura = 1.85;
if (idade >= 18) {
  maior_de_idade = true;
} else {
  maior_de_idade = false;
}
window.alert(nome);
window.alert(idade);
window.alert(altura);
window.alert(maior_de_idade);
```
