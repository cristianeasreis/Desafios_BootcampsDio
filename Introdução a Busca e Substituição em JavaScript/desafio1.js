// Introdução a Busca e Substituição em JavaScript
// 1 / 5 - Ordenação de palavras por tamanho

let casos = gets();
let palavras = [];

for(let i=0; i<casos; i++){
  palavras.push(gets().split(" "));
}

for(let i=0; i<casos; i++){
  palavras[i].sort((a, b) => {
    if(a.length > b.length){
      return 1;
    }
    else{
      if(a.length === b.length){
        if(a < b){
          return 1
        }
        else{
          return -1;
        }
      }
      else{
        return -1;
      }
    }
  }).reverse();
}

let aux = "";
for(let i=0; i<palavras.length; i++){
  let valor = "";
  for(let j=0; j<palavras[i].length; j++){
    if(j<=palavras[i].length-1){
      aux= " ";
    }
    else{
      aux="";
    }
    valor+=palavras[i][j] + aux;
  }
  console.log(valor);
}