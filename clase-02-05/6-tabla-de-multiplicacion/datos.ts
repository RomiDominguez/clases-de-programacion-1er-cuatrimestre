rotulo1.innerHTML = "La tabla de que numero desea";
rotulo2.innerHTML = "Hasta que numero desea";

btnCalcular.addEventListener("click", () => {
  let numTabla: number = Number(dato1.value);
  let limiteTabla: number = Number(dato2.value);
  let resultado: number = 0;
  for (let contador: number = 1; contador <= limiteTabla; contador++) {
    resultado = numTabla * contador;
    console.log(numTabla, " x ", contador, " = ", resultado);
  }
});
