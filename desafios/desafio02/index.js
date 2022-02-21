/*
function analisaFaixa() {
    const idade = parseInt(document.getElementById("idade").value);
    const faixa = document.getElementById("faixa");
    
    if (idade >= 21) {
        faixa.setAttribute("value", "voce é adulto");
    } else {
        faixa.setAttribute("value", "voce não é adulto");
    }
}
*/

function analisaFaixa() {
    const idade = parseInt(document.getElementById("idade").value);
    const faixa = document.getElementById("faixa");
    
    if (idade >= 65) {
        faixa.setAttribute("value", "voce é idoso");
    } else if(idade >=18){
        faixa.setAttribute("value", "voce é adulto");
    } else if(idade >=13){
        faixa.setAttribute("value", "voce é adolescente");
    } else {
        faixa.setAttribute("value", "voce é criança");
    }
}
