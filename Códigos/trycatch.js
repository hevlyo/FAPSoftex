const readline = require("readline-sync");

const num1 = readline.questionFloat("Informe o primeiro número:");
const num2 = readline.questionFloat("Informe o segundo número:");

try {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Por favor, insira números válidos.");
  }

  const resultado = num1 / num2;

  if (!isFinite(resultado)) {
    throw new Error("A divisão resultou em um valor não válido.");
  }

  console.log(`Resultado da divisão: ${resultado}`);
} catch (error) {
  console.error(`Erro: ${error.message}`);
} finally {
  console.log("Operação concluída.");
}
