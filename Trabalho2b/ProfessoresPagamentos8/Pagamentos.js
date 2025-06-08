function pagar() {
    let nivel = Number(document.getElementById('nivel').value);
    let aulas = Number(document.getElementById('aulas').value);
    let resultado = document.getElementById('resultado');

    let precoHora = 0;

    if (nivel === 1) {
        precoHora = 12;
    } else if (nivel === 2) {
        precoHora = 17;
    } else if (nivel === 3) {
        precoHora = 25;
    } 

    let pagamento = precoHora * aulas;

    resultado.innerHTML = "Valor a receber: R$ " + pagamento.toFixed(2);


}