let peso = Number(prompt("Digite seu peso (kg):"));
let altura = Number(prompt("Digite sua altura (m):"));

let imc = peso / (altura * altura);
imc = Number(imc.toFixed(2));

if (imc < 18.5) {
  alert("IMC: " + imc + " - Abaixo do peso");
} else if (imc <= 24.9) {
  alert("IMC: " + imc + " - Peso normal");
} else if (imc <= 29.9) {
  alert("IMC: " + imc + " - Sobrepeso");
} else {
  alert("IMC: " + imc + " - Obesidade");
}