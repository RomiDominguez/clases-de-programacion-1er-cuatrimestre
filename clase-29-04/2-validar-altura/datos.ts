let txt1 = document.getElementById("txt1");
let altura = document.getElementById("altura");
let btnCalcular = document.getElementById("btnCalcular");

txt1.innerHTML = "Ingrese su altura";

btnCalcular.addEventListener("click", () => {
  let alturaPersona: number = Number(altura.value);

  if (alturaPersona >= 1.3) {
    console.log("Usted puede subir al juego");
  } else {
    console.log("No tiene la altura suficiente para subir al juego");
  }
});
