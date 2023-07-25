## Instruções

Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
+ 1: Soma
+ 2: Subtração
+ 3: Multiplicação
+ 4: Divisão
+ 0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

# Resolução
## Algoritmo

![PT-BR](https://i.imgur.com/twmgKAw.png)

- link de acesso: https://blockly-demo.appspot.com/static/demos/code/index.html?lang=pt-br#3sdbcf


## Código em javascript:
```javascript
var opcao, num1, num2;


while (true) {
  window.alert('Escolha uma das opções subsequentes:');
  window.alert('1: Soma');
  window.alert('2: Subtração');
  window.alert('3: Multiplicação');
  window.alert('4: Divisão');
  window.alert('0: Sair');
  opcao = Number(window.prompt('Insira a opção escolhida: '));
  if (opcao < 0 || opcao > 4) {
    window.alert('Essa opção não existe');
  } else {
    if (opcao == 0) {
      break;
    }
    num1 = Number(window.prompt('Insira o primeiro número: '));
    num2 = Number(window.prompt('Insira o segundo número: '));
    if (opcao == 1) {
      window.alert('A soma dos números é: ' + String(num1 + num2));
    } else if (opcao == 2) {
      window.alert('A subtração dos números é: ' + String(num1 - num2));
    } else if (opcao == 3) {
      window.alert('A multiplicação dos números é: ' + String(num1 * num2));
    } else if (opcao == 4) {
      window.alert('A divisão dos números é: ' + String(num1 / num2));
    }
  }
}
```
