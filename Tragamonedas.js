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
exports.Tragamonedas = void 0;
/*clase principal de los juegos*/
var Casino_1 = require("./Casino");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(tematica, valorApuesta, probabilidadDeGanar) {
        var _this = _super.call(this) || this;
        _this.tematica = tematica;
        _this.valorApuesta = valorApuesta;
        _this.probabilidadDeGanar = probabilidadDeGanar;
        return _this;
    }
    Tragamonedas.prototype.getTematica = function (paramTematica) {
        return "/// LE DAMOS LA BIENVENIDA AL" + paramTematica + "///" + "\n" + "---LES DESEAMOS MUCHA SUERTE---";
    };
    Tragamonedas.prototype.getValorDeApuesta = function () {
        return this.valorApuesta;
    };
    Tragamonedas.prototype.getProbabilidadDeGanar = function () {
        return this.probabilidadDeGanar;
    };
    return Tragamonedas;
}(Casino_1.Casino));
exports.Tragamonedas = Tragamonedas;
