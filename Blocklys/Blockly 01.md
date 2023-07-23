![EN](./Assets/Blockly_01_EN.png)
![PT-BR](./Assets/Blockly_01_PT-BR.png)

link de acesso: https://blockly-demo.appspot.com/static/demos/code/index.html?lang=pt-br#di5ygw

```javascript
var Nota_01, Nota_02, Nota_Final;


Nota_01 = Number(window.prompt('Insira a primeira nota: '));
Nota_02 = Number(window.prompt('Insira a segunda nota: '));
Nota_Final = (Nota_01 + Nota_02) / 2;
if (Nota_Final >= 7) {
  window.alert('APROVADO');
} else {
  window.alert('REPROVADO');
}
```