let preco = Number(prompt("Digite o preço do produto:"));

let opcao = Number(prompt(
    "Escolha a forma de pagamento:\n" +
    "1 - À vista (Pix/Dinheiro) - 10% desconto\n" +
    "2 - À vista no cartão - 5% desconto\n" +
    "3 - 2x no cartão (sem juros)\n" +
    "4 - 3x ou mais no cartão (10% juros)"
));

let valorFinal = 0;

switch (opcao) {

    case 1:
        valorFinal = preco - (preco * 0.10);
        break;

    case 2:
        valorFinal = preco - (preco * 0.05);
        break;

    case 3:
        valorFinal = preco;
        break;

    case 4:
        valorFinal = preco + (preco * 0.10);
        break;

    default:
        valorFinal = "Opção inválida";
}

alert("Valor final: " + valorFinal);