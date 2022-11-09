var fs = require("fs");
var readlineSync = require('readline-sync');

import { Casino } from "./Casino";
export class TragamonedasMix extends Casino{

        private rueda1 = new Array<string>
        private rueda2 = new Array<string>
        private rueda3 = new Array<string> 
        private estadoDeRuedas:number;
        private dineroDisponible:number
        constructor(){
            super()
            this.dineroDisponible = 50000;
            this.rueda1 = ["Trebol", "Manzana", "Cereza", "Bonus", "Diamante", "Siete"];
            this.rueda2 = ["Trebol", "Manzana", "Cereza", "Bonus", "Diamante", "Siete"];
            this.rueda3 = ["Trebol", "Manzana", "Cereza", "Bonus", "Diamante", "Siete"];
        }

        elegirUnJuego():string {
            return "°*°*°*LE DAMOS LA BIENVENIDA AL TRAGAMONEDAS MIX*°*°*°"
        }

         hacerApuesta(dinero: number): void {
            this.valorApuesta += dinero;
        }

        public estadoFinalDeRuedas():number{
            let lugarRuedas: number = Math.floor(Math.random() * (5-1))+1;
            return lugarRuedas;
        }

        resultadosGenerales():string{
            let rueda1 = this.rueda1[this.estadoFinalDeRuedas()];
            let rueda2 = this.rueda2[this.estadoFinalDeRuedas()];
            let rueda3 = this.rueda3[this.estadoFinalDeRuedas()];
            let resultado:string;
            if (rueda1 === rueda2 && rueda1 === rueda3){
                this.estadoDeRuedas =1;
            }else if (rueda1 === rueda2 && rueda1 != rueda3 || rueda2 === rueda3 && rueda2 != rueda1 || rueda3 === rueda1 && rueda3 != rueda2){
                this.estadoDeRuedas = 2;
            }else{
                this.estadoDeRuedas = 0;
            }
            return resultado = (rueda1 +"-"+ rueda2 +"-"+ rueda3);
            
        }

        verGanancia():number{
            let premio:number;
            switch(this.estadoDeRuedas){
                case 1:
                        premio = this.dineroDisponible;
                        this.dineroDisponible = 50000;
                        break;

                case 2:
                        premio = this.valorApuesta*2.5;
                        this.dineroDisponible = Number(this.valorApuesta) + this.dineroDisponible;
                        break;
                
                default:
                        premio = 0;
                        this.dineroDisponible = this.dineroDisponible + Number(this.valorApuesta)*3;
                        break;        
            }
            return premio;
        }

       public probabilidadDeGanar(): string{
        let numero: number = 1;
        let lineas: number = 1/20; /*INFO SACADA DE INTERNET "Una máquina actualmente puede dar un promedio de 15 a 20 combinaciones de líneas y unas pocas llegan a 100, pero lo importante es cómo se ordenan."*/
        let probabilidad : number = 1;
        
        for (let i:number = 0; i <= numero; i++){
            probabilidad = probabilidad * lineas;
        }
        return "***LA PROBABILIDAD DE GANAR ESTE JUEGO ES DE: " + probabilidad + "***";
       }


       
    }
