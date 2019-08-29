import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-misalertas',
  templateUrl: './misalertas.component.html',
  styleUrls: ['./misalertas.component.css']
})
export class MisalertasComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Se actualizo la informacion de manera correcta', 'OK',
      { timeOut: 3000 });
  }

  showError() {
    this.toastr.error('Se produjo un error inesperado', 'ERROR',
      { timeOut: 3000 });
  }

  showExito() {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Acceso con exito',
      showConfirmButton: false,
      timer: 1500
    });
  }

  showPregunta() {
    Swal.fire({
      title: 'Registrar alumno ?',
      text: 'Alumnos Ana Gomez',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff9933',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.value) {
        this.toastr.success('Proceso completado ...', 'Solicitud', { timeOut: 2000 });
      }
    });
  }


  showProcesando() {
     Swal.fire({
        allowOutsideClick: false, 
        type: 'info', 
        text: 'Cargando datos ...' }); 
        Swal.showLoading(); setTimeout(() => { 
          Swal.close(); }, 3000); 
        }
}
