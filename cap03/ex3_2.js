<<<<<<< HEAD
const prompt = require('prompt-sync')();
const veiculo = prompt("Veículo: ");
const preco = Number(prompt("Preço R$: "));
const entrada = preco * 0.5;
const parcela = (preco * 0.5) / 12;
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$: ${parcela.toFixed(2)}`);
=======
const prompt = require("prompt-sync")();
const veiculo = prompt("Veículo: ");
const preco = Number(prompt("Preço R$: "));

const entrada = preco * 0.5;
const parcela = entrada /12;

console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcela.toFixed(2)}`);
>>>>>>> eaed297800f7622e09970a686591d864b66dab6a
