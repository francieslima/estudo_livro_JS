<<<<<<< HEAD
const prompt = require('prompt-sync')();
const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo de serviço (anos): "));
const quadrienios = Math.floor(tempo / 4);
const acrescimo = salario * quadrienios / 100;
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`); // exibe o salário final com os acréscimos
=======
const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário R$: "));
const tempoEmpresa = Number(prompt("Tempo (anos): "));

const quadrienios = Math.floor(tempoEmpresa / 4);
const acrescimo = salario * quadrienios / 100;

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`);
>>>>>>> eaed297800f7622e09970a686591d864b66dab6a
