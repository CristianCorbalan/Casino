"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TragamonedasMix = void 0;
var fs = require("fs");
var readlineSync = require('readline-sync');
var Casino_1 = require("./Casino");
var TragamonedasMix = /** @class */ (function (_super) {
    __extends(TragamonedasMix, _super);
    function TragamonedasMix() {
        var _this = _super.call(this) || this;
        _this.rueda1 = new Array;
        _this.rueda2 = new Array;
        _this.rueda3 = new Array;
        _this.dineroDisponible = 50000;
        _this.rueda1 = ["Trebol", "Manzana", "Cereza", "Bonus", "Diamante", "Siete"];
        _this.rueda2 = ["Trebol", "Manzana", "Cereza", "Bonus", "Diamante", "Siete"];
        _this.rueda3 = ["Trebol", "Manzana", "Cereza", "Bonus", "Diamante", "Siete"];
        return _this;
    }
    TragamonedasMix.prototype.elegirUnJuego = function () {
        return "°*°*°*LE DAMOS LA BIENVENIDA AL TRAGAMONEDAS MIX*°*°*°";
    };
    TragamonedasMix.prototype.hacerApuesta = function (dinero) {
        this.valorApuesta += dinero;
    };
    TragamonedasMix.prototype.estadoFinalDeRuedas = function () {
        var lugarRuedas = Math.floor(Math.random() * (5 - 1)) + 1;
        return lugarRuedas;
    };
    TragamonedasMix.prototype.resultadosGenerales = function () {
        var rueda1 = this.rueda1[this.estadoFinalDeRuedas()];
        var rueda2 = this.rueda2[this.estadoFinalDeRuedas()];
        var rueda3 = this.rueda3[this.estadoFinalDeRuedas()];
        var resultado;
        if (rueda1 === rueda2 && rueda1 === rueda3) {
            this.estadoDeRuedas = 1;
        }
        else if (rueda1 === rueda2 && rueda1 != rueda3 || rueda2 === rueda3 && rueda2 != rueda1 || rueda3 === rueda1 && rueda3 != rueda2) {
            this.estadoDeRuedas = 2;
        }
        else {
            this.estadoDeRuedas = 0;
        }
        return resultado = (rueda1 + "-" + rueda2 + "-" + rueda3);
    };
    TragamonedasMix.prototype.verGanancia = function () {
        var premio;
        switch (this.estadoDeRuedas) {
            case 1:
                premio = this.dineroDisponible;
                this.dineroDisponible = 50000;
                break;
            case 2:
                premio = this.valorApuesta * 2.5;
                this.dineroDisponible = Number(this.valorApuesta) + this.dineroDisponible;
                break;
            default:
                premio = 0;
                this.dineroDisponible = this.dineroDisponible + Number(this.valorApuesta) * 3;
                break;
        }
        return premio;
    };
    TragamonedasMix.prototype.probabilidadDeGanar = function () {
        var numero = 1;
        var lineas = 1 / 20; /*INFO SACADA DE INTERNET "Una máquina actualmente puede dar un promedio de 15 a 20 combinaciones de líneas y unas pocas llegan a 100, pero lo importante es cómo se ordenan."*/
        var probabilidad = 1;
        for (var i = 0; i <= numero; i++) {
            probabilidad = probabilidad * lineas;
        }
        return "***LA PROBABILIDAD DE GANAR ESTE JUEGO ES DE: " + probabilidad + "***";
    };
    return TragamonedasMix;
}(Casino_1.Casino));
exports.TragamonedasMix = TragamonedasMix;
