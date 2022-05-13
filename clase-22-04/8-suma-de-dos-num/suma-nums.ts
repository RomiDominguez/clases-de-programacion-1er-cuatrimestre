let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btnResultado = document.getElementById("btnResultado");

let num1: number = 0;
let num2: number = 0;
let btnResultado: number = num1 + num2;

btnResultado.addEventListener("click", () => {
  console.log(btnResultado);
});
