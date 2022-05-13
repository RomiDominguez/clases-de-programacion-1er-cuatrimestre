let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0].dato;
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  console.log("El dato ingresado es:", dato.value);
});
