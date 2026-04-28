let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let operacao = prompt("Escolha a operação: +  -  *  /");

let resultado = "";

switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;

    case "-":
        resultado = num1 - num2;
        break;

    case "*":
        resultado = num1 * num2;
        break;

    case "/":
        if (num2 === 0) {
            resultado = "Erro: divisão por zero não é permitida";
        } else {
            resultado = num1 / num2;
        }
        break;

    default:
        resultado = "Erro: operação inválida";
}

alert("Resultado: " + resultado);