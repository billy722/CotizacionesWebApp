import { ProductosInterface } from '../../../modelos/productos.interface';
import { ResponseInterface } from '../../../modelos/response.interface';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit{

  @Input() categoriaSeleccionada:string = "1";
  @Input() producto!:ProductosInterface;
  @Input() desdeCotizacion!:boolean;
  @Output() eventoProductoEliminardo = new EventEmitter();
  
  cotizacion_seleccionada:string = "";

  ngOnInit(): void {
      if(localStorage.getItem("cotizacion_seleccionada")){
          this.cotizacion_seleccionada = <string>localStorage.getItem("cotizacion_seleccionada");
      }
  }

  constructor(private api:ApiService, private router:Router){}

  deleteProduct(id_producto:string){
    this.api.eliminarProducto(id_producto).subscribe( data => {
        this.eventoProductoEliminardo.emit();
    });
  }

  agregarProductoCotizacion(id_producto:string,valor:string){
    
    // alert("p: "+id_producto+" c:"+this.cotizacion_seleccionada+" v: "+valor);
      
    this.api.agregarProductoCotizacion(id_producto,this.cotizacion_seleccionada,valor).subscribe( data => {
          if(data.status == "ok"){
              console.log("producto agregado a la cotizacion");
              this.router.navigate(['/detalle_cotizacion']);
          }else{
            alert("Error al agregar producto");
          }
      });
    
  }





}
