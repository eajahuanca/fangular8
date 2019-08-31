import { Component } from '@angular/core';
import { Alumno} from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  botonOpcion: string = 'Registrar';

  alumnoArray:Alumno[] = [
    {id:1, nombre_completo: 'Marcelo Moscoso', identidad: '16465'},
    {id:2, nombre_completo: 'Ana gomez', identidad: '145555'},
    {id:3, nombre_completo: 'Jorge Valquez', identidad: '154545'}
  ];

  selectedAlumno : Alumno = {id:0, nombre_completo:'', identidad:''};

  openForEdit(Alumno: Alumno): void{
    this.botonOpcion = 'Editar'
    this.selectedAlumno  = Alumno;
  }

  addOrEdit(): void{
    this.botonOpcion = 'Registrar';
    if(this.selectedAlumno .id == 0) //insertar
    {
      this.selectedAlumno .id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno );
    }
    this.selectedAlumno  = {id:0, nombre_completo:'', identidad:''};
  }

  delete():void{
    if(confirm('Desea eliminar el registro?')){
      this.alumnoArray = this.alumnoArray.filter(al => al != this.selectedAlumno );
      this.selectedAlumno  = {id:0, nombre_completo:'', identidad:''};
      this.botonOpcion = 'Registrar';
    }
  }
}
