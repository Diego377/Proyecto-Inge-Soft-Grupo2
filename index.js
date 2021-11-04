// import calcularTotalConEstado from "./App";

const quantity = document.querySelector("#quantity-number");
const price = document.querySelector("#price-number");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");
const state = document.querySelector("#state-text");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(quantity.value);
  const precio = Number.parseInt(price.value);
  const estado = state.value;

  div.innerHTML = "<p>" + calcularTotalConEstado(cantidad, precio, estado) + "</p>";
});
