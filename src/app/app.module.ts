import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraBusquedaComponent } from './components/barra-busqueda/barra-busqueda.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoxesComponent } from './components/boxes/boxes.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraBusquedaComponent,
    GaleriaComponent,
    FooterComponent,
    BoxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
