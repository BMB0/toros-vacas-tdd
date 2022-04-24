import sumar from "./sumador.js";

describe("Toros y Vacas --> Ganar", () => {
  it("Deberia responder 'Ganaste!' si se adivina el codigo secreto", () => {
    const torosyvacas = new TorosYVacas("3");
    expect(torosyvacas.adivinar("3")).toEqual("Ganaste!");
  });
});


class TorosYVacas {
  adivinar(intento) {
    return "Ganaste!";
  }
}