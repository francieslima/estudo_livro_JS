<<<<<<< HEAD
const  prompt = require('prompt-sync')(); // adiciona pacote para entrada de dados
const pesoKg = Number(prompt("Peso da Ração (kg): "));
const consumo = Number(prompt("Consumo diário (gr): "));
const pesoGr = pesoKg * 1000; // variável auxiliar para converter kg em gramas

const duracao = Math.floor(pesoGr / consumo); // calcula a duração em dias
const sobra = pesoGr % consumo; // calcula o restante em gramas
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gramas`); // exibe a sobra
=======
const prompt = require("prompt-sync")();

const pesoKg = Number(prompt("Peso da Ração (kg): "));
const consumo = Number(prompt("Consumo diário (gr): "));

const pesoGr = pesoKg * 1000;
const duracao = Math.floor(pesoGr / consumo);
const sobra = pesoGr % consumo;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);
>>>>>>> eaed297800f7622e09970a686591d864b66dab6a
