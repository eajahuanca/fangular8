import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {
  alumno: Alumno;
  alumnos: Alumno[];
  cursos: string[];

  constructor() { }

  ngOnInit() {
    this.cargarCursos();
    this.cargarAlumnos();
  }

  cargarCursos(){
    this.cursos = ['Angular', 'Nodejs', 'ReactJs', 'VueJs', 'MongoDB', 'Flutter'];
  }

  cargarAlumnos(){
    this.alumnos = [
      {ci: 123456, nombre: "Ana", apellidos: "Gomez", curso: "Angular"},
      {ci: 234561, nombre: "Jorge", apellidos: "Chavez", curso: "Nodejs"},
      {ci: 345612, nombre: "Marco", apellidos: "Lopez", curso: "ReactJs"},
      {ci: 456123, nombre: "Jose", apellidos: "Monje", curso: "Flutter"},
    ];
  }
}

interface Alumno{
  ci: number,
  nombre:string,
  apellidos: string,
  curso: string
}
