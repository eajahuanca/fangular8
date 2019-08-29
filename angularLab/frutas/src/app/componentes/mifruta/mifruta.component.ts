import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mifruta',
  templateUrl: './mifruta.component.html',
  styleUrls: ['./mifruta.component.css']
})
export class MifrutaComponent implements OnInit {
  numero1: number;
  numero2: number;
  numero3: number;
  fruta1: string = "cereza.png";
  fruta2: string = "pinia.png";
  fruta3: string = "cereza.png";

  texto: string = "";
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

  generarAleatorio() {
    this.numero1 = Math.trunc(Math.random() * 6) + 1;
    this.numero2 = Math.trunc(Math.random() * 6) + 1;
    this.numero3 = Math.trunc(Math.random() * 6) + 1;
    this.fruta1 = this.frutas[this.numero1];
    this.fruta2 = this.frutas[this.numero2];
    this.fruta3 = this.frutas[this.numero3];

    if (this.numero1 === this.numero2) {
      if (this.numero1 === this.numero3) {
        this.texto = "Ganste";
      } else {
        this.texto = "Pierde";
      }
    } else {
      this.texto = "Pierde";
    }
  }

}
