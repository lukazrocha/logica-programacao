console.log("=== FUNCOES ===");

// Declaração de Função Nomeada
function soma(a=0, b=0) { // DEFAULT PARAMETER
    return a + b;
}

// NaN => Not a Number
console.log( soma ); // REF. FUNC
console.log(soma()); // 0
console.log(soma(5)); // 5
console.log(soma(5,10)); // 15


// Declaração de Função Anônima
const sum = function (a=0, b=0) {
    return a + b;
}

console.log(sum); // Ref. Func
console.log(sum()); // 0
console.log(sum(5)); // 5
console.log(sum(5, 10)); // 15

