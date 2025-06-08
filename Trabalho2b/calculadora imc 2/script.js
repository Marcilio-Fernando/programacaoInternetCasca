
const calcular = document.getElementById('calcular')

function imc () {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        const ValorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';

        if (ValorIMC < 18.5){
            classificacao = 'abaixo do peso';
        } else if  (ValorIMC < 25)  {
            classificacao = 'peso ideal. Parabéns!!';
        }
        else if (ValorIMC < 30) {
            classificacao = 'levemente acima do peso';
        }
        else if (ValorIMC < 35){
            classificacao = 'com obesidade grau I';
        }
                else if (ValorIMC < 40){
            classificacao = 'com obesidade grau II';
        }
        else {
            classificacao = 'com obesidade grau III. cuidado!!';
        }
resultado.textContent = `${nome} seu IMC é ${ValorIMC} você está ${classificacao}`
    } else {
        resultado.textContent = 'preencha todos os campos'
    }

}


calcular.addEventListener('click', imc)