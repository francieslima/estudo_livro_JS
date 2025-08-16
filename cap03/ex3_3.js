const prompt = require('prompt-sync')();
const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo de serviço (anos): "));
const quadrienios = Math.floor(tempo / 4);
const acrescimo = salario * quadrienios / 100;
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`); // exibe o salário final com os acréscimos