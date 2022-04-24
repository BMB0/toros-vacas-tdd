import TorosYVacas from "./torosyvacas.js";

const form = document.querySelector("#codigosecreto-form");
const codigoSecretoInput = document.querySelector("#codigosecreto");
const div = document.querySelector("#resultado-div");

const adivinarForm = document.querySelector("#adivinar-form");
const adivinarInput = document.querySelector("#adivinar");

let torosYVacas = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const codigoSecreto = codigoSecretoInput.value;
  torosYVacas = new TorosYVacas(codigoSecreto);

  div.innerHTML = "<p>" + codigoSecreto + "</p>";
});

adivinarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const intento = adivinarInput.value;

  div.innerHTML = "<p>" + torosYVacas.adivinar(intento) + "</p>";
});
