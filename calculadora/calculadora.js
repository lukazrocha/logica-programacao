console.log("=== CALCULADORA ===");

function calcular() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    const sum = num1 + num2;

    const resultado = document.getElementById('resultado');
    resultado.setAttribute('value', sum);
}