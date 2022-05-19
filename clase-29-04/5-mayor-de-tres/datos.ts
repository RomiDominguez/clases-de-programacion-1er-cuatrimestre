let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let txt3 = document.getElementById("txt3");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let btnCalcular = document.getElementById("btnCalcular");

txt1.innerHTML = "Ingrese el primer número";
txt2.innerHTML = "Ingrese el segundo número";
txt3.innerHTML = "Ingrese el tercer número";

btnCalcular.addEventListener("click", () => {
  let primerNumeroIngresado: number = Number(num1.value);
  let segundoNumeroIngresado: number = Number(num2.value);
  let tercerNumeroIngresado: number = Number(num3.value);

  if (
    primerNumeroIngresado > segundoNumeroIngresado &&
    primerNumeroIngresado > tercerNumeroIngresado
  ) {
    console.log("El primer número es el mayor", primerNumeroIngresado);
  } else if (
    segundoNumeroIngresado > primerNumeroIngresado &&
    segundoNumeroIngresado > tercerNumeroIngresado
  ) {
    console.log("El segundo número es el mayor", segundoNumeroIngresado);
  } else if (
    tercerNumeroIngresado > primerNumeroIngresado &&
    tercerNumeroIngresado > segundoNumeroIngresado
  ) {
    console.log("El tercer número es el mayor", tercerNumeroIngresado);
  } else if (
    primerNumeroIngresado == segundoNumeroIngresado &&
    primerNumeroIngresado == tercerNumeroIngresado &&
    segundoNumeroIngresado == primerNumeroIngresado &&
    segundoNumeroIngresado == tercerNumeroIngresado &&
    tercerNumeroIngresado == primerNumeroIngresado &&
    tercerNumeroIngresado == segundoNumeroIngresado
  ) {
    console.log("Todos los números son iguales, ingrese valores diferentes");
  }
});
