function verificarTriangulo() {
    let lado1 = parseFloat(document.getElementById('lado1').value);
    let lado2 = parseFloat(document.getElementById('lado2').value);
    let lado3 = parseFloat(document.getElementById('lado3').value);
    let resultado = document.getElementById('resultado');

    if (!lado1 || !lado2 || !lado3) {
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        resultado.innerHTML = "Os valores devem ser números positivos.";
        return;
    }

    if (lado1 >= lado2 + lado3 || lado2 >= lado1 + lado3 || lado3 >= lado1 + lado2) {
        resultado.innerHTML = "Os valores informados não formam um triângulo.";
        return;
    }

    if (lado1 === lado2 && lado2 === lado3) {
        resultado.innerHTML = "É um triângulo Equilátero.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        resultado.innerHTML = "É um triângulo Isósceles.";
    } else {
        resultado.innerHTML = "É um triângulo Escaleno.";
    }
}