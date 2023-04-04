import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizacionesComponent } from './vistas/cotizaciones/cotizaciones.component';
import { DetalleCotizacionComponent } from './vistas/detalle-cotizacion/detalle-cotizacion.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { DetalleProductoComponent } from './vistas/detalle-producto/detalle-producto.component';
import { ClientesComponent } from './vistas/clientes/clientes.component';
import { CuestionarioComponent } from './vistas/cuestionario/cuestionario.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { LoginComponent } from './vistas/login/login.component';
import { ColaboradoresComponent } from './vistas/colaboradores/colaboradores.component';
import { OpcionesComponent } from './vistas/opciones/opciones.component';
import { CardProductoComponent } from './vistas/productos/card-producto/card-producto.component';
import { NewProductoComponent } from './vistas/productos/new-producto/new-producto.component';

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
    OpcionesComponent,
    CardProductoComponent,
    NewProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
