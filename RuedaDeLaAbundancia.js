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
exports.RuedaDeLaAbundancia = void 0;
var fs = require("fs");
var readlineSync = require('readline-sync');
var Casino_1 = require("./Casino");
var RuedaDeLaAbundancia = /** @class */ (function (_super) {
    __extends(RuedaDeLaAbundancia, _super);
    function RuedaDeLaAbundancia() {
        var _this = _super.call(this) || this;
        _this.rueda = new Array;
        _this.pozoDisponible = 10000;
        _this.rueda = [1000, 40, 100, 50, 10000, 20, 400, 0, 200, 100, 70, 60, 30, 500, 50, 100, 40, 200, 70, 100, 30, 10, 20, 0];
        return _this;
    }
    RuedaDeLaAbundancia.prototype.hacerApuesta = function (dinero) {
        this.valorApuesta += dinero;
    };
    RuedaDeLaAbundancia.prototype.posicionDeRueda = function () {
        var lugRueda = Math.floor(Math.random() * (23 + 1));
        return lugRueda;
    };
    RuedaDeLaAbundancia.prototype.resultadosGenerales = function () {
        var rueda = this.rueda[this.posicionDeRueda()];
        var ganancia;
        switch (rueda) {
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
                ganancia = this.valorApuesta * 1.5;
                this.pozoDisponible = Number(this.valorApuesta) + this.pozoDisponible;
                break;
            default:
                ganancia = 0;
                this.pozoDisponible = this.pozoDisponible + Number(this.valorApuesta) * 2;
                break;
        }
        return ganancia;
    };
    RuedaDeLaAbundancia.prototype.elegirUnJuego = function () {
        return "*.*.*.*LE DAMOS LA BIENVENIDA A LA RUEDA DE LA ABUNDANCIA*.*.*.*";
    };
    RuedaDeLaAbundancia.prototype.probabilidadDeGanar = function () {
        var cantGiros = 1;
        var posibilidadDeSalida = 1 / 22;
        var posFinal = 1;
        for (var i = 0; i <= cantGiros; i++) {
            posFinal = posFinal * posibilidadDeSalida;
        }
        return "°°°°LA PROBABILIDAD DE GANAR ES DE: " + posFinal + "°°°°";
    };
    return RuedaDeLaAbundancia;
}(Casino_1.Casino));
exports.RuedaDeLaAbundancia = RuedaDeLaAbundancia;
