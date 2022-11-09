var fs = require("fs");
var readlineSync = require('readline-sync');

import { Casino } from "./Casino";
export class RuedaDeLaAbundancia extends Casino{
    private rueda = new Array<number>;
    private pozoDisponible: number;
    
    constructor(){
        super()
        this.pozoDisponible = 10000;
        this.rueda = [1000, 40, 100, 50, 10000, 20, 400, 0, 200, 100, 70, 60, 30, 500, 50, 100, 40, 200, 70, 100, 30, 10, 20,0];
    }

    public hacerApuesta(dinero: number): void {
        this.valorApuesta += dinero;
    }

    public posicionDeRueda():number{
        let lugRueda:number = Math.floor(Math.random() * (23 + 1));
        return lugRueda;
    }

    public resultadosGenerales():number {
        let rueda = this.rueda[this.posicionDeRueda()];
        let ganancia:number;
        
        switch(rueda) {
            case 10000:
                        ganancia = this.pozoDisponible;
                        this.pozoDisponible = 10000;
                        break;
                     
            case 1000:
            case 500:
            case 400:
            case 200:
            case 100:
            case 70:
            case 60:
            case 50:
            case 40:
            case 30:
            case 20:
            case 10:
                ganancia = this.valorApuesta*1.5;
                this.pozoDisponible = Number(this.valorApuesta) + this.pozoDisponible;
                break;
                
            default:
                ganancia = 0;
                this.pozoDisponible = this.pozoDisponible + Number(this.valorApuesta)*2;
                break;    
        }
        return ganancia;
    }
    
    elegirUnJuego():string {
        return "*.*.*.*LE DAMOS LA BIENVENIDA A LA RUEDA DE LA ABUNDANCIA*.*.*.*";
    }
       
    public probabilidadDeGanar():string{
        let cantGiros = 1;
        let posibilidadDeSalida: number = 1 / 22;
        let posFinal: number = 1;

        for (let i:number = 0; i<= cantGiros; i++){
            posFinal = posFinal * posibilidadDeSalida;
        }
        return "°°°°LA PROBABILIDAD DE GANAR ES DE: " + posFinal + "°°°°";
    }    

}