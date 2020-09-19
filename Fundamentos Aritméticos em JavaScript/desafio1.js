//Fundamentos Aritméticos em JavaScript
//1 / 5 - Quantidade de Números Positivos

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseInt(gets());
let valor4 = parseFloat(gets());
let valor5 = parseFloat(gets());
let valor6 = parseFloat(gets());

let valores = [valor1,valor2,valor3,valor4,valor5,valor6];
let valoresPositivos = valores.filter(valor => valor > 0);
console.log(`${valoresPositivos.length} ` + "valores positivos");

