/*clase principal de los juegos*/
import { Casino } from "./Casino";
export abstract class Tragamonedas extends Casino {
    protected tematica:string;
    protected valorApuesta:number;
    protected probabilidadDeGanar:number;

    constructor(tematica:string, valorApuesta:number, probabilidadDeGanar:number){
      super()

        this.tematica = tematica;
        this.valorApuesta = valorApuesta;
        this.probabilidadDeGanar = probabilidadDeGanar;

    }


    protected getTematica(paramTematica: string):string{
        return "/// LE DAMOS LA BIENVENIDA AL" + paramTematica + "///" + "\n" + "---LES DESEAMOS MUCHA SUERTE---"
    } 

    protected getValorDeApuesta():number{
        return this.valorApuesta;
    }

    protected getProbabilidadDeGanar():number{
        return this.probabilidadDeGanar;
    }
}