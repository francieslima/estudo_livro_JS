const prompt = require("prompt-sync")(); // adiciona pacote para entrada de dados
const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const soma = num1 + num2;
console.log(`Soma é: ${soma}`); // exibe o resultado da soma