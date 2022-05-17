let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btnResultado = document.getElementById("btnResultado");

btnResultado.addEventListener("click", () => {
  let numero1: number = Number(num1.value);
  let numero2: number = Number(num2.value);
  let resultado: number = numero1 + numero2;
  console.log("La suma es:", resultado);
});
