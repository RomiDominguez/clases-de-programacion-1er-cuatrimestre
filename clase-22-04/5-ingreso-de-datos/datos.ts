let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  console.log("El dato ingresado es:", dato.value);
});

rotulo.innerHTML = "Ingresar un dato";
