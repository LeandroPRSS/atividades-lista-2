let numero = prompt("Digite um número de 1 a 7:");
numero = Number(numero);

let mensagem = "";

switch (numero) {
    case 1:
        mensagem = "Domingo";
        break;

    case 2:
        mensagem = "Segunda-feira";
        break;

    case 3:
        mensagem = "Terça-feira";
        break;

    case 4:
        mensagem = "Quarta-feira";
        break;

    case 5:
        mensagem = "Quinta-feira";
        break;

    case 6:
        mensagem = "Sexta-feira";
        break;

    case 7:
        mensagem = "Sábado";
        break;

    default:
        mensagem = "Dia inválido";
}

alert(mensagem);
  