const prompt = require ('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Ana Julia Meira dos Santos";
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 16;

let AnoAtual = 2024;
let Idade = 16;
const NomeCompleto = "Ana Julia Meira dos Santos";
const Faculdade = "Engenharia";
console.log("Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos, " +  "estamos no ano de " + AnoAtual + " eu gostaria de fazer faculdade na área de " + Faculdade);

const listaDeViagens = new Array(
`Japão` ,
`México` ,
`Canadá` ,
`Estados Unidos` ,
  )

console.log(listaDeViagens);

console.log(listaDeViagens[3]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens);

const loginCerto = "Naju";
const senhaCerta = 12345;
console.log("");
console.log("                              🛫 AGÊNCIA DE VIAGENS 🛬");
console.log("");
console.log("Venha curtir suas férias conosco. Há mais de 40 anos transformando suas viagens em experiências inesquecíveis.");
console.log(" ");
console.log("Faça seu login");

var login = entrada("Usuário ou endereço de email:")
var senha = entrada("Bem vindo(a) novamente! Digite sua senha:")

while(login != loginCerto){
  console.log("Login Incorreto");
  login = entrada("Digite seu login novamente: ");
}

while(senha != senhaCerta){
  console.log(" Atenção! Senha incorreta!");
  senha = entrada("Digite sua senha novamente: ");
}

var nomeComprador = entrada("Qual é o seu nome? ");
var idadeComprador = entrada("Qual é a sua idade? ");

if (idadeComprador < 18) {

  console.log(`Olá ${nomeComprador}! Não vendemos passagens para menores de 18 anos, já que a sua idade é ${idadeComprador} anos não iremos prosseguir com a compra.`);
}

if (idadeComprador >= 18) {
console.log(`Bem vindo(a) ${nomeComprador}! Dê inicio a sua compra vericando os destinos disponiveís desta semana: Japão, México, Canadá e Estados Unidos`)
  }
