"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var fs = require("fs");
var readlineSync = require('readline-sync');
var Casino = /** @class */ (function () {
    function Casino() {
        this.nombreCasino = "LuckyBreak";
        this.valorApuesta = 0;
    }
    Casino.prototype.hacerApuesta = function (dinero) {
        this.valorApuesta += dinero;
    };
    Casino.prototype.manipular = function (nombre, texto) {
        fs.writeFile(nombre, texto, function (error) {
            if (error) {
                console.log("ERROR");
            }
        });
    };
    Casino.prototype.modificarArchivo = function (nombre, texto) {
        this.manipular(nombre, texto);
    };
    Casino.prototype.leerArchivo = function (path) {
        var txtFile = fs.readFileSync(path, "utf-8");
        return txtFile;
    };
    Casino.prototype.crearArchivo = function (archivo, nuevoTexto) {
        var textoPrincipal = fs.readFileSync(archivo, "utf-8");
        textoPrincipal += nuevoTexto;
        fs.writeFile(archivo, textoPrincipal, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Este resultado ha sido agregado a estadísticas.");
        });
    };
    return Casino;
}());
exports.Casino = Casino;
