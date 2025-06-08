function resultado(){
    let valorMedio = Number(document.getElementById('valorMedio').value);
    let resultado = document.getElementById('resultado')
    let saldo = 0
    let percen = 0

        if (valorMedio <= 200){percen = 0, saldo = 0}

        else if (valorMedio <= 400){percen = 20; saldo = valorMedio * 0.2}

        else if (valorMedio <= 600){percen = 30; saldo = valorMedio * 0.3}

        else if (valorMedio >= 601){percen = 40; saldo = valorMedio * 0.4 } 


        resultado.innerHTML = 
        "Seu saldo médio é de R$ " + valorMedio.toFixed(2) + "<br>" +
        "Crédito liberado: R$ " + saldo.toFixed(2) +
        (percen > 0 ? " (" + percen + "%)" : " (Nenhum crédito)");



    
    
}