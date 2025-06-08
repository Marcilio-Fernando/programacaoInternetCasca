function resultado(){
  let tipoPg = document.getElementById('tipoPg').value;
  let valor =Number(document.getElementById('valor').value);
  let resultado =document.getElementById('resultado');
  let final = 0

  if (isNaN(valor) || valor <= 0) {
    resultado.innerHTML = "Por favor, digite um preço válido.";
    return;
  }
  
  if (tipoPg === "Avista") {final = valor * 0.9}

  else if (tipoPg ==="credito"){final = valor * 0.85}

  else if (tipoPg ==="doisx"){final = valor}
   
  else if (tipoPg ==="xdoisj"){final = valor * 1.1}


resultado.innerHTML = "Valor a pagar: R$ " + final.toFixed(2);
}