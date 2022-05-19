let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let txt3 = document.getElementById("txt3");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let btnCalcular = document.getElementById("btnCalcular");

txt1.innerHTML = "Ingrese precio";
txt2.innerHTML = "Ingrese la cantidad";
txt3.innerHTML = "Ingrese el mes";

btnCalcular.addEventListener("click", () => {
  let monto: number = dato1.value;
  let montoConDescuento: number = 0;
  let descuento: number = 0;
  let cantidad: number = dato2.value;
  let precioTotal: number = monto * cantidad;
  let mes: number = dato3.value;
  if (mes == "Octubre") {
    descuento = (precioTotal * 15) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log(
      "Por comprar en el mes de Octubre Ud tiene un 15% de descuento"
    );
    console.log("El monto a pagar es: " + montoConDescuento);
  } else {
    console.log("Ud. no tiene descuento, el monto a pagar es: " + precioTotal);
  }
});
