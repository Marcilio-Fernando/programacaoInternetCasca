function troco() {
  let pago = document.getElementById("p1").value;
  let preco = document.getElementById("p2").value;
  let t = pago - preco;
  document.getElementById("r1").innerHTML = "Troco: R$ " + t;
}

function total() {
  let quilo = document.getElementById("q1").value;
  let peso = document.getElementById("q2").value;
  let total = quilo * peso;
  document.getElementById("r2").innerHTML = "Total: R$ " + total;
}

function reajuste() {
  let saldo = document.getElementById("s1").value;
  let novo = saldo * 1.01;
  document.getElementById("r3").innerHTML = "Novo saldo: R$ " + novo;
}

function medias() {
  let n1 = Number(document.getElementById("m1").value);
  let n2 = Number(document.getElementById("m2").value);
  let n3 = Number(document.getElementById("m3").value);

  let media1 = (n1 + n2 + n3) / 3;
  let media2 = (n1*3 + n2*2 + n3*5) / 10;
  let soma = media1 + media2;
  let final = soma / 2;

  document.getElementById("r4").innerHTML =
    "Média Simples: " + media1 + "<br>" +
    "Média Ponderada: " + media2 + "<br>" +
    "Soma das Médias: " + soma + "<br>" +
    "Média das Médias: " + final;
}

function maior() {
  let a = document.getElementById("x1").value;
  let b = document.getElementById("x2").value;
  if (a > b) {
    document.getElementById("r5").innerHTML = "Maior: " + a;
  } else {
    document.getElementById("r5").innerHTML = "Maior: " + b;
  }
}

function menor() {
  let a = document.getElementById("z1").value;
  let b = document.getElementById("z2").value;
  let c = document.getElementById("z3").value;
  let d = document.getElementById("z4").value;

  let menor = a;
  if (b < menor) menor = b;
  if (c < menor) menor = c;
  if (d < menor) menor = d;

  document.getElementById("r6").innerHTML = "Menor: " + menor;
}

function impar() {
  let n = document.getElementById("i1").value;
  if (n % 2 != 0) {
    document.getElementById("r7").innerHTML = "É ímpar";
  } else {
    document.getElementById("r7").innerHTML = "Não é ímpar";
  }
}
