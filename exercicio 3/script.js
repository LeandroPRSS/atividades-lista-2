let n1 = Number(prompt("digite a primeira nota: "))
let n2 = Number(prompt(" digite a segunda nota"))

let media = (n1 + n2) / 2;

if (media >= 7) {
  alert("aprovado");
} else if (media <= 6.9) {
  alert("Aluno em recuperação");
} else if (media <= 5.0) {
  alert("Aluno reprovado! ");
}
