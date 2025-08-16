const  prompt = require('prompt-sync')(); // adiciona pacote para entrada de dados
const pesoKg = Number(prompt("Peso da Ração (kg): "));
const consumo = Number(prompt("Consumo diário (gr): "));
const pesoGr = pesoKg * 1000; // variável auxiliar para converter kg em gramas

const duracao = Math.floor(pesoGr / consumo); // calcula a duração em dias
const sobra = pesoGr % consumo; // calcula o restante em gramas
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gramas`); // exibe a sobra