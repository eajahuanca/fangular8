import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { ComponentesParametrosComponent } from './componentes/componentes-parametros/componentes-parametros.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { DirectivasComponent } from './componentes/directivas/directivas.component';
import { ComponentesEventosComponent } from './componentes/componentes-eventos/componentes-eventos.component';
import { FrutasComponent } from './componentes/frutas/frutas.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    ComponentesParametrosComponent,
    EventosComponent,
    DirectivasComponent,
    ComponentesEventosComponent,
    FrutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
