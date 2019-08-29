import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { DirectivasComponent } from './componentes/directivas/directivas.component';
import { ComponentesParametrosComponent } from './componentes/componentes-parametros/componentes-parametros.component';
import { ComponentesEventosComponent } from './componentes/componentes-eventos/componentes-eventos.component';
import { FrutasComponent } from './componentes/frutas/frutas.component';

const routes: Routes = [
  { path: 'interpolacion', component: InterpolacionComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'comp-parametros', component: ComponentesParametrosComponent },
  { path: 'comp-eventos', component: ComponentesEventosComponent },
  { path: 'frutas', component: FrutasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
