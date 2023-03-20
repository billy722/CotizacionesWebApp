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
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { OpcionesComponent } from './opciones/opciones.component';

const appRoutes: Routes=[

  {
    path:"",
    component: LoginComponent
  },
  {
    path:"principal",
    component: PrincipalComponent
  },
  {
    path:"clientes",
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
    path:"colaboradores",
    component: ColaboradoresComponent
  },
  {
    path:"detalle_producto",
    component: DetalleProductoComponent
  },
  {
    path:"cuestionario",
    component: CuestionarioComponent
  },
  {
    path:"opciones",
    component: OpcionesComponent
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
    CuestionarioComponent,
    MenuComponent,
    PrincipalComponent,
    LoginComponent,
    ColaboradoresComponent,
    OpcionesComponent
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
