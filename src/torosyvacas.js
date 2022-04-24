class TorosYVacas {
    constructor(codigoSecreto) {
        this.codigoSecreto = codigoSecreto;
    }
    adivinar(intento) {
        if (intento === this.codigoSecreto) {
            return "Ganaste!";
        }
        return "";
    }
}

export default TorosYVacas;