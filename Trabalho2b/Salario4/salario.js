function calcularSalario() {
  let salario = +document.getElementById("Salario").value;
  let cargo = document.getElementById("cargo").value;

  if (!salario) {
    alert("Digite um salário válido.");
    return;
  }

  let perc = cargo === "101" ? 10 :
             cargo === "102" ? 20 :
             cargo === "103" ? 30 : 40;

  let aumento = salario * perc / 100;
  let novo = salario + aumento;

  document.getElementById("resultado").style.display = "block";
  document.getElementById("resultado").innerHTML =
    `<p><b>Salário Antigo:</b> R$ ${salario.toFixed(2)}</p>
     <p><b>Aumento:</b> ${perc}%</p>
     <p><b>Novo Salário:</b> R$ ${novo.toFixed(2)}</p>`;
}