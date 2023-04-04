import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router:Router){}

  cerrarSession(){
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }
  
  mostrarTodosProductos(){
    localStorage.removeItem("cotizacion_seleccionada");
    this.router.navigate(['/cotizaciones']);
  }
}
