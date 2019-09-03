import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasListaComponent } from './componentes/notas-lista/notas-lista.component';
import { NotaComponent } from './componentes/nota/nota.component';
import { MonitorComponent } from './componentes/monitor/monitor.component';

const config: SocketIoConfig = { url: 'http://192.168.0.131:3000', options: {} };
//const config: SocketIoConfig = { url: 'http://192.168.0.104:3000/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NotasListaComponent,
    NotaComponent,
    MonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
