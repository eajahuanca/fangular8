import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoFrmComponent } from './componentes/alumno-frm/alumno-frm.component';
import { AlumnoTblComponent } from './componentes/alumno-tbl/alumno-tbl.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoFrmComponent,
    AlumnoTblComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
