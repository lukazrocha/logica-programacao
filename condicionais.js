console.log("=== CONDICIONAIS ===");

// entrada
const aluno = prompt("Digite o nome do aluno?");
const nota = prompt("Digite a nota (0-10)");
console.log(aluno, nota);

//processamento
let resultado = null;
/* EXEMPLO 01 - IF
if(nota >= 6){
    resultado = "Aprovado!";
}

if(nota < 6 && nota >= 4) {
    resultado = "Recuperação!";
}

if (nota < 4) {
    resultado = "Reprovado!";
}
*/

// EXEMPLO 02 - IF-ELSE (ENCADEADO)
/*
if (nota >= 6) {
    resultado = "Aprovado!";
} else {
    if (nota < 4) {
        resultado = "Reprovado!";
    } else {
        resultado = "Recuperação!";
    }
}*/


// EXEMPLO 03 - IF-ELSE-IF

if (nota >= 6) {
    resultado = "Aprovado!";
} else if (nota < 4) {
    resultado = "Reprovado!";
} else {
    resultado = "Recuperação!";
}


// EXEMPLO 04 - switch/case
/*
switch (nota) {
    case "1":
    case "2":
    case "3":
    case "4":
        resultado = "Reprovado!";
        break;

    default:
        break;
}
*/


//saída
document.write(`Aluno: ${aluno} <br>
Nota: ${nota} <br>
Situação: ${resultado}`);
