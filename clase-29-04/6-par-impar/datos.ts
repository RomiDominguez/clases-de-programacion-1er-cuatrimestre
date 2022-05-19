let txt = document.getElementById("txt");
let num = document.getElementById("num");
let btnCalcular = document.getElementById("btnCalcular");

txt.innerHTML = "Ingrese un número";

btnCalcular.addEventListener("click", () => {
  let numeroIngresado: number = Number(num.value);

  if (numeroIngresado == 0) {
    console.log("Usted ingreso 0, ingrese otro número");
  } else if (numeroIngresado % 2 == 0) {
    console.log("El número es par");
  } else if (numeroIngresado != 0) {
    console.log("El número es impar");
  }
});
