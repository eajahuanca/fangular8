"use strict";
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso() {
        this.tipo = 'PRESENCIAL';
        this.codigo = 0;
        this.nombre = '';
    }
    Curso.prototype.info = function () {
        return " codigo : " + this.codigo + " - " + this.nombre + " - " + this.tipo;
    };
    return Curso;
}());
exports["default"] = Curso;
