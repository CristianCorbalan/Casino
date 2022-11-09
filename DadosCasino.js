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
exports.DadosCasino = void 0;
var fs = require("fs");
var readlineSync = require('readline-sync');
var Casino_1 = require("./Casino");
var DadosCasino = /** @class */ (function (_super) {
    __extends(DadosCasino, _super);
    function DadosCasino() {
        var _this = _super.call(this) || this;
        _this.tematica = "Dados";
        _this.valorApuesta = 0;
        return _this;
    }
    DadosCasino.prototype.elegirUnJuego = function () {
        return "°°°-LE DAMOS LA BIENVENIDA A DADOS CASINO-°°°" + '\n';
    };
    DadosCasino.prototype.resultadosGenerales = function () {
        var resultado;
        if (this.primerDado === this.segundoDado) {
            resultado = "---FELICIDADES HAS GANADO: " + (2 * this.valorApuesta) + "---";
        }
        else {
            resultado = "---HAS PERDIDO---";
        }
        console.log("---EL RESULTADO DE LA TIRADA FUE: " + this.primerDado + this.segundoDado);
        return resultado;
    };
    DadosCasino.prototype.hacerApuesta = function (dinero) {
        this.valorApuesta += dinero;
    };
    DadosCasino.prototype.lanzarDados = function () {
        this.primerDado = Math.floor(Math.random() * (6 - 1)) + 1;
        this.segundoDado = Math.floor(Math.random() * (6 - 1)) + 1;
    };
    DadosCasino.prototype.calcularDados = function () {
        var resultado;
        var sumar = this.primerDado + this.segundoDado;
        return resultado = sumar;
    };
    DadosCasino.prototype.lanzamientos = function (valorApostado) {
        var lanzamientos = 0;
        var seguir = true;
        while (lanzamientos < 3 && seguir === true) {
            if (this.calcularDados() === valorApostado) {
                console.log("---FELICIDADES: " + this.primerDado + this.segundoDado + "FUERON LOS NUMEROS GANADORES!---");
                seguir = false;
            }
            else {
                console.log("---HAS PERDIDO: " + this.primerDado + this.segundoDado + "FUERON LOS NUMEROS PERDEDORES---" + '\n' + "---VUELVE A INTENTARLO---");
            }
            lanzamientos++;
        }
        if (seguir === true) {
            console.log("---TERMINASTE CON TUS INTENTOS---");
        }
    };
    DadosCasino.prototype.probabilidadDeGanar = function () {
        var cantidadLanzamientos = 1;
        var probabilidadSalida = 1 / 36;
        var posibilidadFinal = 1;
        for (var i = 0; i <= cantidadLanzamientos; i++) {
            posibilidadFinal = posibilidadFinal * probabilidadSalida;
        }
        return "---SU PROBABILIDAD DE GANAR ES DE: " + posibilidadFinal + "---";
    };
    return DadosCasino;
}(Casino_1.Casino));
exports.DadosCasino = DadosCasino;
