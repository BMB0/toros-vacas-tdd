class TorosYVacas {
    constructor(codigoSecreto) {
        this.codigoSecreto = codigoSecreto;
    }
    adivinar(intento) {
        var posicion = 0;
        let respuesta = "";
        if (intento === this.codigoSecreto) {
            return "Ganaste!";
        }
        for (var i = 0; i < this.codigoSecreto.length; i++) {
            posicion = this.codigoSecreto.search(intento[i]);
            if(intento[i] === this.codigoSecreto[i]){
                respuesta += "!";
            }else if (posicion > -1) {
                respuesta += "*";
            }else if (this.codigoSecreto.search(intento[i] + 1) > -1 || this.codigoSecreto.search(intento[i] - 1) > -1) {
                respuesta += "#";
            }
        }
        return respuesta;
    }
}

export default TorosYVacas;