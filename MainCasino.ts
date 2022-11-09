var readlineSync = require("readline-sync");

import { DadosCasino } from "./DadosCasino";
import { TragamonedasMix } from "./TragamonedasMix";
import { RuedaDeLaAbundancia } from "./RuedaDeLaAbundancia";


let Dados: DadosCasino = new DadosCasino();
let Tragamonedas_Mix: TragamonedasMix = new TragamonedasMix();
let RuedaAbundancia: RuedaDeLaAbundancia = new RuedaDeLaAbundancia();


var readlineSync = require("readline-sync"),
juegos = new Array<string>,
juegos = ["Dados", "Tragamonedas Mix", "Rueda De La Abundancia"],
opciones = readlineSync.keyInSelect(juegos, "ELIJA UN JUEGO");
console.log("EL JUEGO ELEGIDO FUE: " + juegos[opciones] + "-" + "\n" );

if (opciones === 0){
    console.log(Dados.elegirUnJuego());
let apostar = readlineSync.question("Realice su apuesta:$ ");
parseInt(apostar);
Dados.hacerApuesta(apostar);
Dados.lanzarDados();
Dados.calcularDados();
let elegir =readlineSync.question("Para apostar a un numero (marque 1) o para apostar que amobos dados son iguales (marque 2)");
parseInt(elegir);
if (elegir = 1){
let opciones = readlineSync.question("Elija un numero del 2 al 12 con el que quieras jugar:  ");
console.log("Los dados fueron tirados");
Dados.lanzamientos(opciones);
}else if (elegir = 2 ){
    console.log("Los dados fueron tirados");
    console.log(Dados.resultadosGenerales());
}
Dados.leerArchivo("InformeDados.txt");
Dados.crearArchivo("InformeDados.txt", Dados.resultadosGenerales());

}else if (opciones === 1){
    console.log(Tragamonedas_Mix.elegirUnJuego());
    let apuesta = readlineSync.question("Realice su apuesta:$ ");
    while (apuesta <= 0 || isNaN(apuesta)){
        parseInt(apuesta);
        Tragamonedas_Mix.hacerApuesta(apuesta);
    }
console.log(Tragamonedas_Mix.resultadosGenerales());
Tragamonedas_Mix.leerArchivo("InformeTragamonedasMix.txt");
Tragamonedas_Mix.crearArchivo("InformeTragamonedasMix.txt", Tragamonedas_Mix.resultadosGenerales());

}else if(opciones === 2){
    console.log(RuedaAbundancia.elegirUnJuego());
    let apuesta = readlineSync.question("Realice su apuesta:$ ");
    while (apuesta <= 0 || isNaN(apuesta)){
        parseInt(apuesta);
        RuedaAbundancia.hacerApuesta(apuesta);
    }
    console.log(RuedaAbundancia.resultadosGenerales());
    RuedaAbundancia.leerArchivo("InformeRuedaAbundancia.txt");
    RuedaAbundancia.crearArchivo("InformeRuedaAbundancia.txt", RuedaAbundancia.resultadosGenerales());
}else{
    console.log("Ingrese un numero valido");
}