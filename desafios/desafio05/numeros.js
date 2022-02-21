let numero;
document.write("Números digitados: <br>");
while (true) {
    numero = prompt("Digite um número: ");
    if(numero == 0) {
        document.write(numero);
        break;
    }else {
        document.write(numero);
        document.write(" - ");
    }
}
