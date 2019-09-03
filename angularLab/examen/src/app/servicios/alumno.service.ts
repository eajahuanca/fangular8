import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../modelos/alumno';

@Injectable({ providedIn: 'root' })

export class AlumnoService {

  URL_API = 'http://192.168.0.50:3000/api-cognos/alumnos';
  constructor(private http: HttpClient) { }
  leerAlumnos() { return this.http.get(this.URL_API); }
  crearAlumno(alumno: Alumno) { return this.http.post(this.URL_API, alumno); }
  modificarAlumno(alumno: Alumno) { return this.http.put(`${this.URL_API}/${alumno.id}`, alumno); }
  eliminarAlumno(id: Number) { return this.http.delete(`${this.URL_API}/${id}`); }
}