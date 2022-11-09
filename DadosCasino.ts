var fs = require("fs");
var readlineSync = require('readline-sync');

import { Casino } from "./Casino";

export class DadosCasino extends Casino{
    private primerDado:number;
    private segundoDado:number;
    protected valorApuesta: number;
    protected tematica: string;

constructor(){
        super()
        this.tematica = "Dados";
        this.valorApuesta = 0;
    }

    elegirUnJuego():string {
       return "°°°-LE DAMOS LA BIENVENIDA A DADOS CASINO-°°°" + '\n';

    }

    resultadosGenerales(): string {
        let resultado: string;
        if (this.primerDado === this.segundoDado){
            resultado = "---FELICIDADES HAS GANADO: " + (2 * this.valorApuesta) + "---";

        }else{
            resultado = "---HAS PERDIDO---";
        }

        console.log("---EL RESULTADO DE LA TIRADA FUE: " + this.primerDado + this.segundoDado);
        return resultado;
    }

public hacerApuesta(dinero: number): void {
        this.valorApuesta += dinero;
    }
public   lanzarDados():void{
        this.primerDado = Math.floor(Math.random()*(6-1))+1;
        this.segundoDado =  Math.floor(Math.random()*(6-1))+1;
    }

public  calcularDados():number{
        let resultado: number;
        let sumar: number = this.primerDado + this.segundoDado;
        return resultado = sumar;     
}

public lanzamientos(valorApostado:number):void{
    let lanzamientos:number = 0;
    let seguir: boolean = true;

    while (lanzamientos < 3 && seguir === true){
        if (this.calcularDados() === valorApostado){
            console.log("---FELICIDADES: " + this.primerDado + this.segundoDado + "FUERON LOS NUMEROS GANADORES!---");
            seguir = false;
        }else{
            console.log("---HAS PERDIDO: " + this.primerDado + this.segundoDado + "FUERON LOS NUMEROS PERDEDORES---" + '\n' + "---VUELVE A INTENTARLO---");    
        }
        lanzamientos++;
    }
    if (seguir === true){
        console.log("---TERMINASTE CON TUS INTENTOS---");
    }
}

public probabilidadDeGanar():string{
    let cantidadLanzamientos = 1;
    let probabilidadSalida: number = 1 / 36;
    let posibilidadFinal: number = 1;

    for (let i:number =0; i<= cantidadLanzamientos; i++){
        posibilidadFinal = posibilidadFinal * probabilidadSalida;
    }
    return "---SU PROBABILIDAD DE GANAR ES DE: " + posibilidadFinal + "---";
}

}