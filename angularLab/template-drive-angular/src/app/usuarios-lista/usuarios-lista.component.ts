import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario;
  esInfo = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      result => { 
        this.usuarios = result as Usuario[];
      }
    );
  }

  verInfo(usuario: Usuario){
    this.esInfo = true;
    this.usuario = usuario;
  }

}
