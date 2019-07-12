import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraBusquedaComponent } from './components/barra-busqueda/barra-busqueda.component';
import { GaleriaComponent } from './components/galeria/galeria.component';


const routes: Routes = [{ path: '', component: BarraBusquedaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
