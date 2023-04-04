import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{

 usuario = localStorage.getItem("usuario");

 constructor(private router:Router){}
 ngOnInit(): void {
     this.mostrarCotizaciones
 }

 mostrarCotizaciones(){
  localStorage.removeItem("cliente_seleccionado");
  this.router.navigate(["./cotizaciones"]);
 }

 
}
