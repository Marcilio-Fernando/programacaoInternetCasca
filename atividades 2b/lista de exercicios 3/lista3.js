function calcTerreno() {
  let largura = Number(document.getElementById("larg").value);
  let comprimento = Number(document.getElementById("comp").value);
  let area = largura * comprimento;
  document.getElementById("saida1").innerHTML = area + " m²";
}

function calcFerraduras() {
  let qtdCavalos = Number(document.getElementById("cavalos").value);
  let ferraduras = qtdCavalos * 4;
  document.getElementById("saida2").innerHTML = ferraduras;
}

function calcPadaria() {
  let qtdPao = Number(document.getElementById("pao").value);
  let qtdBroa = Number(document.getElementById("broa").value);
  let total = qtdPao * 0.12 + qtdBroa * 1.5;
  let poupanca = total * 0.10;
  document.getElementById("saida3").innerHTML = "valor total " + total.toFixed(2) + " /  Valor a guardar " + poupanca.toFixed(2);
}

function calcularDias() {
  let nome = document.getElementById("nomepessoa").value;
  let idade = Number(document.getElementById("idadepessoa").value);
  let dias = idade * 365;
  document.getElementById("res4").innerHTML = nome + ": Você vive a " + dias;
}

function calcLitros() {
  let valor = Number(document.getElementById("valGas").value);
  let preco = Number(document.getElementById("precoLitro").value);
  let litros = valor / preco;
  document.getElementById("res5").innerHTML = litros.toFixed(2) + " litros";
}

function calcQuilo() {
  let peso = Number(document.getElementById("peso").value);
  let tara = Number(document.getElementById("tara").value);
  let liquido = peso - tara;
  let total = liquido * 12;
  document.getElementById("res6").innerHTML = total.toFixed(2);
}

function calcDiasPassados() {
  let inicio = Number(document.getElementById("anoInicio").value);
  let fim = Number(document.getElementById("anoFinal").value);
  let dias = (fim - inicio) * 365;
  document.getElementById("res7").innerHTML = dias;
}

function calcCamisetas() {
  let p = Number(document.getElementById("peq").value);
  let m = Number(document.getElementById("med").value);
  let g = Number(document.getElementById("gra").value);
  let total = p * 10 + m * 12 + g * 15;
  document.getElementById("res8").innerHTML ="Valor total R$:" + total.toFixed(2);
}

function calcDistancia() {
  let x1 = Number(document.getElementById("x1").value);
  let y1 = Number(document.getElementById("y1").value);
  let x2 = Number(document.getElementById("x2").value);
  let y2 = Number(document.getElementById("y2").value);
  let dx = x2 - x1;
  let dy = y2 - y1;
  let dist = Math.sqrt(dx * dx + dy * dy);
  document.getElementById("res9").innerHTML = dist.toFixed(2);
}

function converterDias() {
  let dias = Number(document.getElementById("diasTrabalho").value);
  let anos = Math.floor(dias / 365);
  let meses = Math.floor((dias % 365) / 30);
  let resto = (dias % 365) % 30;
  document.getElementById("res10").innerHTML = anos + "a " + meses + "m " + resto + "d";
}

function calcularSalario() {
  let sal = Number(document.getElementById("salAtual").value);
  let aumento = sal * 1.15;
  let final = aumento * 0.92;
  document.getElementById("res11").innerHTML = final.toFixed(2);
}

function separarNum() {
  let num = Number(document.getElementById("num3dig").value);
  let c = Math.floor(num / 100);
  let d = Math.floor((num % 100) / 10);
  let u = num % 10;
  document.getElementById("res12").innerHTML = c + " " + d + " " + u;
}

function calcPizza() {
  let raio = Number(document.getElementById("raioPizza").value);
  let area = 3.14 * raio * raio;
  document.getElementById("res13").innerHTML = area.toFixed(2);
}

function calcularDivisao() {
    let valorTotal = parseFloat(document.getElementById("valorConta").value);
    let carlos, andre, felipe;

    if (!isNaN(valorTotal) && valorTotal > 0) {
        let valorDividido = Math.floor(valorTotal / 3);
        carlos = valorDividido;
        andre = valorDividido;
        felipe = valorTotal - (carlos + andre);

        document.getElementById("resultado").innerHTML = 
            `Carlos deve pagar: R$${carlos.toFixed(2)}<br>` +
            `André deve pagar: R$${andre.toFixed(2)}<br>` +
            `Felipe deve pagar: R$${felipe.toFixed(2)}`;
    } 
}
