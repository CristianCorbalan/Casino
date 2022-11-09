"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var DadosCasino_1 = require("./DadosCasino");
var TragamonedasMix_1 = require("./TragamonedasMix");
var RuedaDeLaAbundancia_1 = require("./RuedaDeLaAbundancia");
var Dados = new DadosCasino_1.DadosCasino();
var Tragamonedas_Mix = new TragamonedasMix_1.TragamonedasMix();
var RuedaAbundancia = new RuedaDeLaAbundancia_1.RuedaDeLaAbundancia();
var readlineSync = require("readline-sync"), juegos = new Array, juegos = ["Dados", "Tragamonedas Mix", "Rueda De La Abundancia"], opciones = readlineSync.keyInSelect(juegos, "ELIJA UN JUEGO");
console.log("EL JUEGO ELEGIDO FUE: " + juegos[opciones] + "-" + "\n");
if (opciones === 0) {
    console.log(Dados.elegirUnJuego());
    var apostar = readlineSync.question("Realice su apuesta:$ ");
    parseInt(apostar);
    Dados.hacerApuesta(apostar);
    Dados.lanzarDados();
    Dados.calcularDados();
    var elegir = readlineSync.question("Para apostar a un numero (marque 1) o para apostar que amobos dados son iguales (marque 2)");
    parseInt(elegir);
    if (elegir = 1) {
        var opciones_1 = readlineSync.question("Elija un numero del 2 al 12 con el que quieras jugar:  ");
        console.log("Los dados fueron tirados");
        Dados.lanzamientos(opciones_1);
    }
    else if (elegir = 2) {
        console.log("Los dados fueron tirados");
        console.log(Dados.resultadosGenerales());
    }
    Dados.leerArchivo("InformeDados.txt");
    Dados.crearArchivo("InformeDados.txt", Dados.resultadosGenerales());
}
else if (opciones === 1) {
    console.log(Tragamonedas_Mix.elegirUnJuego());
    var apuesta = readlineSync.question("Realice su apuesta:$ ");
    while (apuesta <= 0 || isNaN(apuesta)) {
        parseInt(apuesta);
        Tragamonedas_Mix.hacerApuesta(apuesta);
    }
    console.log(Tragamonedas_Mix.resultadosGenerales());
    Tragamonedas_Mix.leerArchivo("InformeTragamonedasMix.txt");
    Tragamonedas_Mix.crearArchivo("InformeTragamonedasMix.txt", Tragamonedas_Mix.resultadosGenerales());
}
else if (opciones === 2) {
    console.log(RuedaAbundancia.elegirUnJuego());
    var apuesta = readlineSync.question("Realice su apuesta:$ ");
    while (apuesta <= 0 || isNaN(apuesta)) {
        parseInt(apuesta);
        RuedaAbundancia.hacerApuesta(apuesta);
    }
    console.log(RuedaAbundancia.resultadosGenerales());
    RuedaAbundancia.leerArchivo("InformeRuedaAbundancia.txt");
    RuedaAbundancia.crearArchivo("InformeRuedaAbundancia.txt", RuedaAbundancia.resultadosGenerales());
}
else {
    console.log("Ingrese un numero valido");
}
