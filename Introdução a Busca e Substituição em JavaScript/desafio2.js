// Introdução a Busca e Substituição em JavaScript
// 2 / 5 - Encontre a maior substring

let dados = [];
let palavra = "";

do{
  palavra = gets();
  if(palavra !== ""){
    dados.push(palavra);
  }
}while(palavra !== "");

function verificarSubstring(palavra1, palavra2){
  let contador = [];
  for(let i=0; i<=palavra1.length; i++){
    for(let j=0; j<palavra1.length; j++){
      if(palavra2.includes(palavra1.substring(i,j))){
        contador.push(palavra1.substring(i,j).length);
      }
    }
  }
  
  return Math.max(...contador);
}

for(let i=0; i<dados.length; i+=2){
  console.log(verificarSubstring(dados[i], dados[(i+1)]));
}