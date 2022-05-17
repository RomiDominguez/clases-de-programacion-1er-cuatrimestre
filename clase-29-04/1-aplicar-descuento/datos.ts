let cantidad = document.getElementById("cantidad");
let precio = document.getElementById("precio");
let btnCalcular = document.getElementById("btnCalcular");
let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");

txt1.innerHTML = "Ingrese la cantidad de productos";
txt2.innerHTML = "Ingrese el precio de los productos";

btnCalcular.addEventListener("click", () => {
  let cantidadDeProductos: number = Number(cantidad.value);
  let precioDeProductos: number = Number(precio.value);
  let total: number = cantidadDeProductos * precioDeProductos;
  let descuento: number = total * 0.1;
  let descuentoAplicado: number = total - descuento;

  if (total > 1000) {
    console.log("Total a abonar con el descuento:", descuentoAplicado);
  } else {
    console.log("No se aplica el descuento, el total es:", total);
  }
});
