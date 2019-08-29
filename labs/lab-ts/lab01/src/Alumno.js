"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(codigo, nombres) {
        this.codigo = codigo;
        this.nombres = nombres;
    }
    return Persona;
}());
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(matricula, codigo, nombres) {
        var _this = _super.call(this, codigo, nombres) || this;
        _this.matricula = matricula;
        return _this;
    }
    Alumno.prototype.verRegistro = function () {
        console.log(this.nombres + ", matricula: " + this.matricula);
    };
    return Alumno;
}(Persona));
exports["default"] = Alumno;
