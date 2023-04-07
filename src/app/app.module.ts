import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizacionesComponent } from './vistas/cotizaciones/cotizaciones.component';
import { DetalleCotizacionComponent } from './vistas/cotizaciones/detalle-cotizacion/detalle-cotizacion.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { DetalleProductoComponent } from './vistas/productos/detalle-producto/detalle-producto.component';
import { ClientesComponent } from './vistas/clientes/clientes.component';
import { CuestionarioComponent } from './vistas/cuestionario/cuestionario.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { LoginComponent } from './vistas/login/login.component';
import { ColaboradoresComponent } from './vistas/colaboradores/colaboradores.component';
import { OpcionesComponent } from './vistas/opciones/opciones.component';
import { CardProductoComponent } from './vistas/productos/card-producto/card-producto.component';
import { NewProductoComponent } from './vistas/productos/new-producto/new-producto.component';
import { PreguntasComponent } from './vistas/cuestionario/preguntas/preguntas.component';
import { ProblematicasComponent } from './vistas/cuestionario/problematicas/problematicas.component';
import { AlternativasComponent } from './vistas/cuestionario/alternativas/alternativas.component';
import { CardProblematicaComponent } from './vistas/cuestionario/card-problematica/card-problematica.component';

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
    path:"productos/:desde_cotizacion",
    component: ProductosComponent
  },
  {
    path:"colaboradores",
    component: ColaboradoresComponent
  },
  {
    path:"detalle_producto/:id_producto",
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
    NewProductoComponent,
    PreguntasComponent,
    ProblematicasComponent,
    AlternativasComponent,
    CardProblematicaComponent
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
