import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { DetalleCotizacionComponent } from './detalle-cotizacion/detalle-cotizacion.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ConfiguracionCuestionarioComponent } from './configuracion-cuestionario/configuracion-cuestionario.component';

const appRoutes: Routes=[
  {
    path:"",
    component: ClientesComponent
  },
  {
    path:"cotizaciones",
    component: CotizacionesComponent
  },
  {
    path:"detalle_cotizacion",
    component: DetalleCotizacionComponent
  },
  {
    path:"productos",
    component: ProductosComponent
  },
  {
    path:"detalle_producto",
    component: DetalleProductoComponent
  },
  {
    path:"configuracion_cuestionario",
    component: ConfiguracionCuestionarioComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CotizacionesComponent,
    DetalleCotizacionComponent,
    ProductosComponent,
    DetalleProductoComponent,
    ClientesComponent,
    ConfiguracionCuestionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
