let txtUsr = document.getElementById("txtUsr");
let txtPass = document.getElementById("txtPass");
let usr = document.getElementById("usr");
let pass = document.getElementById("pass");
let btnIngresar = document.getElementById("btnIngresar");

txtUsr.innerHTML = "Ingrese su usuario";
txtPass.innerHTML = "Ingrese su contraseña";

btnIngresar.addEventListener("click", () => {
  let usuarioIngresado: string = usr.value;
  let claveIngresada: string = pass.value;

  let usuario: string = "Juan";
  let password: string = "claveJuan";

  if (usuario == usuarioIngresado && password == claveIngresada) {
    console.log("Los datos son correctos");
  } else {
    console.log("Los datos son incorrectos, ingrese nuevamente");
  }
});
