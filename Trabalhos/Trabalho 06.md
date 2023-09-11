## Instruções

Luiza é desenvolvedora e estå trabalhando com dois arrays. O primeiro é
[23, 9, 4, 45] e o segundo é [7, 12]. Ela precisa dividir o primeiro em dois
arrays e cada array gerado deve ser concatenado com o segundo array.

1. Qual é o pacote que Luiza precisa utilizar?
2. Se for preciso instalar esse pacote, qual é o comando que deve ser
utilizado?
3. Qual é o comando para importar esse pacote?
4. Quais as funções utilizadas neste pacote?
5. Quais seräo os arrays resultantes dessa operação?

## Resolução

1. O pacote é o "lodash".
2. O comando para instalar é "npm install lodash".
3. O comando para importar é "const _ = require('lodash');".
4. As funções utilizadas são: 
chunk: Divide um array em pedaços menores
concat: Concatena arrays.
5. As arrays resultantes são:
Primeiro array resultante: [23, 9] (chunk do primeiro array)
Segundo array resultante: [4, 45] (chunk do primeiro array)
Terceiro array resultante: [7, 12] (segundo array original)
Quarto array resultante: [23, 9, 7, 12] (concatenação do primeiro array chunk com o segundo array original)
Quinto array resultante: [4, 45, 7, 12] (concatenação do segundo array chunk com o segundo array original)