import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from './app.reducer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;
  
  constructor(private store: Store<AppState>){
    this.store.select('contador').subscribe( contadorN => {
      this.contador = contadorN;
    });
  }

  incrementar(){
    const accion: Action = {
      type: 'INCREMENTAR'
    }
    this.store.dispatch(accion);
  }

  decrementar(){
    const accion: Action = {
      type: 'DECREMENTAR'
    }
    this.store.dispatch(accion);
  }
}
