"use strict";
exports.__esModule = true;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.fechaActual = function () {
        var fecha = new Date();
        var dd = fecha.getDate();
        var mm = fecha.getMonth() + 1;
        var yyyy = fecha.getFullYear();
        var dia = '';
        var mes = '';
        if (dd < 10) {
            dia = '0' + dd;
        }
        else {
            dia = dd.toString();
        }
        if (mm < 10) {
            mes = '0' + mm;
        }
        else {
            mes = mm.toString();
        }
        var hoy = dia + '/' + mes + '/' + yyyy;
        return hoy;
    };
    Util.monedaNacional = 'BOB';
    Util.monedaDolarAmericano = 'USD';
    return Util;
}());
exports["default"] = Util;
