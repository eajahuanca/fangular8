import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alumno: Alumno = {
    ci: 123456,
    nombres: 'Ana',
    apellidos: 'Gomez',
    curso: 'Angular'
  };

  mensaje: string ='';

  onEnviarMensaje(mensaje: HTMLInputElement): void{
      if(mensaje.value){
          this.mensaje = mensaje.value;
      }
  }
}

interface Alumno{
  ci: number,
  nombres: string,
  apellidos: string,
  curso: string
}
