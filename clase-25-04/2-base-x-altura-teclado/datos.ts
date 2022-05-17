let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btnResultado = document.getElementById("btnResultado");
let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");

btnResultado.addEventListener("click", () => {
  let base: number = Number(num1.value);
  let altura: number = Number(num2.value);
  let resultado: number = base * altura;

  console.log("La base por la altura es: ", resultado);
});

txt1.innerHTML = "Ingrese la base ";
txt2.innerHTML = "Ingrese la altura ";
