import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {

  numero1: number; 
  numero2: number; 
  numero3: number; 
  texto:string = "";
  frutas: string[] = [
    'cereza.png',
    'frambuesa.png',
    'frutilla.png',
    'manzana.png',
    'naranja.png',
    'pinia.png',
    'sandia.png',
    'uva'
  ];
  constructor() { }

  ngOnInit() {
  }

  generarAleatorio(){
    this.numero1 = Math.trunc(Math.random() * 7) + 1;
    this.numero2 = Math.trunc(Math.random() * 7) + 1;
    this.numero3 = Math.trunc(Math.random() * 7) + 1;

    if(this.numero1 === this.numero2){
      if(this.numero1=== this.numero3){
        this.texto="Ganste";
      }else{
        this.texto = "Pierde";
      }
    }else{
      this.texto = "Pierde";
    }
  }
}
