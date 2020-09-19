// Introdução a Busca e Substituição em JavaScript
// 3 / 5 - Validador de senhas com requisitos

let senhas = [];
let palavra = "";

do{
  palavra = gets();
  if(palavra !== ""){
    senhas.push(palavra);
  }
}while(palavra !== "");

for(senha of senhas){
  let status = validarSenha(senha);
  console.log("Senha " + (status ? "valida." : "invalida."));
}

function validarSenha(senha){
  var expressao = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,32})$/;
  return expressao.test(senha);
}