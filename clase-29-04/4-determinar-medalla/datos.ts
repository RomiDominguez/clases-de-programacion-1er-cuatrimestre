let rotulo = document.getElementById("rotulo");
let datoPuesto = document.getElementById("datoPuesto");
let btnConsultar = document.getElementById("btnConsultar");

rotulo.innerHTML = "Ingrese la posición lograda en la carrera";

btnConsultar.addEventListener("click", () => {
  let puestoIngresado: number = Number(datoPuesto.value);

  /*if (puestoIngresado == 1) {
    console.log("Felicitaciones!! Ganó medalla de ORO");
  } else if (puestoIngresado == 2) {
    console.log("Felicitaciones!! Ganó medalla de PLATA");
  } else if (puestoIngresado == 3) {
    console.log("Felicitaciones!! Ganó medalla de BRONCE");
  } else {
    console.log("Felicitaciones!! Obtuviste el certificado de participación");
  }*/

  switch (puestoIngresado) {
    case 1:
      console.log("Felicitaciones!! Ganó medalla de ORO");
      break;

    case 2:
      console.log("Felicitaciones!! Ganó medalla de PLATA");
      break;

    case 3:
      console.log("Felicitaciones!! Ganó medalla de BRONCE");
      break;

    default:
      console.log("Felicitaciones!! Obtuviste el certificado de participación");
  }
});
