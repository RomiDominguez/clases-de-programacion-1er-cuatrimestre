let txt = document.getElementById("txt");
let dato = document.getElementById("dato");
let btnCalcular = document.getElementById("btnCalcular");

txt.innerHTML = "Ingrese el monto de su sueldo";

btnCalcular.addEventListener("click", () => {
  let sueldoIngresado: number = Number(dato.value);

  let aumentoVeinte: number = sueldoIngresado * 0.2;
  let resultadoAumentoVeinte: number = sueldoIngresado + aumentoVeinte;

  let aumentoDiez: number = sueldoIngresado * 0.1;
  let resultadoAumentoDiez: number = sueldoIngresado + aumentoDiez;

  let aumentoCinco: number = sueldoIngresado * 0.05;
  let resultadoAumentoCinco: number = sueldoIngresado + aumentoCinco;

  if (sueldoIngresado <= 15000) {
    console.log("Su aumento es del 20 porciento:", resultadoAumentoVeinte);
  } else if (sueldoIngresado >= 15001 && sueldoIngresado <= 20000) {
    console.log("Su aumento es del 10 porciento", resultadoAumentoDiez);
  } else if (sueldoIngresado >= 20001 && sueldoIngresado <= 25000) {
    console.log("Su aumento es del 5 porciento:", resultadoAumentoCinco);
  } else if (sueldoIngresado > 25000) {
    console.log("Usted no recibe el aumento, su sueldo es:", sueldoIngresado);
  }
});
