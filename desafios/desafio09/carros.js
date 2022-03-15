console.log("=== CARROS ===");
const carros = [];

function adicionar() {
    // modelo ano cor situacao
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");
    const carro = {
        'modelo': modelo.value,
        'ano': ano.value,
        'cor': cor.value,
        'situacao': situacao.value
    }

    carros.push(carro);
    console.table(carros);

    modelo.value = "";
    ano.value = "";
    cor.value = "#000000";
    situacao.value= "";

}
