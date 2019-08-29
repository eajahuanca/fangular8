import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent implements OnInit {
  alumno: Alumno;
  alumnos: Alumno[];
  cursos: string[];
  editar: boolean;

  constructor() { }

  ngOnInit() {
    this.cargarCursos();
    this.cargarAlumnos();
    this.editar = false;
  }

  cargarCursos(){
    this.cursos = ['Angular', 'Nodejs', 'Reactjs', 'VueJs', 'MongoDB', 'Flutter'];
  }

  cargarAlumnos(){
    this.alumnos = [
      {ci: 123456, nombre: "Ana", apellidos: "Gomez", curso: "Angular"},
      {ci: 234561, nombre: "Jorge", apellidos: "Chavez", curso: "Angular"},
      {ci: 345612, nombre: "Marco", apellidos: "Lopez", curso: "Nodejs"},
      {ci: 456123, nombre: "Jose", apellidos: "Monje", curso: "Nodejs"},
    ];
  }

  eliminar(mici: number){
    this.alumnos = this.alumnos.filter(ele => ele.ci !== mici);
    //this.cargarAlumnos();

    //gabriel
    //const pos = this.alumnos.findIndex(ele => ele.ci === mici)
    //this.alumnos.splice(pos,1);
  }

  guardar(mici: number){
    this.editar = false
    console.log(this.alumnos);
    /*
    const position = this.alumnos.findIndex(ele => ele.ci===mici)

    this.alumnos[position].nombre = this.alumno.nombre;
    this.alumnos[position].apellidos = this.alumno.apellidos;
    this.alumnos[position].curso = this.alumno.curso;
  */  

    /*
    this.alumnos = this.alumnos.filter(ele => {
      if(ele.ci === mici){
        ele.nombre = this.alumno.nombre,
        ele.apellidos = this.alumno.apellidos,
        ele.curso = this.alumno.curso
      }
    });*/

  }

}

interface Alumno {
  ci: number,
  nombre: string,
  apellidos: string,
  curso: string
}