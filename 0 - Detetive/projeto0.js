console.clear();
const prompt = require('prompt-sync')();

console.log('<<<<<--------------- JOGO DETETIVE --------------->>>>>');
nome = prompt('Qual o seu nome? ')
console.log('Você está sendo acusado de um crime. Terá que responder \nalgumas perguntas...');
console.log();

let perguntas = []
let perguntaUm = `01 - ${nome}, você frequenta o lugar do crime? [s/n]: `
let perguntaDois = `02 - ${nome}, você foi ao local, no dia do crime? [s/n]: `
let perguntaTres = `03 - ${nome}, você estava no no local, na hora do crime? [s/n]: `
let perguntaQuatro = `04 - ${nome}, você conhece estava com a vítima, na hora do crime? [s/n]: `
let perguntaCinco = `05 - ${nome}, você tinha algum atrito com a vítima? [s/n]: `
perguntas.push(perguntaUm, perguntaDois, perguntaTres, perguntaQuatro, perguntaCinco)

let respostas = []
let respostaSim = 0
for (i = 0; i < perguntas.length; i++) {
  console.log();
    while (true) {
      respostas[i] = prompt(perguntas[i]).toUpperCase();
      if (respostas[i] !== "S" && respostas[i] !== "N"){
        console.log("Resposta inválida! responda [S] ou [N].");
        console.log();
      }else if (respostas[i] == 'S'){
        console.log('A resposta foi: SIM.');
        respostaSim++
        break
      }else if (respostas[i] == 'N'){
        console.log('A resposta foi: NÃO.');
        break
      }
  }
}
console.log();
console.log('<<<-------------- FIM DO INTERROGATÓRIO ------------->>> ');
console.log()

if (respostaSim <= 2){
console.log('Você é inocente. Está liberado!');
}else if (respostaSim == 3){
  console.log('Você é suspeito, terá que dormir na delegacia.');
}else if (respostaSim >= 4){
  console.log('Culpado! Você está preso!');
}

console.log();
console.log('----------------------------------------------------');