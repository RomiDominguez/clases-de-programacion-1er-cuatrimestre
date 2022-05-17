let tiempo1 = document.getElementById("tiempo1");
let tiempo2 = document.getElementById("tiempo2");
let tiempo3 = document.getElementById("tiempo3");
let tiempo4 = document.getElementById("tiempo4");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  let primerVuelta: number = Number(tiempo1.value);
  let segundaVuelta: number = Number(tiempo2.value);
  let tercerVuelta: number = Number(tiempo3.value);
  let cuartaVuelta: number = Number(tiempo4.value);
  let tiempoTotalVueltas: number =
    primerVuelta + segundaVuelta + tercerVuelta + cuartaVuelta;
  let promedioDeVueltas: number = tiempoTotalVueltas / 4;

  console.log("El tiempo total de las vueltas es:", tiempoTotalVueltas);
  console.log("El promedio total de las vueltas es:", promedioDeVueltas);
});
