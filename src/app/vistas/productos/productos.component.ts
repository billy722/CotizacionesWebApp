import { ProductosInterface } from './../../modelos/productos.interface';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

 desdeCotizacion:boolean = false;  
 categoriaSeleccionada:string = "1";
 productos:ProductosInterface [] = [];

  constructor(private api:ApiService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
        console.log("recibe parametro 'desde_cotizacion' = "+params['desde_cotizacion']);
        
        if(params['desde_cotizacion']){
            this.desdeCotizacion=true;
        }
    });
  }

  ngOnInit(): void{
    this.obtenerProductos();
  }

	onSelectedCategoria(value:string): void {
		this.categoriaSeleccionada = value;
    this.obtenerProductos();
	}

  public obtenerProductos(){
    this.api.obtenerProductosCategoria(this.categoriaSeleccionada).subscribe(data => {

      if(data.result.data){
        console.log(data.result.data);
        this.productos = data.result.data;
      }else{
        this.productos = [];
      }

    });
  }

}
