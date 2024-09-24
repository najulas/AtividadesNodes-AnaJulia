const prompt = require ('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Ana Julia Meira dos Santos";
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 16;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".");

let AnoAtual = 2025;
let Idade = 17;
const NomeCompleto = "Ana Julia Meira dos Santos";
const Faculdade = "Engenharia Civil";

console.log("Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos " +  "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);

console.log(`oi eu sou a ${nomeCompleto}, tenho ${idade} anos, nasci em ${anoNascimento}, e em ${AnoAtual} eu quero seguir na área de ${Faculdade}`);

const listaDeViagens = new Array(
  `Japão`,
  `Canadá`,
  `Estados Unidos`,
  `México`,
  `Rússia`
)

console.log(listaDeViagens);

console.log(listaDeViagens[4]);
listaDeViagens.push("Campo Mourão");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens);

var nomeComprador = entrada("Qual é o seu nome? ")
var idadeComprador = entrada("Qual é a sua idade? ");

if(idadeComprador < 18 ){
  
  console.log(`Olá ${nomeComprador}, não podemos prosseguir com a compra pois você tem ${idadeComprador} anos, é proibida a venda de passagens para menores de 18 anos.`)
}

if(idadeComprador >= 18){
   console.log("Compra realizada com sucesso. Os destinos disponíveis são: México, Estados Unidos e Canadá. Obrigada pela preferência.")
}