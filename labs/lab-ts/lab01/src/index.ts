import Alumno from "./Alumno";

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

import Alumnos from './Alumno';
import Cursos from './Curso';
import Utils from './Util';

let alumno = new Alumnos(123,555, 'Edwin Ajahuanca');
alumno.verRegistro();

let curso = new Cursos();
curso.codigo = 123456;
curso.nombre = 'Edwin';
console.log(curso.info());

console.log(Utils.fechaActual());
console.log(Utils.monedaNacional);
console.log(Utils.monedaDolarAmericano);