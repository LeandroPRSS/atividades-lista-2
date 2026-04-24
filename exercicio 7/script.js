let a = Number(prompt("Digite o primeiro lado:"));
let b = Number(prompt("Digite o segundo lado:"));
let c = Number(prompt("Digite o terceiro lado:"));

if (a + b > c && a + c > b && b + c > a) {

  if (a === b && b === c) {
    alert("Triângulo Equilátero");
  } else if (a === b || a === c || b === c) {
    alert("Triângulo Isósceles");
  } else {
    alert("Triângulo Escaleno");
  }

} else {
  alert("Não forma um triângulo");
}