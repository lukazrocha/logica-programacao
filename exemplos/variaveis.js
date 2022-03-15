console.log("=== VARIÁVEIS ===");

// Javascript => Tipagem Dinâmica
var nome = "Lukaz"; // string
console.log("Nome", nome, typeof nome);

let idade = 26; // number
console.log("Idade", idade, typeof idade);

let altura = 1.69; // number
console.log("Altura", altura, typeof altura);

const magro = true; // boolean
console.log("Magro", magro, typeof magro);

var nula = null; // null (object)
console.log("Nula", nula, typeof nula);

var indefinida; // undefined 
console.log("Indefinida", indefinida, typeof indefinida);


// Diferenças entre VAR, LET e CONST
// VAR -> redeclaração de variável (permite)
var nome = 1;
console.log("Nome", nome, typeof nome);

// VAR -> reatribuição de valor (permite)
nome = false;
console.log("Nome", nome, typeof nome);

// LET -> redeclaração de variável (não permite)
//let idade = 25; SyntaxError (variable has been already declared )

// LET -> reatribuição de valor (permite)
idade = 25;
console.log("Idade", idade, typeof idade);

// CONST - redeclaração de variável (não permite)
//const magro = false;

// CONST - reatribuição de valor (não permite)
//magro = false; // TypeError

