function calcularDolar() {
  let valor = Number(document.getElementById("dolar").value);
  let texto = "";
  texto += "1%: " + (valor * 1.01).toFixed(2) + "<br>";
  texto += "2%: " + (valor * 1.02).toFixed(2) + "<br>";
  texto += "5%: " + (valor * 1.05).toFixed(2) + "<br>";
  texto += "10%: " + (valor * 1.10).toFixed(2);
  document.getElementById("res1").innerHTML = texto;
}

function fazerOmelete() {
  let pessoas = Number(document.getElementById("pessoas").value);
  let ovos = pessoas * 2;
  let queijo = pessoas * 50;
  document.getElementById("res2").innerHTML = 
    `Você precisa de ${ovos} ovos e ${queijo}g de queijo.`;
}

function calcularOperacoes() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);

  let texto = "";
  texto += "Soma: " + (n1 + n2) + "<br>";
  texto += "Subtração: " + (n1 - n2) + "<br>";
  texto += "Multiplicação: " + (n1 * n2) + "<br>";
  texto += "Divisão: " + (n2 !== 0 ? (n1 / n2).toFixed(2) : "Não é possível dividir por zero");

  document.getElementById("res3").innerHTML = texto;
}

function fazerPedido() {
  let sabores = Number(document.getElementById("sabores").value);
  let refri = Number(document.getElementById("refri").value);

  let totalPizza = sabores * 12;
  let totalRefri = refri * 7;
  let total = totalPizza + totalRefri;

  document.getElementById("res4").innerHTML = 
    `Sabores escolhidos: ${sabores}<br>` +
    `Refrigerantes: ${refri}<br>` +
    `Total a pagar: R$ ${total.toFixed(2)}`;
}
