"use strict";
exports.__esModule = true;
/*class Saludo{
    texto: string;
    constructor(mensaje: string){
        this.texto = mensaje;
    }

    saludar(): string{
        return this.texto;
    }
}

let saludo = new Saludo("Hola como estas");
console.log(saludo.saludar());


interface Persona{
    nombres: string,
    apellido: string,
    edad: number,
    estado: boolean
};

let alumno: Persona;
alumno = {nombres: 'ana', apellido: 'gomez', edad: 25, estado: true };
console.log('alumno: ', alumno);
let alumnos: Persona[] = [];
alumnos.push(alumno);
alumnos.push({nombres: 'juan', apellido: 'chavez', edad:30, estado: true});
alumnos.push({nombres: 'abel', apellido: 'lopez',edad: 27, estado: true});

alumnos.forEach(al => {
    console.log('alumons: ', al);
});
*/
console.log('------------herencia en typescript--------------');
console.log('------------------------------------------------');
var Alumno_1 = require("./Alumno");
var Curso_1 = require("./Curso");
var Util_1 = require("./Util");
var alumno = new Alumno_1["default"](123, 555, 'Edwin Ajahuanca');
alumno.verRegistro();
var curso = new Curso_1["default"]();
curso.codigo = 123456;
curso.nombre = 'Edwin';
console.log(curso.info());
console.log(Util_1["default"].fechaActual());
console.log(Util_1["default"].monedaNacional);
console.log(Util_1["default"].monedaDolarAmericano);
