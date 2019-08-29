import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarAlumnosComponent } from './componentes/editar-alumnos/editar-alumnos.component';
import { ListarAlumnosComponent } from './componentes/listar-alumnos/listar-alumnos.component';
import { RealceDirective } from './directivas/realce.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditarAlumnosComponent,
    ListarAlumnosComponent,
    RealceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
