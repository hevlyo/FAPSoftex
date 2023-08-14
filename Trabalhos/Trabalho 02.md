## Instruções

Estamos rodeados por dados no nosso cotidiano e, nas aulas, aprendemos sobre os seus diversos tipos. Agora, vamos criar variáveis do tipo boolean, BigInt, string e symbol. No primeiro momento, após declará-las, precisamos exibir seus conteúdos, que devem ser UNDEFINED. Em seguida, vamos deixar essas variáveis com valores nulos e imprimir. Por fim, cada uma deve receber um dos tipos como atribuição e os seus respectivos valores devem ser impressos na tela. 

## Resolução

### Trecho de Código

```javascript
// Criando variáveis com valores UNDEFINED (sem atribuições)
let variavelBoolean;
let variavelBigIntVar;
let variavelStringVar;
let variavelSymbolVar;

console.log("Valores iniciais (UNDEFINED):");
console.log("Boolean:", variavelBoolean);
console.log("BigInt:", variavelBigIntVar);
console.log("String:", variavelStringVar);
console.log("Symbol:", variavelSymbolVar);

// Deixando as variáveis com valores nulos
variavelBoolean = null;
variavelBigIntVar = null;
variavelStringVar = null;
variavelSymbolVar = null;

console.log("\nValores após atribuição nula:");
console.log("Boolean:", variavelBoolean);
console.log("BigInt:", variavelBigIntVar);
console.log("String:", variavelStringVar);
console.log("Symbol:", variavelSymbolVar);

// Atribuindo valores de tipos diferentes
variavelBoolean = false;
variavelBigIntVar = BigInt(6666666666666666);
variavelStringVar = "Bom dia pessoa bonita";
variavelSymbolVar = Symbol("mySymbol");

console.log("\nValores após atribuição de tipos diferentes:");
console.log("Boolean:", variavelBoolean);
console.log("BigInt:", variavelBigIntVar);
console.log("String:", variavelStringVar);
console.log("Symbol:", variavelSymbolVar);
```

