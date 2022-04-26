class TorosYVacas {
    constructor(codigoSecreto) {
        this.codigoSecreto = codigoSecreto;
    }
    adivinar(intento) {
        if (intento === this.codigoSecreto) {
            return "Ganaste!";
        } else if (this.codigoSecreto.search(intento[0]) > -1) {
            return "*";
        }
        return "";
    }
}

export default TorosYVacas;