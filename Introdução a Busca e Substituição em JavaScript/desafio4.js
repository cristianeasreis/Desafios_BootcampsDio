// Introdução a Busca e Substituição em JavaScript
// 4 / 5 - Pedra, Papel, Tesoura, Lagarto e Spock

let dados = ["spock spock", "tesoura spock", "lagarto spock"];
let regras = [
  [0,1,-1,-1,1],
  [-1,0,1,1,-1],
  [1,-1,0,1,-1],
  [1,-1,-1,0,1],
  [-1,1,1,-1,0]
];

let nome = ["empate","fernanda","marcia"];

let tipos = [
  {nome: 'papel', indice: 0},
  {nome: 'pedra', indice: 1},
  {nome: 'tesoura', indice: 2},
  {nome: 'lagarto', indice: 3},
  {nome: 'spock', indice: 4}
  ];


let casos = gets();
let escolhas = [];

for(let i=0; i<casos; i++){
  escolhas.push(gets().split(" "));
}

function verificarGanhador(jogoA, jogoB){
  let jogadorA = tipos.filter(dado => dado.nome === jogoA)[0].indice;
  let jogadorB = tipos.filter(dado => dado.nome === jogoB)[0].indice;
  let status = regras[jogadorA][jogadorB] === -1 ? 2 : regras[jogadorA][jogadorB];

  return nome[status];
}

for(escolha of escolhas){
  console.log(verificarGanhador(escolha[0],escolha[1]));
}