const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário R$: "));
const tempoEmpresa = Number(prompt("Tempo (anos): "));

const quadrienios = Math.floor(tempoEmpresa / 4);
const acrescimo = salario * quadrienios / 100;

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`);