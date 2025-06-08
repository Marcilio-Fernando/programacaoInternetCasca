function calcularImposto()  {
    let ano = document.getElementById('ano').value;
    let valor = document.getElementById('valor').value;
    let resultado = document.getElementById('resultado');

    let taxa; if (ano < 1990) {
        taxa = 0.01;
    } else {
        taxa = 0.015;
    }

    let imposto = valor * taxa;

    resultado.style.display = 'block';
    resultado.innerHTML = "Imposto a pagar: R$ " + imposto.toFixed("2");
}