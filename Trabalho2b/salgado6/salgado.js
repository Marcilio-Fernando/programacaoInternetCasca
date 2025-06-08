function calcular() {
    let codigo = document.getElementById('codigo').value;
    let quantidade = document.getElementById('quantidade').value;
    let resultado = document.getElementById('resultado');

    let preco = 0;
    let produto = '';

    if (codigo == 1) {
        preco = 11;
        produto = 'Cachorro Quente';
    } else if (codigo == 2) {
        preco = 8.5;
        produto = 'Bauru';
    } else if (codigo == 3) {
        preco = 8;
        produto = 'Misto Quente';
    } else if (codigo == 4) {
        preco = 9;
        produto = 'Hamburger';
    } else if (codigo == 5) {
        preco = 10;
        produto = 'Cheeseburger';
    } else if (codigo == 6) {
        preco = 4.5;
        produto = 'Refrigerante';
    } else {
        resultado.innerHTML = ' Código inválido. Digite um código de 1 a 6.';
        return;
    }

    let total = preco * quantidade;

    resultado.innerHTML = '  Você pediu ' + quantidade + ' ' + produto + '. Total a pagar: R$ ' + total.toFixed(2);
}
