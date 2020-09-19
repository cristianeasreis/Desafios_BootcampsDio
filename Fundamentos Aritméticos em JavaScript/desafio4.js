// Fundamentos Aritméticos em JavaScript
// 4 / 5 - Contagem de Cédulas

let notaEntrada = parseInt(gets());
let resto, cem, cinquenta, vinte, dez, cinco, dois, um;

console.log(notaEntrada);

N = 100 * notaEntrada;

resto = N;

cem = resto / 10000;
resto = resto % 10000;
console.log(Math.floor(cem) + " nota(s) de R$ 100,00");

cinquenta = resto / 5000;
resto = resto % 5000;
console.log(Math.floor(cinquenta) + " nota(s) de R$ 50,00");

vinte = resto / 2000;
resto = resto % 2000;
console.log(Math.floor(vinte) + " nota(s) de R$ 20,00");

dez = resto / 1000;
resto = resto % 1000;
console.log(Math.floor(dez) + " nota(s) de R$ 10,00");

cinco = resto / 500;
resto = resto % 500;
console.log(Math.floor(cinco) + " nota(s) de R$ 5,00");

dois = resto / 200;
resto = resto % 200;
console.log(Math.floor(dois) + " nota(s) de R$ 2,00");

um = resto / 100;
resto = resto % 100;
console.log(Math.floor(um) + " nota(s) de R$ 1,00");